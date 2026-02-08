import styles from "./Hero.module.css";
export function HeroTagline() {
  return (
    <div className={styles.taglineBanner}>
      <p className={`${styles.taglineText} `}>
        The Skills you need. <span className={styles.taglineHighlight}>The people you want.</span>
      </p>
    </div>
  );
}