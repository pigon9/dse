import { UserGrades, Program, PredictionResult, SubjectGrade, LikelihoodStatus, GradeValue, SelfAssessment } from '../types';
import { getSubjectById } from '../data/subjects';

// Convert grade string to numeric value
export const gradeToScore = (grade: GradeValue | null): number => {
  if (grade === null) return 0;
  
  if (typeof grade === 'number') return grade;
  if (grade === '1') return 1;
  if (grade === '2') return 2;
  if (grade === '3') return 3;
  if (grade === '4') return 4;
  if (grade === '5') return 5.5;
  if (grade === '5*') return 7;
  if (grade === '5**') return 8.5;
  
  return 0;
};

// Sigmoid function for smoother confidence calculation
const sigmoid = (x: number): number => {
  return 1 / (1 + Math.exp(-x));
};

// Calculate confidence score
const calculateConfidence = (
  userScore: number,
  program: Program,
  selfAssessment: SelfAssessment,
  hasMissingRequirements: boolean,
  isFirstPriority: boolean
): number => {
  // Calculate base confidence using sigmoid
  const sensitivity = 1.5;
  const compareScore = isFirstPriority ? program.minBest5 : program.medianBest5;
  const x = (userScore - compareScore) / sensitivity;
  let confidence = sigmoid(x) * 100;
  
  // Apply 10% penalty for missing requirements
  if (hasMissingRequirements) {
    confidence *= 0.9;
  }
  
  // Adjust for self-assessment bias
  switch (selfAssessment) {
    case 'overrated':
      confidence = Math.max(0, confidence - 10);
      break;
    case 'underrated':
      confidence = Math.min(100, confidence + 10);
      break;
    default:
      // No adjustment for 'accurate'
      break;
  }
  
  return Math.round(confidence);
};

// Generate recommendation based on prediction
const generateRecommendation = (
  scoreGap: number,
  confidence: number,
  missingRequirements: string[],
  isFirstPriority: boolean
): string => {
  if (missingRequirements.length > 0) {
    return "Focus on meeting the minimum requirements for core subjects first.";
  }
  
  if (isFirstPriority) {
    if (scoreGap >= 0) {
      return "You meet the minimum requirements for Band A consideration. Focus on maintaining your performance.";
    } else {
      return "Consider improving your grades to meet the minimum requirements for Band A consideration.";
    }
  }
  
  if (scoreGap <= -3) {
    return "Consider preparing backup options or strengthening your application through interviews and extracurriculars.";
  }
  
  if (scoreGap <= 0) {
    return "You're close to the typical admission range. Try to strengthen electives or prepare well for interviews.";
  }
  
  if (confidence >= 80) {
    return "Your profile looks strong for this program. Keep maintaining your academic performance.";
  }
  
  return "You're within the competitive range. Focus on maintaining grades and preparing a strong overall application.";
};

// Calculate the Best 5/6 score
export const calculateBestScore = (
  grades: SubjectGrade[], 
  program: Program, 
  useBest6: boolean = false,
  hasMissingRequirements: boolean = false
): { 
  totalScore: number; 
  bestSubjects: SubjectGrade[]; 
} => {
  // Create a copy of grades with scores
  const gradesWithScores = grades
    .filter(g => g.grade !== null)
    .map(g => {
      const subject = getSubjectById(g.subjectId);
      const baseScore = gradeToScore(g.grade);
      const weight = program.subjectWeighting?.[g.subjectId] || 1;
      
      return {
        ...g,
        baseScore,
        weightedScore: baseScore * weight,
        category: subject?.category
      };
    });

  // Sort by weighted score (highest first)
  gradesWithScores.sort((a, b) => b.weightedScore - a.weightedScore);
  
  // Determine how many subjects to use
  const subjectsToUse = useBest6 ? 6 : 5;
  
  // Take the best N subjects
  const bestSubjects = gradesWithScores.slice(0, subjectsToUse).map(g => ({
    subjectId: g.subjectId,
    grade: g.grade
  }));
  
  // Calculate total score
  let totalScore = gradesWithScores
    .slice(0, subjectsToUse)
    .reduce((sum, g) => sum + g.weightedScore, 0);
    
  // Apply 10% penalty if there are missing requirements
  if (hasMissingRequirements) {
    totalScore *= 0.9;
  }
  
  return { totalScore, bestSubjects };
};

// Check if core subject requirements are met
export const checkCoreRequirements = (
  grades: SubjectGrade[],
  minReq: Program['minRequirements']
): string[] => {
  const missingReqs: string[] = [];
  const gradeMap = new Map(grades.map(g => [g.subjectId, g]));
  
  // Check Chinese
  const chiGrade = gradeMap.get('chi')?.grade;
  if (!chiGrade || gradeToScore(chiGrade) < minReq.chinese) {
    missingReqs.push(`Chinese Language (min. ${minReq.chinese})`);
  }
  
  // Check English
  const engGrade = gradeMap.get('eng')?.grade;
  if (!engGrade || gradeToScore(engGrade) < minReq.english) {
    missingReqs.push(`English Language (min. ${minReq.english})`);
  }
  
  // Check Math
  const mathGrade = gradeMap.get('math')?.grade;
  if (!mathGrade || gradeToScore(mathGrade) < minReq.math) {
    missingReqs.push(`Mathematics (min. ${minReq.math})`);
  }
  
  // Check Liberal Studies
  const lsGrade = gradeMap.get('ls')?.grade;
  if (!lsGrade || gradeToScore(lsGrade) < minReq.ls) {
    missingReqs.push(`Liberal Studies (min. ${minReq.ls})`);
  }
  
  return missingReqs;
};

// Check if required elective subjects are present
export const checkElectiveRequirements = (
  grades: SubjectGrade[],
  requiredElectives: string[]
): string[] => {
  if (requiredElectives.length === 0) return [];
  
  const missingReqs: string[] = [];
  const userElectives = grades.map(g => g.subjectId);
  
  // Check if at least one of the required electives is present
  let foundAny = false;
  for (const elective of requiredElectives) {
    if (userElectives.includes(elective)) {
      foundAny = true;
      break;
    }
  }
  
  if (!foundAny && requiredElectives.length > 0) {
    missingReqs.push(`At least one of: ${requiredElectives.join(', ')}`);
  }
  
  return missingReqs;
};

// Determine likelihood based on score gap and confidence
export const determineLikelihood = (
  scoreGap: number, 
  confidence: number, 
  isFirstPriority: boolean
): LikelihoodStatus => {
  if (isFirstPriority) {
    return scoreGap >= 0 ? 'Likely' : 'Unlikely';
  }
  
  if (confidence >= 75) return 'Likely';
  if (confidence >= 40) return 'Borderline';
  return 'Unlikely';
};

// Main prediction function
export const calculateAdmissionLikelihood = (
  userGrades: UserGrades,
  program: Program,
  isFirstPriority: boolean = false
): PredictionResult => {
  // Get missing core requirements
  const missingCoreReqs = checkCoreRequirements(
    userGrades.grades, 
    program.minRequirements
  );
  
  // Get missing elective requirements
  const missingElectiveReqs = checkElectiveRequirements(
    userGrades.grades,
    program.requiredSubjects.electives
  );
  
  // Combine missing requirements
  const missingRequirements = [...missingCoreReqs, ...missingElectiveReqs];
  const hasMissingRequirements = missingRequirements.length > 0;
  
  // Calculate best score with penalty if there are missing requirements
  const { totalScore, bestSubjects } = calculateBestScore(
    userGrades.grades, 
    program,
    false,
    hasMissingRequirements
  );
  
  // Calculate score gap based on priority mode
  const compareScore = isFirstPriority ? program.minBest5 : program.medianBest5;
  const scoreGap = totalScore - compareScore;
  
  // Calculate confidence score with penalty for missing requirements
  const confidence = calculateConfidence(
    totalScore, 
    program, 
    userGrades.selfAssessment,
    hasMissingRequirements,
    isFirstPriority
  );
  
  // Determine likelihood status based on confidence and priority mode
  const status = determineLikelihood(scoreGap, confidence, isFirstPriority);
  
  // Calculate admission probability
  const probability = Math.min(100, Math.max(0, confidence + (scoreGap * 5)));
  
  // Generate recommendation
  const recommendation = generateRecommendation(
    scoreGap, 
    confidence, 
    missingRequirements,
    isFirstPriority
  );
  
  return {
    program,
    status,
    probability,
    confidence,
    missingRequirements,
    userBest5Score: totalScore,
    bestSubjectsCombination: bestSubjects,
    scoreGap,
    recommendation
  };
};