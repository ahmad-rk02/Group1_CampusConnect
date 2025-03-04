import { useEffect, useState } from "react";
import axios from "axios";
import "./NewsEvents.css";

const NewsEvents = () => {
    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);
    const [expandedNews, setExpandedNews] = useState({});
    const [expandedEvents, setExpandedEvents] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsResponse = await axios.get("http://localhost:1337/api/gcoec-news?populate=*");
                const eventsResponse = await axios.get("http://localhost:1337/api/gcoec-events?populate=*");
                setNews(newsResponse.data.data);
                setEvents(eventsResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const toggleExpandNews = (id) => {
        setExpandedNews((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleExpandEvents = (id) => {
        setExpandedEvents((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="news-events-container">
            {/* News Section */}
            <div className="news-section">
                <h2 className="section-title">Latest News</h2>
                {news.length > 0 ? (
                    news.map((item) => (
                        <div key={item.id} className="news-item">
                            {item.image && <img src={`http://localhost:1337${item.image.url}`} alt={item.title} className="news-image" />}
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-date">{item.date}</p>
                            <p className="news-description">
                                {item.description
                                    ? expandedNews[item.id]
                                        ? item.description
                                        : `${item.description.slice(0, 100)}...`
                                    : "No description available"}
                            </p>
                            {item.description && (
                                <button onClick={() => toggleExpandNews(item.id)} className="read-more-btn">
                                    {expandedNews[item.id] ? "Read Less" : "Read More"}
                                </button>
                            )}
                            {item.external_url && <a href={item.external_url} className="external-link" target="_blank" rel="noopener noreferrer">Click Here</a>}
                        </div>
                    ))
                ) : (
                    <p className="loading-text">Loading news...</p>
                )}
            </div>
            
            {/* Events Section */}
            <div className="events-section">
                <h2 className="section-title">Upcoming Events</h2>
                {events.length > 0 ? (
                    events.map((item) => (
                        <div key={item.id} className="event-item">
                            {item.image && <img src={`http://localhost:1337${item.image.url}`} alt={item.title} className="event-image" />}
                            <h3 className="event-title">{item.title}</h3>
                            <p className="event-date">{item.date}</p>
                            <p className="event-description">
                                {item.description
                                    ? expandedEvents[item.id]
                                        ? item.description
                                        : `${item.description.slice(0, 100)}...`
                                    : "No description available"}
                            </p>
                            {item.description && (
                                <button onClick={() => toggleExpandEvents(item.id)} className="read-more-btn">
                                    {expandedEvents[item.id] ? "Read Less" : "Read More"}
                                </button>
                            )}
                            {item.external_url && <a href={item.external_url} className="external-link" target="_blank" rel="noopener noreferrer">Click Here</a>}
                        </div>
                    ))
                ) : (
                    <p className="loading-text">Loading events...</p>
                )}
            </div>
        </div>
    );
};

export default NewsEvents;
