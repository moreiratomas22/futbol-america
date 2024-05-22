import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const elementRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            setIsAtTop(rect.top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar una vez para configurar el estado inicial

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isAtTop, elementRef };
};

export default useScroll;
