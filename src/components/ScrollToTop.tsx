import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { NeonButton } from './NeonButton';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-40"
                >
                    <NeonButton
                        variant="primary"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-primary/20"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </NeonButton>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
