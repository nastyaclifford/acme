'use client';
import { useState } from 'react';
import styles from './CollapsibleElements.module.scss';

interface CollapsibleElements {
  id: number;
  question: string;
  answer: string;
}

const collapsibleData: CollapsibleElements[] = [
  {
    id: 1,
    question: '1. How is delivery of products to pick-up points organized?',
    answer:
      'Delivery of products to Eco-point pick-up points occurs in the morning on the agreed day, when farmers bring products packed in thermoboxes. Eco-point accepts thermoboxes and checks the integrity of the packaging. Products do not require additional storage conditions.',
  },
  {
    id: 2,
    question: '2. How often are products delivered and what are the storage conditions?',
    answer:
      'The delivery schedule is coordinated with eco-point, products are delivered in thermoboxes, where they are stored for up to 24 hours, which ensures their freshness and quality until they are delivered to customers.',
  },
  {
    id: 3,
    question: '3. What to do in case of problems with delivery or product quality?',
    answer:
      'If the farmer does not fulfill the delivery conditions or the product does not meet the quality requirements, the buyer is refunded the full price of the food futures contract.',
  },
  {
    id: 4,
    question:
      '4. How is the process of issuing products at Eco-point points organized? How long does it take?',
    answer:
      'The customer presents the Unko Food Future at the checkout, the staff at the pick-up point scans it and issues a personally packaged order, which takes no more than 5 minutes, allowing you to quickly receive the product and, at the same time, drink a cup of coffee with you!',
  },
  {
    id: 5,
    question: '5. How can working with you improve my business?',
    answer:
      'Cooperation with us will significantly improve your business, increase traffic, take part in advertising campaigns and marketing materials of UNCO, and also create a unique menu of farm products with your own online delivery.',
  },
  {
    id: 6,
    question: '6. How can I open a product distribution point in my area?',
    answer:
      'This is an easy way to increase your profit, just go to unco.market and leave your contacts! You will get the opportunity to increase the profitability of your business and contribute to the ecology of your region.',
  },
];

export default function CollapsibleElements() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className={styles.collapsible_container}>
        {collapsibleData.map((item) => (
          <div key={item.id}>
            <div className={styles.collapsible_question}>
              <h3 className={styles.item_question}>{item.question}</h3>
              <button onClick={() => toggleAnswer(item.id)} className={styles.collapsible_button}>
                {openId === item.id ? '−' : '+'}
              </button>
            </div>

            {openId === item.id && (
              <div className={styles.collapsible_answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
