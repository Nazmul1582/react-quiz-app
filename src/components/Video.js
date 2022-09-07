import { Link } from "react-router-dom";
import image from "../assets/images/javascript.jpg";

export default function Video() {
  return (
    <Link to="quiz">
      <div className='video'>
        <img src={image} alt="Video Title" />
        <p>Questions about JavaScript programming language</p>
        <div className="qmeta">
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}
