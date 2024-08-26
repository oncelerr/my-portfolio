import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import RoundedButton from '../../common/RoundedButton';

export default function Description() {
    const phrase = "WardenFort is a new computer program made for the (confidential). It's designed to help (confidential) better protect their computer systems from cyber attacks. It does this by keeping an eye on potential threats in real-time, sending immediate alerts for serious problems, letting users report incidents, and ensuring secure logins with extra layers of authentication. This new application aims to make the organization's security stronger by providing a threat monitoring software that can find and fix a broader range of security problems.";
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
            </div>
        </div>
    );
}
