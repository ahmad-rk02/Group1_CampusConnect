import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselPage.css";

function CarouselPage() {
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL; // Adjust this for production
   const API_MEDIA_BASE_URL=import.meta.env.VITE_STRAPI_MEDIA_BASE_URL;
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-home-carousels?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch carousel data");
        }
        const result = await response.json();
        console.log("API Response:", result); // Log for debugging
        setCarouselData(Array.isArray(result.data) ? result.data : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="Carousel-container-4">
      <Carousel>
        {carouselData.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 carousel-image"
              src={`${API_MEDIA_BASE_URL}${item.image.url}`} // Adjusted to avoid attributes
              alt={item.title || "Carousel slide"}
            />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
              {item.subtitle && <p>{item.subtitle}</p>}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPage;