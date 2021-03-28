import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [comment, setComment] = useState("");
  const [doneLoading, setDoneLoading] = useState(false);
  const [articleStatus, setArticleStatus] = useState(true);

  async function findTruth() {
    console.log(comment);
    var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Accept", "application/x-www-form-urlencoded");
    myHeaders.append(
      "x-rapidapi-key",
      "a7a266e703mshbd2b2a1193b6624p111bd8jsn1c28ce2d9ed2"
    );
    myHeaders.append(
      "x-rapidapi-host",
      "dawg-fake-news-detector.p.rapidapi.com"
    );

    var formdata = new FormData();

    formdata.append("text", comment);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      "https://dawg-fake-news-detector.p.rapidapi.com/predict",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setArticleStatus(result.prediction))
      .catch((error) => console.log("error", error));
    console.log(articleStatus);
    await sleep(1000);
    await setDoneLoading(true);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <>
      <noscript>
        <link
          rel="stylesheet"
          href="https://englishextra.github.io/libs/john-locke/css/bundle.min.css"
        />
      </noscript>
      <div id="container" class="wrapper">
        <div class="hero animated duration-3s bounceInLeft"></div>
        <div class="monolith animated duration-3s bounceInRight"></div>
        <div
          id="scene"
          class="scene"
          data-friction-x="0.1"
          data-friction-y="0.1"
          data-scalar-x="25"
          data-scalar-y="15"
        >
          <div class="layer" data-depth="0.40">
            <canvas
              data-src="https://englishextra.github.io/libs/john-locke/img/matreshka-192x360.png"
              width="192"
              height="360"
              class="matreshka animated duration-3s bounceInUp"
            ></canvas>
          </div>
          <div class="layer" data-depth="0.60">
            <canvas
              data-src="https://englishextra.github.io/libs/john-locke/img/notebook-320x462.png"
              width="320"
              height="462"
              class="notebook animated duration-3s bounceInUp"
            ></canvas>
          </div>
          <div class="layer" data-depth="0.80">
            <canvas
              data-src="https://englishextra.github.io/libs/john-locke/img/pen-96x1141.png"
              width="96"
              height="1141"
              class="pen animated duration-3s bounceInDown"
            ></canvas>
          </div>
        </div>
        <div class="john-locke animated duration-3s bounceIn">
          <canvas
            data-src="https://englishextra.github.io/libs/john-locke/img/john-locke-500x645.png"
            width="500"
            height="645"
            class="animated duration-5s swing"
          ></canvas>
        </div>
        <div class="signature animated duration-3s bounceInLeft">
          {doneLoading ? (
            (console.log(articleStatus),
            articleStatus ? (
              <h1>
                Great Job! <br /> Your news source is legit!
              </h1>
            ) : (
              <div class="flex-container">
                <h1>
                  Oh no! <br /> Your news source looks fake!
                  <br />
                </h1>
                <h3>
                  Based on your interests, you might like this trustworthy news
                  source:
                </h3>
                <br />

                <p>
                  <a target="_blank" href="https://www.bbc.com/news/world">
                    BBC World
                  </a>
                </p>
              </div>
            ))
          ) : (
            <div class="flex-container">
              <textarea
                class="sheet textarea"
                placeholder="Paste here"
                // ref={article}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <Button variant="dark" onClick={findTruth}>
                Detect
              </Button>{" "}
            </div>
          )}
        </div>
        <div
          class="intro animated duration-5s bounceInLeft"
          role="navigation"
          aria-label="Site"
        >
          <h1>
            <a href="javascript:void(0);" rel="contents">
              ReNews
              <br />
              <span>A real solution to fake news</span>
            </a>
          </h1>
        </div>
        <div class="quote animated bounceInDown">
          <p>
            "Beware of false knowledge.
            <br />
            It is more dangerous than ignorance"
          </p>
        </div>
        <div class="start animated">
          <a href="javascript:void(0);" rel="contents">
            <img
              src="https://englishextra.github.io/libs/john-locke/img/start-360x360.svg"
              data-fallback-src="https://englishextra.github.io/libs/john-locke/img/start-360x360.png"
              class="svg-smil-img animated duration-5s swing"
              alt=""
            />
          </a>
        </div>
        <div class="hand animated">
          <a href="javascript:void(0);" rel="contents">
            <canvas
              data-src="https://englishextra.github.io/libs/john-locke/img/hand-200x96.png"
              width="200"
              height="96"
              class="animated duration-5s swing"
            ></canvas>
          </a>
        </div>
        <div class="guesture animated">
          <svg
            class="swipeup animated duration-5s swing"
            role="img"
            focusable="false"
          >
            <use xlinkHref="#swipeup"></use>
          </svg>
          <svg
            class="mousewheeldown animated duration-5s swing"
            role="img"
            focusable="false"
          >
            <use xlinkHref="#mousewheeldown"></use>
          </svg>
        </div>
        <div class="footer animated duration-3s bounceInDown">
          <p>
            <a
              href="javascript:void(0);"
              onclick="var a='mailto',b=':',c='englishextra2',k='%40',q='yahoo',s='.',v='com';this.href=a+b+c+k+q+s+v;"
            >
              &#169;&#160;2021&#160;ReNews
            </a>
          </p>
        </div>
      </div>
      <div class="ripple animated duration-5s">
        <img
          src="https://englishextra.github.io/libs/john-locke/img/ripple-200x200.svg"
          data-fallback-src="https://englishextra.github.io/libs/john-locke/img/ripple-200x200.png"
          class="svg-smil-img"
          alt=""
        />
      </div>
      <div class="loading animated duration-5s">Locating Reality&#8230;</div>
    </>
  );
}

export default App;
