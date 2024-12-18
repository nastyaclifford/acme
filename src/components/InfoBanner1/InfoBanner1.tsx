'use client';
import React, { useEffect } from 'react';
import styles from './infoBanner1.module.scss';
import Image from 'next/image';

const dataInfoEn = {
  title: 'Take care of your parents',
  pharagraph: `When people with aging parents don't visit or communicate with them frequently, it can have several negative impacts on their parents' health and well-being.`,
  substr: [
    'sadness,',
    'hopelessness,',
    'worthlessness.',
    `Alzheimer's`,
    'poor hygiene,',
    'neglecting medications,',
    'bad nutrition',
  ],
  Info: [
    {
      title: 'Increased Risk of Depression',
      description:
        'Loneliness is one of the leading causes of depression in older adults. When elderly people are isolated or feel abandoned, they may develop feelings of sadness, hopelessness, and a sense of worthlessness.',
      number: 1,
    },
    {
      title: 'Cognitive Decline',
      description: `Social interaction is critical for maintaining mental sharpness. Studies have shown that older adults who experience isolation are at a higher risk of cognitive decline, including memory loss and conditions like Alzheimer's disease.`,
      number: 2,
    },
    {
      title: 'Loss of Motivation for Self-Care',
      description:
        'Without regular visits or interactions with loved ones, some elderly people may lose motivation to take care of themselves. This can result in poor hygiene, neglecting medications, bad nutrition and an overall decline in self-care routines, which could lead to further health complications.',
      number: 3,
    },
  ],
};

const dataInfoDe = {
  title: 'Kümmern Sie sich um Ihre Eltern',
  pharagraph: `Wenn Menschen mit älteren Eltern sie nicht häufig besuchen oder mit ihnen kommunizieren, kann dies mehrere negative Auswirkungen auf die Gesundheit und das Wohlbefinden ihrer Eltern haben.`,
  substr: [
    'Traurigkeit,',
    'Hoffnungslosigkeit',
    'Wertlosigkeit',
    'Alzheimer.',
    'schlechter Hygiene,',
    'Vernachlässigung von Medikamenten,',
    'schlechter Ernährung',
  ],
  Info: [
    {
      title: 'Erhöhtes Risiko für Depressionen',
      description:
        'Einsamkeit ist eine der Hauptursachen für Depressionen bei älteren Erwachsenen. Wenn ältere Menschen isoliert sind oder sich verlassen fühlen, können sie Gefühle von Traurigkeit, Hoffnungslosigkeit und Wertlosigkeit entwickeln.',
      number: 1,
    },
    {
      title: 'Kognitive Beeinträchtigung',
      description: `Soziale Interaktion ist entscheidend für die geistige Wachsamkeit. Studien haben gezeigt, dass ältere Erwachsene, die Isolation erfahren, ein höheres Risiko für kognitive Beeinträchtigungen haben, einschließlich Gedächtnisverlust und Erkrankungen wie Alzheimer.`,
      number: 2,
    },
    {
      title: 'Verlust der Motivation zur Selbstpflege',
      description:
        'Ohne regelmäßige Besuche oder Interaktionen mit Angehörigen verlieren einige ältere Menschen möglicherweise die Motivation, sich um sich selbst zu kümmern. Dies kann zu schlechter Hygiene, Vernachlässigung von Medikamenten, schlechter Ernährung und einem allgemeinen Rückgang der Selbstpflege-Routinen führen, was zu weiteren Gesundheitskomplikationen führen kann.',
      number: 3,
    },
  ],
};

export default function InfoBanner1() {
  useEffect(() => {
    const description = document.querySelectorAll('#description');

    if (description) {
      dataInfoEn.substr.forEach((element) => {
        description.forEach((el) => {
          el.innerHTML = el.innerHTML.replace(new RegExp(element), '<span>' + element + '</span>');
        });
      });
    }
  }, []);
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{dataInfoEn.title}</h2>
      <p className={styles.pharagraph}>{dataInfoEn.pharagraph}</p>
      <div className={styles.containers}>
        {dataInfoEn.Info.map((data) => (
          <div className={styles.container} key={data.title}>
            <div className={styles.counter_container}>
              <Image
                src='/images/InfoBanner1/Ellipse.svg'
                alt={'Ellipse'}
                className={styles.ellipse}
                width={96}
                height={96}
              />
              <h1 className={styles.counter}>{data.number}</h1>
            </div>
            <h2 className={styles.subtitle}>{data.title}</h2>
            <p className={styles.description} id='description'>
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
