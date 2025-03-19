import { useEffect, useState } from "react";
import { Container, Spinner, Carousel } from "react-bootstrap";
import axios from "axios";
import "./TechnoBanner.css"; 

const TechnoBanner = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use environment variables from .env
  const STRAPI_API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
  const STRAPI_MEDIA_BASE_URL = import.meta.env.VITE_STRAPI_MEDIA_BASE_URL;
  const API_URL = `${STRAPI_API_BASE_URL}/api/techno-banner?populate=*`;

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);

        // Extract multimedia images
        const images = response.data.data.images.map((img) => {
          const imgUrl = img.url;
          return {
            id: img.id,
            url: imgUrl.startsWith('http://') || imgUrl.startsWith('https://') 
              ? imgUrl 
              : `${STRAPI_MEDIA_BASE_URL}${imgUrl}`,
          };
        });

        setPhotos(images);
      } catch (error) {
        console.error("Error fetching banner images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Container fluid className="banner-container">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : photos.length > 0 ? (
        <Carousel indicators={false} interval={3000} controls={true} className="custom-carousel">
          {photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <img className="d-block w-100 banner-image" src={photo.url} alt="Techno Banner" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No banner images available.</p>
      )}
    </Container>
  );
};

export default TechnoBanner;