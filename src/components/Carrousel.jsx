import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css';

const images = [
  "https://i.imgur.com/j4j5jLf.jpg",
  "https://i.imgur.com/riv0Pt9.jpeg"
];


function Carrousel() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
    
  );
}
export default Carrousel;