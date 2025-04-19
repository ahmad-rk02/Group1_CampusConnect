import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselPage.css";

function CarouselPage() {
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
  const API_MEDIA_BASE_URL = import.meta.env.VITE_STRAPI_MEDIA_BASE_URL;

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-home-carousels?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch carousel data");
        }
        const result = await response.json();
        console.log("Strapi API Response:", result); // Debug log
        // Ensure result.data is an array and map to a clean format
        const data = Array.isArray(result.data)
          ? result.data.map((item) => ({
              id: item.id,
              title: item.attributes?.title || "",
              subtitle: item.attributes?.subtitle || "",
              image: item.attributes?.image?.data?.attributes || null, // Handle nested Strapi image structure
            }))
          : [];
        setCarouselData(data);
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
  if (carouselData.length === 0) return <div className="gec-carousel-error">No carousel data available</div>;

  return (
    <div className="gec-carousel-container">
      <Carousel controls={carouselData.length > 1} indicators={carouselData.length > 1}>
        {carouselData.map((item) => (
          <Carousel.Item key={item.id} className="gec-carousel-item">
            {item.image ? (
              <img
                className="gec-carousel-image"
                src={`${API_MEDIA_BASE_URL}${item.image.url}`}
                alt={item.title || "Carousel slide"}
                loading="lazy"
              />
            ) : (
              <div className="gec-carousel-placeholder">
                <span>No image available</span>
              </div>
            )}
            <div className="gec-carousel-caption">
              <h2 className="gec-carousel-title">{item.title || "No Title"}</h2>
              {item.subtitle && <p className="gec-carousel-subtitle">{item.subtitle}</p>}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPage;