import { Subject } from '../types';

export const subjects: Subject[] = [
  // Core Subjects
  { id: 'chi', name: 'Chinese Language', category: 'Core' },
  { id: 'eng', name: 'English Language', category: 'Core' },
  { id: 'math', name: 'Mathematics (Compulsory)', category: 'Core' },
  { id: 'ls', name: 'Liberal Studies', category: 'Core' },
  
  // Mathematics Extended Modules
  { id: 'math-m1', name: 'Mathematics Extended Module 1 (M1)', category: 'M1/M2' },
  { id: 'math-m2', name: 'Mathematics Extended Module 2 (M2)', category: 'M1/M2' },
  
  // Category A Electives
  { id: 'bio', name: 'Biology', category: 'Elective' },
  { id: 'chem', name: 'Chemistry', category: 'Elective' },
  { id: 'phy', name: 'Physics', category: 'Elective' },
  { id: 'econ', name: 'Economics', category: 'Elective' },
  { id: 'bafs', name: 'Business, Accounting and Financial Studies', category: 'Elective' },
  { id: 'ict', name: 'Information and Communication Technology', category: 'Elective' },
  { id: 'geog', name: 'Geography', category: 'Elective' },
  { id: 'hist', name: 'History', category: 'Elective' },
  { id: 'chist', name: 'Chinese History', category: 'Elective' },
  { id: 'clit', name: 'Chinese Literature', category: 'Elective' },
  { id: 'elit', name: 'Literature in English', category: 'Elective' },
  { id: 'music', name: 'Music', category: 'Elective' },
  { id: 'va', name: 'Visual Arts', category: 'Elective' },
  { id: 'phy-ed', name: 'Physical Education', category: 'Elective' },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};

export const getSubjectNameById = (id: string): string => {
  const subject = getSubjectById(id);
  return subject ? subject.name : 'Unknown Subject';
};

export const getCoreSubjects = (): Subject[] => {
  return subjects.filter(subject => subject.category === 'Core');
};

export const getElectiveSubjects = (): Subject[] => {
  return subjects.filter(subject => subject.category === 'Elective');
};

export const getM1M2Subjects = (): Subject[] => {
  return subjects.filter(subject => subject.category === 'M1/M2');
};