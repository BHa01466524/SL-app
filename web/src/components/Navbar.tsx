'use client';

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.userIcon}>
          <i className="fas fa-user"></i>
        </div>
      </div>
    </aside>
  );
}
