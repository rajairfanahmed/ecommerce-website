'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, [data-hover]')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, [cursorX, cursorY]);

    // Hide on mobile
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <motion.div
                className="bg-white rounded-full"
                animate={{
                    width: isHovered ? 40 : 12,
                    height: isHovered ? 40 : 12,
                    opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
        </motion.div>
    );
}
