import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    { color: "#e3e5e7", src: "Frame1.png" },
    { color: "#d6d7dc", src: "Frame2.png" },
    { color: "#e3e3e3", src: "Frame3.png" },
    { color: "#21242b", src: "Frame4.png" }
];

const slider2 = [
    { color: "#d4e3ec", src: "Frame5.png" },
    { color: "#e5e0e1", src: "Frame6.png" },
    { color: "#d7d4cf", src: "Frame7.png" },
    { color: "#e1dad6", src: "Frame8.png" }
];

export default function SlidingImages() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map(({ color, src }, index) => (
                    <div key={`slider1-${index}`} className={styles.project} style={{ backgroundColor: color }}>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="Project Image"
                                src={`/images/${src}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map(({ color, src }, index) => (
                    <div key={`slider2-${index}`} className={styles.project} style={{ backgroundColor: color }}>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt="Project Image"
                                src={`/images/${src}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
