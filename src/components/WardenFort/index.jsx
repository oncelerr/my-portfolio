'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const bgImage = useRef(null); // Reference to the background image
  let xPercent = 0;
  let direction = -1;
  const directionRef = useRef(null);

  useLayoutEffect(() => {
    directionRef.current = direction;  // Store the current value in useRef
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    });

    // Parallax effect for background image
    gsap.to(bgImage.current, {
      y: -450,
      yPercent: 100, // Adjust the value to control the intensity of the parallax effect
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true
      }
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction; // Reduced increment for slower movement
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div ref={bgImage} className={styles.backgroundImageContainer}>
        <Image 
          src="/images/wardenfort-page.png"
          layout="fill"
          objectFit="cover"
          alt="background"
          unoptimized={true}
          priority={true}
        />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>WardenFort -</p>
          <p ref={secondText}>WardenFort -</p>
        </div>
      </div>
    </motion.main>
  )
}
