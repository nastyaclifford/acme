'use client'
import { useTranslations } from 'next-intl';
import ButtonLanguages from './ButtonLanguages';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.scss";

const languagesList = [
    { text: 'English', code: 'en', img: '/images/Header/united-states.svg' },
    { text: 'Русский', code: 'ru', img: '/images/Header/russia.svg' },
    { text: 'Deutsche', code: 'de', img: '/images/Header/germany.svg' },
    { text: 'Українська', code: 'uk', img: '/images/Header/ukraine.svg' },
    { text: 'Français', code: 'fr', img: '/images/Header/france.svg' },
    { text: 'Español', code: 'es', img: '/images/Header/spain.svg' },
    { text: 'Italiano', code: 'it', img: '/images/Header/italy.svg' },
  ];

export default function Header () {
    const t = useTranslations('header');

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
      };

    return <div className={styles.header}>
        <div className={styles.nav}>
        <Link href='#infoBanner1' className={styles.nav_item}>{t('nav-item-1')}</Link>
        <Link href="#infoBanner2" className={styles.nav_item}>{t('nav-item-2')}</Link>
        <div onClick={handleLogoClick} className={styles.nav_item}>
        <Image  src='/images/Header/logo.png' alt='logo' width={136} height={81} />
        </div>
        <Link href="#learnMore" className={styles.nav_item}>{t('nav-item-3')}</Link>
        <div className={styles.nav_item}>
        <ButtonLanguages menu={languagesList}/>
        </div>
        <Link href="#contactUs"><button className={styles.nav_item__button}>{t('button')}</button></Link>
        
    </div>
    </div>
    
}