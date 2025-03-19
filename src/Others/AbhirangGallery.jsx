import { useEffect, useState } from "react";
import { Container, Spinner, Form, Carousel } from "react-bootstrap";
import axios from "axios";
import "./AbhirangGallery.css"; 

const AbhirangGallery = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use environment variables from .env
  const STRAPI_API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
  const STRAPI_MEDIA_BASE_URL = import.meta.env.VITE_STRAPI_MEDIA_BASE_URL;
  const BASE_API_URL = `${STRAPI_API_BASE_URL}/api/abhirang-photos`;

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}?populate=*`);
        const uniqueYears = [...new Set(response.data.data.map((photo) => photo.year))].sort((a, b) => b - a);
        setYears(uniqueYears);
      } catch (error) {
        console.error("Error fetching years:", error);
      }
    };
    fetchYears();
  }, []);

  useEffect(() => {
    if (!selectedYear) return;
    setLoading(true);
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URL}?filters[year][$eq]=${selectedYear}&populate=*`
        );
        const formattedPhotos = response.data.data.flatMap((photo) =>
          photo.images.map((img) => {
            const imgUrl = img.formats?.medium?.url || img.formats?.small?.url || img.url;
            return {
              id: img.id,
              url: imgUrl.startsWith('http://') || imgUrl.startsWith('https://') 
                ? imgUrl 
                : `${STRAPI_MEDIA_BASE_URL}${imgUrl}`,
            };
          })
        );
        setPhotos(formattedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [selectedYear]);

  return (
    <Container className="gallery-container">
      <h2 className="text-center my-4">{selectedYear ? `Glimpses of Abhirang ${selectedYear}` : "Glimpses of Abhirang"}</h2>

      <Form.Group className="text-center my-3">
        <Form.Label>Select Year:</Form.Label>
        <Form.Control as="select" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))} className="year-select">
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : photos.length > 0 ? (
        <Carousel indicators={false} interval={3000} controls={true} className="custom-carousel">
          {photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <img className="d-block w-100 gallery-image" src={photo.url} alt={`abhirang ${selectedYear}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        selectedYear && <p className="text-center">No photos available for {selectedYear}.</p>
      )}
    </Container>
  );
};

export default AbhirangGallery;