import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import RoundedButton from '../../common/RoundedButton';

export default function Description() {
    const phrase = "Empowering your digital journey with innovative solutions. Let's redefine what's possible, staying sharp, efficient, and ahead of the curve.";
    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef, { once: true });

    return (
        <div ref={descriptionRef} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => (
                        <span key={index} className={styles.mask}>
                            <motion.span
                                variants={slideUp}
                                custom={index}
                                animate={isInView ? "open" : "closed"}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p
                    variants={opacity}
                    animate={isInView ? "open" : "closed"}
                >
                    The fusion of my expertise in cybersecurity, development, and design places me at the forefront of creating secure, innovative digital experiences.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <RoundedButton className={styles.button}>
                        <p>About me</p>
                    </RoundedButton>
                </div>
            </div>
        </div>
    );
}
