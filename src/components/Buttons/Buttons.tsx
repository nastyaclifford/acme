import styles from './Buttons.module.scss';

interface ButtonProps {
  firstLine: string;
  secondLine: string;
}

export default function Buttons({ firstLine, secondLine }: ButtonProps) {
  return (
    <div>
      <button className={styles.buttons}>
        {firstLine}
        <br />
        {secondLine}
      </button>
    </div>
  );
}
