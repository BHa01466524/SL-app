'use client';

import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleCreateTimetable = () => {
    router.push('/timetable/create');
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Test</p>
        <button onClick={handleCreateTimetable}>
          Create a new timetable?
        </button>
      </main>
    </div>
  );
}
