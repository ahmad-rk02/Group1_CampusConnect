import React, { useState, useEffect, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Counter.css";

const Counter = () => {
    const [dataItems] = useState([
        { icon: "bi bi-mortarboard", value: 1000, text: "Students" },
        { icon: "bi bi-easel-fill", value: 100, text: "Faculty" },
        { icon: "bi bi-people", value: 150, text: "Staff" }
    ]);

    const [displayValues, setDisplayValues] = useState(
        dataItems.map(item => ({ ...item, currentValue: 0 }))
    );
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    const animateValue = (start, end, duration, updateCallback) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            updateCallback(value);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        setDisplayValues(prev => 
                            prev.map(item => {
                                animateValue(0, item.value, 2000, (val) => {
                                    setDisplayValues(current => 
                                        current.map(i => 
                                            i.text === item.text 
                                                ? { ...i, currentValue: val } 
                                                : i
                                        )
                                    );
                                });
                                return item;
                            })
                        );
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div className="counter-container">
            <div className="wrapper" ref={counterRef}>
                {displayValues.map((item, index) => (
                    <div key={index} className="counter-circle">
                        <div className="circle-content">
                            <i className={item.icon}></i>
                            <span className="counter-value">
                                {item.currentValue.toLocaleString()}
                            </span>
                            <span className="counter-label">
                                {item.text}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;