'use client';

import { Navbar } from '@/components/Navbar';
import styles from "../../page.module.css";

export default function CreateTimetablePage() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>Create a new academic timetable</h1>
        </section>
      </main>
    </div>
  );
}
