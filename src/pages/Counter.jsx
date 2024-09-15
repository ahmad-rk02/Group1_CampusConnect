import React, { useEffect, useState, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css";

const Counter = () => {
    const [dataItems, setDataItems] = useState([
        { icon: "bi bi-mortarboard", value: "1000", text: "Students" },
        { icon: "bi bi-easel-fill", value: "100", text: "Faculty" },
        { icon: "bi bi-people", value: "150", text: "Staff" },
        { icon: "bi bi-people-fill", value: "400", text: "Visitors" }, // Initialize with 400, will update dynamically
    ]);

    const interval = 2;
    
    // Ref to ensure incrementVisitorCount only runs once
    const isFirstRender = useRef(true);

    const containerStyles = {
        height: '220px',
        boxSizing: "border-box",
        textAlign: "center",
        borderRadius: '50%',
        borderWidth: '2px',
        borderColor: '#102C57',
        borderStyle: 'solid',
        margin: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    const iconStyles = {
        color: "#102C57",
        fontSize: "3.8em",
    };

    const numStyles = {
        color: "#102C57",
        fontWeight: 600,
        fontSize: "3em",
        width: "4em",
        display: "block",
    };

    const textStyles = {
        color: "#102C57",
        fontSize: "1em",
        padding: "5px",
        fontWeight: 400,
        display: "block",
    };

    // Increment visitor count when the page loads
    const incrementVisitorCount = () => {
        // Retrieve current count from localStorage or start at 0 if not set
        const currentVisitors = localStorage.getItem("visitorCount") ? parseInt(localStorage.getItem("visitorCount")) : 0;
        const updatedVisitors = currentVisitors + 1;

        // Store the updated count in localStorage
        localStorage.setItem("visitorCount", updatedVisitors);

        // Update the Visitors count in dataItems
        setDataItems((prevDataItems) =>
            prevDataItems.map((item) =>
                item.text === "Visitors" ? { ...item, value: updatedVisitors.toString() + "+" } : item
            )
        );
    };

    useEffect(() => {
        if (isFirstRender.current) {
            // Ensure the function is called only on the first render
            incrementVisitorCount();
            isFirstRender.current = false; // Set the flag to false after the first run
        }
    }, []); // Empty dependency array ensures this runs once on component mount

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
            // Start the counter animation when the component becomes visible
            updateValues();
        }
    };

    return (
        <div className="wrapper" style={{ display: "flex", flexDirection: "coloumn", justifyContent: "center", width: "100%", gap: "40px", }}>
            {dataItems.map((item, index) => (
                <VisibilitySensor
                    key={index}
                    onChange={(isVisible) => handleVisibilityChange(isVisible)}
                >
                    <div className="icon-style" style={containerStyles}>
                        <i className={item.icon} style={iconStyles}></i>
                        <span className="num" id={item.text} style={numStyles}>
                            {item.value}
                        </span>
                        <span className="text" style={textStyles}>
                            {item.text}
                        </span>
                    </div>
                </VisibilitySensor>
            ))}
        </div>
    );
};

export default Counter;
