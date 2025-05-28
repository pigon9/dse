// Subject and Grade Types
export type SubjectCategory = 'Core' | 'Elective' | 'M1/M2';
export type GradeValue = 1 | 2 | 3 | 4 | 5 | '5*' | '5**';
export type SelfAssessment = 'overrated' | 'accurate' | 'underrated';

export interface Subject {
  id: string;
  name: string;
  category: SubjectCategory;
}

export interface SubjectGrade {
  subjectId: string;
  grade: GradeValue | null;
}

export interface UserGrades {
  grades: SubjectGrade[];
  selfAssessment: SelfAssessment;
}

// University and Program Types
export type University = 'HKU' | 'CUHK' | 'HKUST' | 'PolyU' | 'CityU';

export interface MinRequirement {
  chinese: number;
  english: number;
  math: number;
  ls: number;
}

export interface Program {
  id: string;
  jupasCode: string;
  name: string;
  university: University;
  faculty: string;
  requiredSubjects: {
    core: string[];
    electives: string[];
  };
  minRequirements: MinRequirement;
  medianBest5: number;
  minBest5: number;
  maxBest5: number;
  subjectWeighting?: Record<string, number>;
}

// Prediction Types
export type LikelihoodStatus = 'Likely' | 'Borderline' | 'Unlikely';

export interface PredictionResult {
  program: Program;
  status: LikelihoodStatus;
  probability: number;
  confidence: number;
  missingRequirements: string[];
  userBest5Score: number;
  bestSubjectsCombination: SubjectGrade[];
  scoreGap: number;
  recommendation?: string;
}