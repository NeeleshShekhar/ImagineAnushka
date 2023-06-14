import Carousel from 'react-bootstrap/Carousel';
import "./Caraousel.css";
function CaraouselMain() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="img-test"
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/12/22103134/Cover-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-test"
          src="https://imageio.forbes.com/specials-images/imageserve/61cdd9ec2bbdedb659077751/Neutral-living-color-corrected/960x0.jpg?height=515&width=711&fit=bounds"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-test"
          src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/04/13225133/Copy-of-IMG_1716.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaraouselMain;