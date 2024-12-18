import styles from './InfoBanner2.module.scss';
import Image from 'next/image';
export default function InfoBanner2() {
  return (
    <>
      <div className={styles.container_gift}>
        <div className={styles.image1}>
          <Image
            className={styles.image2}
            src='/images/InfoBanner2/block3.png'
            alt='people'
            width={569}
            height={569}
            layout='responsive'
          />
        </div>

        <h2 className={styles.title}>
          Gift your parents meaningful leisure that helps reduce health risks
        </h2>

        <p className={styles.text}>
          An UNCO eco-point is where villagers pick up fresh groceries, fruits, and vegetables
          delivered directly from local farmers. We’re inviting retired people in small villages to
          host eco-points, bringing neighbors together.
        </p>
      </div>
      <div className={styles.steps}>
        <div className={styles.steps_container}>
          <div className={styles.steps_info}>
            <h2 className={styles.steps_title}>How you can do it?</h2>
            <p className={styles.steps_text}>
              By opening an eco-point in your parents' house, you’ll help neighbors get fresh, local
              groceries while also creating a space for conversations and social interactions. It
              only takes two easy steps:
            </p>
          </div>

          <div className={styles.steps_grid}>
            <div className={styles.step_image1}>
              <Image
                className={styles.image4}
                src='/images/InfoBanner2/block4.png'
                alt='friends image'
                width={570}
                height={570}
                layout='responsive'
              />
            </div>
            <div className={styles.step1}>
              <h2 className={styles.step1_title}>First step:</h2>
              <p className={styles.step1_text}>
                Show the courier where the ordered groceries can be unloaded.
              </p>
            </div>
            <div className={styles.step2}>
              <h2 className={styles.step2_title}>Second step:</h2>
              <p className={styles.step2_text}>
                Let your neighbors know where to pick up their orders.
              </p>
            </div>
            <div className={styles.step_image2}>
              <Image
                className={styles.image5}
                src='/images/InfoBanner2/block5.png'
                alt='gift image'
                layout='responsive'
                width={570}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
