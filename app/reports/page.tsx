import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { reports } from "@/data/reports";
import styles from "./Reports.module.css";
import { 
  FileText, 
  ChevronRight, 
  BarChart, 
  Users, 
  BookOpen, 
  Trophy,
  PieChart
} from "lucide-react";

export default function ReportsPage() {
  const getIcon = (reportId: string) => {
    switch (reportId) {
      case "school-ranks":
      case "school-ranks-subjectwise":
      case "best-schools":
      case "wards-rank":
        return <Trophy size={24} />;
      case "subject-performance":
        return <BarChart size={24} />;
      case "mobility-analysis":
        return <PieChart size={24} />;
      case "results-summary":
        return <FileText size={24} />;
      case "student-stats":
      case "best-students-subjectwise":
        return <Users size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>SUMMARY REPORTS 2026</h1>
          <p className={styles.subtitle}>
            Select a report below to view the detailed summary document.
          </p>
        </div>

        <div className={styles.reportList}>
          {reports.map((report) => (
            <Link 
              key={report.id}
              href={`/pdf?file=${encodeURIComponent(report.file)}`}
              className={styles.reportItem}
            >
              <div className={styles.iconWrapper}>
                {getIcon(report.id)}
              </div>
              <div className={styles.reportInfo}>
                <span className={styles.reportTitle}>{report.title}</span>
                <p className={styles.reportDescription}>{report.description}</p>
              </div>
              <ChevronRight className={styles.chevron} size={20} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
