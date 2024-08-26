import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="sectiontitle">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            {/* React lets us pass in a component as a prop. <Highlight icon={<FontAwesomeIcon icon="bolt" />}
            That way we wont have to import FontAwesomeIcon in the Highlight component instead we are
            just passing FontAwersomeIcon component as a prop. and accepting the prop as an argument in the Highlight component.*/}
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              para="library has books in all your favourite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
