import React, { useEffect, useState, useRef } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TPOempFeedback.css";

const TPOempFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
    const [filters, setFilters] = useState({
        date: "",
        month: "",
        year: "",
        department: "",
    });

    const navigate = useNavigate();
    const printRef = useRef(); // For printing

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_STRAPI_API_BASE_URL}/api/employer-feedbacks`);
                const sortedFeedbacks = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setFeedbacks(sortedFeedbacks);
                setFilteredFeedbacks(sortedFeedbacks);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
            }
        };

        fetchFeedbacks();
    }, []);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    // Apply filters dynamically
    useEffect(() => {
        let filtered = feedbacks;

        if (filters.date) {
            filtered = filtered.filter((f) => new Date(f.createdAt).toISOString().split("T")[0] === filters.date);
        }
        if (filters.month) {
            filtered = filtered.filter((f) => new Date(f.createdAt).getMonth() + 1 === parseInt(filters.month));
        }
        if (filters.year) {
            filtered = filtered.filter((f) => new Date(f.createdAt).getFullYear().toString() === filters.year);
        }
        if (filters.department) {
            filtered = filtered.filter((f) => f.department.toLowerCase() === filters.department.toLowerCase());
        }

        setFilteredFeedbacks(filtered);
    }, [filters, feedbacks]);


    // Print function
    const handlePrint = () => {
        const tableContent = document.getElementById("printable-table").innerHTML;
        const newWindow = window.open("", "", "width=800,height=600");
        newWindow.document.write("<html><head><title>Print</title>");
        newWindow.document.write("<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; }</style>");
        newWindow.document.write("</head><body>");
        newWindow.document.write("<h2>Student Feedbacks</h2>");
        newWindow.document.write(tableContent);
        newWindow.document.write("</body></html>");
        newWindow.document.close();
        newWindow.print();
    };
    

       
    return (
        <Container className="cont-feed">
            <h2 className="my-4">Student Feedbacks</h2>

            {/* Filters */}
            <Form className="mb-3">
                <Form.Group>
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="date" value={filters.date} onChange={handleFilterChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Month</Form.Label>
                    <Form.Control as="select" name="month" value={filters.month} onChange={handleFilterChange}>
                        <option value="">All</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{new Date(2024, i, 1).toLocaleString('default', { month: 'long' })}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Year</Form.Label>
                    <Form.Control as="select" name="year" value={filters.year} onChange={handleFilterChange}>
                        <option value="">All</option>
                        {[...new Set(feedbacks.map(f => new Date(f.createdAt).getFullYear()))].map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Department</Form.Label>
                    <Form.Control as="select" name="department" value={filters.department} onChange={handleFilterChange}>
                        <option value="">All</option>
                        {[...new Set(feedbacks.map(f => f.department))].map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>

            {/* Feedback Table */}
            <div id="printable-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFeedbacks.length > 0 ? (
                        filteredFeedbacks.map((feedback, index) => (
                            <tr key={feedback.id}>
                                <td>{index + 1}</td>
                                <td>{feedback.name}</td>
                                <td>{feedback.department}</td>
                                <td>{feedback.year}</td>
                                <td>{feedback.message}</td>
                                <td>{new Date(feedback.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No feedbacks found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>

            {/* Buttons - Print & Close */}
            <div className="d-flex justify-content-between mt-3 below-btns">
                <Button variant="success" onClick={handlePrint} className="prnt-btn">Print</Button>
                <Button variant="danger" onClick={() => navigate("/TPOPage")} className="cls-btn">Close</Button>
            </div>

        </Container>
    );
};

export default TPOempFeedback;
