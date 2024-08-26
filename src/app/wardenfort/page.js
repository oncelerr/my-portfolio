'use client';
import styles from './page.module.scss'; // Ensure you have appropriate styles
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/TransitionOut';
import Landing from '../../components/WardenFort';
import SlidingImages from '../../components/WardenSlidingImages';
import Description from '../../components/WardenDescription';
import Contact from '../../components/Contact';

export default function WardenFort() {

    const [isLoading, setIsLoading] = useState(true);

        useEffect( () => {
        (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout( () => {
                setIsLoading(false);
                document.body.style.cursor = 'default'
                window.scrollTo(0,0);
            }, 2000)
        }
        )()
    }, [])

  return (
    <main className={styles.wardenfort}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> 
      <Landing />
      <Description />
      <SlidingImages />
      <Contact />
    </main>
  );
}
