import './Title.css';
import video from './video.mp4'; 

export default function Title() {
  return (
    <div className="title-box">
      <h1>Web Development</h1>
      <a href="#Home">Learn More</a>


      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      
    </div>
  );
}

