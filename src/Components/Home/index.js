import React, { useEffect } from "react";
import "./style.css";

const HomePage = () => {
  useEffect(() => {
    const backgrounds = [
      "kiprop.png",
      "eliudkipchoge.jpg",
      "chepngetich.png",
      "Rudisha.png"
    ];
    let currentBackgroundIndex = 0;
    const backgroundElement = document.querySelector(".background");

    const changeBackground = () => {
      backgroundElement.style.backgroundImage = `url(images/${backgrounds[currentBackgroundIndex]})`;
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    };

    const interval = setInterval(changeBackground, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <div className="background"></div>
      <div className="overlay"></div>
      <p className="caption">
        A little donation can have a ripple effect on athletes.
      </p>
    </div>
  );
};

export default HomePage;