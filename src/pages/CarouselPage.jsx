import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselPage.css";

function CarouselPage() {
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-home-carousels?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch carousel data");
        }
        const result = await response.json();
        setCarouselData(Array.isArray(result.data) ? result.data : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, [API_BASE_URL]);

  if (loading) return <div className="gec-carousel-loading">Loading...</div>;
  if (error) return <div className="gec-carousel-error">Error: {error}</div>;

  return (
    <div className="gec-carousel-container">
      <Carousel controls={carouselData.length > 1} indicators={carouselData.length > 1}>
        {carouselData.map((item) => (
          <Carousel.Item key={item.id} className="gec-carousel-item">
            <img
              className="gec-carousel-image"
              src={item.image.url} // Directly using the image URL from your JSON
              alt={item.title || "Carousel slide"}
              loading="lazy"
            />
            <div className="gec-carousel-caption">
              <h2 className="gec-carousel-title">{item.title}</h2>
              {item.subtitle && <p className="gec-carousel-subtitle">{item.subtitle}</p>}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPage;