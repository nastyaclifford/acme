'use client'
import { useTranslations } from 'next-intl';
import ButtonLanguages from './ButtonLanguages';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.scss";

const languagesList = [
    { text: 'English', code: 'en' },
    { text: 'Русский', code: 'ru'},
    { text: 'Deutsche', code: 'de'},
    { text: 'Українська', code: 'uk' },
    { text: 'Français', code: 'fr' },
    { text: 'Español', code: 'es' },
    { text: 'Italiano', code: 'it'},
  ];

export default function BurgerMenu () {
    const t = useTranslations('header');

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
      };

    return <div className={styles.burgerMenu}>
        <div className={styles.buttons}>
        <div className={styles.buttons_item}>
        <ButtonLanguages menu={languagesList}/>
        </div>
        <div onClick={handleLogoClick} className={styles.buttons_item}>
        <Image  src='/images/Header/logo.png' alt='logo' width={136} height={81} />
        </div>
        <div className={styles.buttons_item}>X</div>
        </div>

        <div className={styles.nav}>
        <Link href='#infoBanner1' className={styles.nav_item}>{t('nav-item-1')}</Link>
        <Link href="#infoBanner2" className={styles.nav_item}>{t('nav-item-2')}</Link>
        <Link href="#learnMore" className={styles.nav_item}>{t('nav-item-3')}</Link>
        <div className={styles.nav_item__sm}>Telefon: +49 17667484911</div>
        <div className={styles.nav_item__sm}>Email: cvo@unco.club</div> 
                <div className={styles.nav__social}>
                    <a href="https://www.linkedin.com/company/unco-club">
                        <Image src='/images/Footer/LinkedIn.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.instagram.com/uff_eu">
                        <Image src='/images/Footer/Instagram.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://t.me/UNCOFOODFUTURES_eng">
                        <Image src='/images/Footer/Telegram.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.youtube.com/@UNCOFoodFutures">
                        <Image src='/images/Footer/YouTube.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://twitter.com/UncoClub">
                        <Image src='/images/Footer/Twitter.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.facebook.com/share/g/D2K3RZ7RDtemx9Tq">
                        <Image src='/images/Footer/Facebook.png' alt='eco point' width={80} height={80} />
                    </a>
                </div>
              
                    
        
    </div>
    </div>
}
