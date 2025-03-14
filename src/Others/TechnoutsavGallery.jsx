import { useEffect, useState } from "react";
import { Container, Spinner, Form, Carousel } from "react-bootstrap";
import axios from "axios";
import "./TechnoutsavGallery.css"; 

const TechnoutsavGallery = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/technoutsav-photos?populate=*");
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
          `http://localhost:1337/api/technoutsav-photos?filters[year][$eq]=${selectedYear}&populate=*`
        );
        const formattedPhotos = response.data.data.flatMap((photo) =>
          photo.images.map((img) => ({
            id: img.id,
            url: `http://localhost:1337${img.formats?.medium?.url || img.formats?.small?.url || img.url}`,
          }))
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
      <h2 className="text-center my-4">{selectedYear ? `Glimpses of Technoutsav ${selectedYear}` : "Glimpses of Technoutsav"}</h2>

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
              <img className="d-block w-100 gallery-image" src={photo.url} alt={`Technoutsav ${selectedYear}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        selectedYear && <p className="text-center">No photos available for {selectedYear}.</p>
      )}
    </Container>
  );
};

export default TechnoutsavGallery;
