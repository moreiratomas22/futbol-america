import { useEffect, useState } from 'react';

const useIntersectionObserver = (elementRef, options) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            options
        );

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementRef, options]);

    return isVisible;
};

export default useIntersectionObserver;
