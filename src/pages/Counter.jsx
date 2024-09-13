import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import VisibilitySensor from "react-visibility-sensor";
import "./Counter.css"

const Counter = () => {


    const [dataItems, setDataItems] = useState([
        { icon: "bi bi-mortarboard", value: "1000", text: "Students" },
        { icon: "bi bi-easel-fill", value: "100", text: "Faculty" },
        { icon: "bi bi-people", value: "150", text: "Staff" },
        { icon: "bi bi-people-fill", value: "400", text: "Visitors" },
    ]);

    const interval = 2;

    const containerStyles = {
        width: "15%",
        Height: '220px',
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
        MdHeight: "20px",
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
                                ? { ...prevItem, value: startValue.toString() + (startValue === endValue ? "+" : "")}
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
        <div className="wrapper" style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", gap: "40px", paddingBottom: "4em" }}>
            {dataItems.map((item, index) => (
                <VisibilitySensor class="one-box-counter"
                    key={index}
                    onChange={(isVisible) => handleVisibilityChange(isVisible)}
                >
                    <div style={containerStyles}>
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