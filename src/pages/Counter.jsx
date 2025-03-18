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

    const isFirstRender = useRef(true);

    // Increment visitor count on first render
    const incrementVisitorCount = () => {
        try {
            const currentVisitors = localStorage.getItem("visitorCount")
                ? parseInt(localStorage.getItem("visitorCount"))
                : 0;
            const updatedVisitors = currentVisitors + 1;
            localStorage.setItem("visitorCount", updatedVisitors);

            setDataItems((prevDataItems) =>
                prevDataItems.map((item) =>
                    item.text === "Visitors"
                        ? { ...item, value: updatedVisitors.toString() + "+" }
                        : item
                )
            );
        } catch (error) {
            console.error("Error updating visitor count:", error);
        }
    };

    useEffect(() => {
        if (isFirstRender.current) {
            incrementVisitorCount();
            isFirstRender.current = false;
        }
    }, []);

    // Function to animate counting
    const updateValues = () => {
        setDataItems((prevDataItems) =>
            prevDataItems.map((item) => {
                const endValue = parseInt(item.value.replace("+", ""));
                let startValue = 0;

                // Ensure duration is greater than zero
                const duration = endValue > 0 ? Math.max(Math.floor(2000 / endValue), 10) : 50;

                const updateCount = () => {
                    if (startValue < endValue) {
                        startValue++;
                        setDataItems((prevItems) =>
                            prevItems.map((prevItem) =>
                                prevItem.text === item.text
                                    ? { ...prevItem, value: startValue.toString() + "+" }
                                    : prevItem
                            )
                        );
                        setTimeout(updateCount, duration);
                    }
                };

                updateCount();
                return item;
            })
        );
    };

    // Trigger counting animation when visible
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
                    onChange={handleVisibilityChange}
                    partialVisibility
                >
                    {({ isVisible }) => (
                        <div className="icon-style">
                            <i className={item.icon}></i>
                            <span className="cnum" id={item.text}>
                                {item.value}
                            </span>
                            <span className="ctext">
                                {item.text}
                            </span>
                        </div>
                    )}
                </VisibilitySensor>
            ))}
        </div>
    );
};

export default Counter;
