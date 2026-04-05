import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Coming Soon
        </div>

        <h1 className={styles.title}>
          Build your automation <br />
          <span className={styles.italic}>today.</span>
        </h1>

        <p className={styles.subtitle}>
          Unlock powerful tools and insights to grow your business. Start your
          journey with us now.
        </p>

        <div className={styles.benefitsBar}>
          <div className={styles.benefitItem}>
            <svg
              className={styles.benefitIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Accurate AI Generation
          </div>
          <div className={styles.benefitItem}>
            <svg
              className={styles.benefitIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Ready-to-run n8n Exports
          </div>
          <div className={styles.benefitItem}>
            <svg
              className={styles.benefitIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Zero Configuration
          </div>
        </div>

        <button className={styles.cta}>
          Join the Waitlist
          <svg
            className={styles.arrow}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </main>

      <footer className={styles.footer}>A product by 7.Orbits</footer>
    </div>
  );
}
