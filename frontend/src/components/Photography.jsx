import '../App.css';
import { Link } from 'react-router-dom';
import photo1 from '../assets/sti-img.png';
import photo2 from '../assets/porsche-img.png';

function Photography() {
  return (
    <div className="photography-container">
        <div className="back-home">
        <Link to="/" className="home-link">Home</Link>
        </div>
      <h2>My Photography</h2>
      <div className="photo-gallery">
        <img src={photo1} alt="Photo 1" />
        <img src={photo2} alt="Photo 2" />
        {/* Add more photos as needed */}
      </div>
    </div>
  );
}

export default Photography;
