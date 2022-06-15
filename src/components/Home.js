import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="greenary">What our SmartText can do?</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Uppercase</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Uppercase letters are also known as capital letters. Uppercase
              letters signal to the reader that something is important or
              significant. English alphabet uppercase letters: A B C D E F G H I
              J K L M N O P Q R S T U V W X Y Z.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Lowercase</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In writing, most letters are lowercase. Lowercase letters are all
              letters that do not begin a sentence or refer to a proper noun.
              English alphabet lowercase letters: a b c d e f g h i j k l m n o
              p q r s t u v w x y z.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Clear Text</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Cleartext is information that is stored or sent in an unencrypted
              form. It is already in its expected form, consumable and readable.
              Cleartext is sometimes conflated with plaintext, however there is
              a difference between cleartext and plaintext.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="greenary">
        <h1>Start converting your text the way you wish to?</h1>
        <Link className="lightGreen" to="/textAnalyzer">
          To edit your text
        </Link>
      </div>
    </>
  );
}
