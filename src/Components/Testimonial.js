//import { propTypes } from "react-bootstrap/esm/Image";
import data from "./Testimonial-data";

export default function Testimonial(props) {
  return (
    <div className="col-lg-6">
      <div class="card testimonial-card mb-3">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.title}</h6>
          <p class="card-text">{props.testimonial}</p>
          <p>-{props.name}</p>
        </div>
      </div>
    </div>
  );
}
