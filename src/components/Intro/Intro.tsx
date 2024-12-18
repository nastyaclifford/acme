import styles from './intro.module.scss';

export default function Intro() {
  return (
    <>
      {/* <div className={styles.intro_image}></div> */}
      <p className={styles.intro_title}>Did you know?</p>
      <p className={styles.intro_text}>
        Social isolation in older age can lead to health challenges, such as increased risk of
        depression and cognitive decline.
      </p>
    </>
  );
}
