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
    description: "District ranking of all schools based on performance.",
    file: "results/all summary/ILEMELA MC SCHOOLS RANK.pdf",
    category: "ranking",
  },
  {
    id: "subject-performance",
    title: "Subject Performance",
    description: "Detailed analysis of performance by subject across the district.",
    file: "results/all summary/ILEMELA MC SCHOOLS RANK SUBJECTWISE.pdf",
    category: "performance",
  },
  {
    id: "mobility-analysis",
    title: "Wards Rank",
    description: "Ranking of wards within the district based on school performance.",
    file: "results/all summary/ILEMELA MC Wards Rank.pdf",
    category: "performance",
  },
  {
    id: "school-stats",
    title: "Results Summary",
    description: "Overall statistical summary of the examination results.",
    file: "results/all summary/ILEMELA MC RESULTS SUMMARY.pdf",
    category: "other",
  },
  {
    id: "student-stats",
    title: "Best Students",
    description: "Top performing students in the district.",
    file: "results/all summary/ILEMELA MC 10 BEST STUDENTS.pdf",
    category: "other",
  },
  {
    id: "district-ranks",
    title: "Subjects Rank",
    description: "Ranking of subjects based on overall performance.",
    file: "results/all summary/ILEMELA MC  SUBJECTS RANK.pdf",
    category: "performance",
  },
];
