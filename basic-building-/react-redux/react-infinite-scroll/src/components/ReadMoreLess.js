import React, { Component } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./css/ReadMoreLess.css";

class ReadMoreLess extends Component {
  render() {
    return (
      <>
        <ReactReadMoreReadLess
          charLimit={200}
          readMoreClassName="read_more"
          readLessClassName="read_less"
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          ellipsis={"......"}
          className="random_text"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sapiente perferendis similique facere sint maiores
          vero, sed dicta, dolore exercitationem dolores! Dolor eos repellendus
          ducimus quis animi ipsum doloribus laudantium! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Necessitatibus sapiente perferendis
          similique facere sint maiores vero, sed dicta, dolore exercitationem
          dolores! Dolor eos repellendus ducimus quis animi ipsum doloribus
          laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sapiente perferendis similique facere sint maiores
          vero, sed dicta, dolore exercitationem dolores! Dolor eos repellendus
          ducimus quis animi ipsum doloribus laudantium! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Necessitatibus sapiente perferendis
          similique facere sint maiores vero, sed dicta, dolore exercitationem
          dolores! Dolor eos repellendus ducimus quis animi ipsum doloribus
          laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sapiente perferendis similique facere sint maiores
          vero, sed dicta, dolore exercitationem dolores! Dolor eos repellendus
          ducimus quis animi ipsum doloribus laudantium!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Necessitatibus sapiente perferendis
          similique facere sint maiores vero, sed dicta, dolore exercitationem
          dolores! Dolor eos repellendus ducimus quis animi ipsum doloribus
          laudantium!
        </ReactReadMoreReadLess>
      </>
    );
  }
}

export default ReadMoreLess;
