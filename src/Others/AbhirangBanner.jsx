import { useEffect, useState } from "react";
import { Container, Spinner, Carousel } from "react-bootstrap";
import axios from "axios";
import "./AbhirangBanner.css"; 

const AbhirangBanner = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:1337/api/abhirang-banner?populate=*");

        // Extract multimedia images
        const images = response.data.data.images.map((img) => ({
          id: img.id,
          url: `http://localhost:1337${img.url}`,
        }));

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
              <img className="d-block w-100 banner-image" src={photo.url} alt="abhirang Banner" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No banner images available.</p>
      )}
    </Container>
  );
};

export default AbhirangBanner;
