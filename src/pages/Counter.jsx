import React, { useEffect, useState, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css";

const Counter = () => {
    const [dataItems, setDataItems] = useState([
        { icon: "bi bi-mortarboard", value: "1000", text: "Students" },
        { icon: "bi bi-easel-fill", value: "100", text: "Faculty" },
        { icon: "bi bi-people", value: "150", text: "Staff" },
        { icon: "bi bi-people-fill", value: "400", text: "Visitors" },
    ]);

    const interval = 2;
    const isFirstRender = useRef(true);

    const incrementVisitorCount = () => {
        const currentVisitors = localStorage.getItem("visitorCount") ? parseInt(localStorage.getItem("visitorCount")) : 0;
        const updatedVisitors = currentVisitors + 1;
        localStorage.setItem("visitorCount", updatedVisitors);

        setDataItems((prevDataItems) =>
            prevDataItems.map((item) =>
                item.text === "Visitors" ? { ...item, value: updatedVisitors.toString() + "+" } : item
            )
        );
    };

    useEffect(() => {
        if (isFirstRender.current) {
            incrementVisitorCount();
            isFirstRender.current = false;
        }
    }, []);

    const updateValues = () => {
        const updatedDataItems = dataItems.map((item) => {
            const endValue = parseInt(item.value);
            let startValue = 0;
            const duration = Math.floor(interval / endValue);

            const counter = setInterval(() => {
                startValue += 1;
                if (startValue <= endValue) {
                    setDataItems((prevDataItems) =>
                        prevDataItems.map((prevItem) =>
                            prevItem.text === item.text
                                ? { ...prevItem, value: startValue.toString() + (startValue === endValue ? "+" : "") }
                                : prevItem
                        )
                    );
                } else {
                    clearInterval(counter);
                }
            }, duration);

            return { ...item, value: startValue.toString() };
        });

        setDataItems(updatedDataItems);
    };

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            updateValues();
        }
    };

    return (
        <div className="wrapper">
            {dataItems.map((item, index) => (
                <VisibilitySensor
                    key={index}
                    onChange={(isVisible) => handleVisibilityChange(isVisible)}
                >
                    <div className="icon-style">
                        <i className={item.icon}></i>
                        <span className="cnum" id={item.text}>
                            {item.value}
                        </span>
                        <span className="ctext">
                            {item.text}
                        </span>
                    </div>
                </VisibilitySensor>
            ))}
        </div>
    );
};

export default Counter;
