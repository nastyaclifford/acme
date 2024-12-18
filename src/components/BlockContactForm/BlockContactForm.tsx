import Buttons from '../Buttons/Buttons';
import styles from './BlockContactForm.module.scss';

export default function BlockContactForm() {
  return (
    <div className={styles.backform_image}>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <p className={styles.contact_label}>Contact Us</p>
          <input className={styles.input} type='tel' placeholder='Phone Number' />
          <input className={styles.input} type='text' placeholder='Your Name' />
          <Buttons firstLine='Send' secondLine='' />
        </form>
      </div>
    </div>
  );
}
