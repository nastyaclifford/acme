import styles from './BlockLearnMore.module.scss';
import Buttons from '../Buttons/Buttons';

export default function BlockLearnMore() {
  return (
    <>
      <div className={styles.lernmore_container}>
        <div className={styles.lernmore_text}>
          <p>
            Opening your parents&apos; home as an eco-point is a simple way for them to 
            <strong>
              stay engaged, support their community, and enjoy regular social interaction
            </strong>{' '}
            — all while making a meaningful contribution.
          </p>
          <p>
            There’s minimal effort required: 
            <em>couriers will unload the groceries</em>, and 
            <em>customers will collect their orders.</em> Your parents only need a bit of space for
            storage. As eco-point hosts, they’ll also receive fresh, local groceries, helping them 
            <strong>take better care of their nutrition</strong> while staying active.
          </p>
        </div>
        <div className={styles.button_container}>
          <a href='https://unco.bio/ru'>
            <Buttons firstLine='Learn' secondLine='More' />
          </a>
        </div>
      </div>
    </>
  );
}
