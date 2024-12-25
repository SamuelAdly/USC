'use client'
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
export default function ScrollToTop () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6" />
        </button>

    )
}