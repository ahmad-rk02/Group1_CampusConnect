import { useEffect, useState } from "react";
import axios from "axios";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [expandedNews, setExpandedNews] = useState({});
  const [expandedEvents, setExpandedEvents] = useState({});

  // Use environment variable from .env
  const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
  const NEWS_API_URL = `${STRAPI_BASE_URL}/api/gcoec-news?populate=*`;
  const EVENTS_API_URL = `${STRAPI_BASE_URL}/api/gcoec-events?populate=*`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get(NEWS_API_URL);
        const eventsResponse = await axios.get(EVENTS_API_URL);
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

  const getMediaUrl = (image) => {
    if (image?.url) {
      return image.url; // Assume Cloudinary URLs are absolute
    }
    return "placeholder.jpg"; // Fallback image
  };

  return (
    <div className="news-events-container">
      {/* News Section */}
      <div className="news-section">
        <h2 className="section-title">Latest News</h2>
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="news-item">
              {item.image && (
                <img
                  src={getMediaUrl(item.image)}
                  alt={item.title}
                  className="news-image"
                />
              )}
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
                <button
                  onClick={() => toggleExpandNews(item.id)}
                  className="read-more-btn"
                >
                  {expandedNews[item.id] ? "Read Less" : "Read More"}
                </button>
              )}
              {item.external_url && (
                <a
                  href={item.external_url}
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              )}
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
              {item.image && (
                <img
                  src={getMediaUrl(item.image)}
                  alt={item.title}
                  className="event-image"
                />
              )}
              <h3 className="event-title">{item.title}</h3>
              <p className="event-date">{item.date}</p>
              <p className="event-description">
                {item.description
                  ? expandedEvents[item.id]
                    ? item.description
                    : `${item.description.slice(0, 100)}...`
                  : ""}
              </p>
              {item.description && (
                <button
                  onClick={() => toggleExpandEvents(item.id)}
                  className="read-more-btn"
                >
                  {expandedEvents[item.id] ? "Read Less" : "Read More"}
                </button>
              )}
              {item.external_url && (
                <a
                  href={item.external_url}
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              )}
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