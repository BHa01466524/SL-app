'use client';

import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleCreateTimetable = () => {
    router.push('/timetable/create');
  };

  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>Welcome back Camila Hansen</h1>
        </section>
        <section className={styles.buttonSection}>
          <button onClick={handleCreateTimetable} className="goldButton">Create a new timetable</button>
        </section>
        <section className={styles.grid}>
          {/* Top row: 3 cards */}
          <div className={styles.card}>
            <h3>Upcoming sessions</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
              <div>
                <strong>L1.01 Lesson</strong>
                <div style={{color: '#b0b0b0', fontSize: '0.95em'}}>@Greater Manchester</div>
              </div>
              <div style={{textAlign: 'right', color: '#b0b0b0', fontSize: '0.95em'}}>01/02/2026 13:00 - 14:30</div>
              <div>
                <strong>L2.02 Training</strong>
                <div style={{color: '#b0b0b0', fontSize: '0.95em'}}>@Liverpool</div>
              </div>
              <div style={{textAlign: 'right', color: '#b0b0b0', fontSize: '0.95em'}}>02/02/2026 10:00 - 11:30</div>
            </div>
          </div>
          <div className={styles.card}>
            <h3>Timetables status</h3>
            <div>
              {[
                {label: 'Gold Award', percent: 72},
                {label: 'Silver Award', percent: 45},
                {label: 'Bronze Award', percent: 10},
                {label: 'No Award', percent: 0},
              ].map(({label, percent}) => (
                <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}} key={label}>
                  <span>{label}</span>
                  <span style={{marginLeft: 'auto', fontWeight: 500}}>{percent}%</span>
                </div>
              ))}
              {[
                72, 45, 10, 0
              ].map((percent, i) => (
                <div key={i} style={{height: 4, background: '#e8e8e8', borderRadius: 2, marginBottom: 10}}>
                  <div style={{width: `${percent}%`, height: '100%', background: '#B39B66', borderRadius: 2}}></div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3>Timetables performance</h3>
            <div>
              {[
                {label: 'Gold Award', rating: 4.9},
                {label: 'Silver Award', rating: 4.7},
                {label: 'Bronze Award', rating: 4.6},
                {label: 'Participation', rating: 4.2},
                {label: 'Attendance', rating: 3.9},
              ].map(({label, rating}) => (
                <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}} key={label}>
                  <span>{label}</span>
                  <span style={{marginLeft: 'auto'}}>
                    <span style={{background: '#B39B66', color: '#1E2024', borderRadius: '12px', padding: '2px 10px', fontWeight: 600, fontSize: '0.95em'}}>{rating}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom row: Activities (spans 1 col), Leaderboard (spans 2 cols) */}
          <div className={styles.card + ' ' + styles.activities}>
            <h3>Activities</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px'}}>
              <div>
                <div><strong>Basketball Practice</strong></div>
                <div style={{color: '#b0b0b0', fontSize: '0.95em'}}>@Manchester Arena</div>
              </div>
              <button style={{background: '#1E2024', color: '#fff', border: 'none', borderRadius: '6px', padding: '4px 12px', fontSize: '0.95em', cursor: 'pointer'}}>Review &gt;</button>
              <div>
                <div><strong>Fitness Session</strong></div>
                <div style={{color: '#b0b0b0', fontSize: '0.95em'}}>@Liverpool Gym</div>
              </div>
              <button style={{background: '#1E2024', color: '#fff', border: 'none', borderRadius: '6px', padding: '4px 12px', fontSize: '0.95em', cursor: 'pointer'}}>Review &gt;</button>
            </div>
          </div>
          <div className={styles.card + ' ' + styles.leaderboard}>
            <h3>Leaderboard - targets</h3>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                <span><strong>Camila Hansen</strong></span>
                <span style={{color: '#B39B66', fontWeight: 600}}>12 targets</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                <span><strong>Alex Turner</strong></span>
                <span style={{color: '#B39B66', fontWeight: 600}}>10 targets</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                <span><strong>Jordan Lee</strong></span>
                <span style={{color: '#B39B66', fontWeight: 600}}>8 targets</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                <span><strong>Samira Patel</strong></span>
                <span style={{color: '#B39B66', fontWeight: 600}}>7 targets</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
