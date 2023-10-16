import { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = data[index];

  const nextPerson = () => {};
  const prevPerson = () => {};

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
        </div>
        <button type="button" className="prev-btn" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </article>
    </main>
  );
};
export default App;
