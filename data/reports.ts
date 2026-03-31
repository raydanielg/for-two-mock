export interface Report {
  id: string;
  title: string;
  description: string;
  file: string;
  category: "ranking" | "performance" | "other";
}

export const reports: Report[] = [
  {
    id: "school-ranks",
    title: "School Ranks",
    description: "Overall ranking of all schools in Ilemela MC based on performance.",
    file: "results/all summary/ILEMELA MC SCHOOLS RANK.pdf",
    category: "ranking",
  },
  {
    id: "school-ranks-subjectwise",
    title: "Schools Rank Subjectwise",
    description: "Detailed school rankings for each subject.",
    file: "results/all summary/ILEMELA MC SCHOOLS RANK SUBJECTWISE.pdf",
    category: "ranking",
  },
  {
    id: "subject-performance",
    title: "Subjects Rank",
    description: "Ranking of subjects based on overall performance and GPA.",
    file: "results/all summary/ILEMELA MC  SUBJECTS RANK.pdf",
    category: "performance",
  },
  {
    id: "wards-rank",
    title: "Wards Rank",
    description: "Ranking of all wards within Ilemela Municipal Council.",
    file: "results/all summary/ILEMELA MC Wards Rank.pdf",
    category: "ranking",
  },
  {
    id: "best-schools",
    title: "10 Best Schools",
    description: "Top 10 performing schools in the district.",
    file: "results/all summary/ILEMELA MC 10 BEST SCHOOLS.pdf",
    category: "ranking",
  },
  {
    id: "student-stats",
    title: "10 Best Students",
    description: "Overall top 10 performing students in Ilemela MC.",
    file: "results/all summary/ILEMELA MC 10 BEST STUDENTS.pdf",
    category: "other",
  },
  {
    id: "best-students-subjectwise",
    title: "10 Best Students Subjectwise",
    description: "Top 10 students for each subject across the district.",
    file: "results/all summary/ILEMELA MC 10 BEST STUDENTS SUBJECTWISE.pdf",
    category: "other",
  },
  {
    id: "results-summary",
    title: "Results Summary",
    description: "Comprehensive statistical summary of the examination results.",
    file: "results/all summary/ILEMELA MC RESULTS SUMMARY.pdf",
    category: "other",
  },
];
