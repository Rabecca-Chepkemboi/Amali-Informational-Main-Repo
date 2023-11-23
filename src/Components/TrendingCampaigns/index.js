import React from "react";
import "./style.css";const imagePaths = [
  "jepkemoi.png",
  "rudisha.png",
  "kipchoge.png",
];
const TrendingCampaigns = () => {
  const imagesWithText = [
    { imageName: imagePaths[0], text: "1500 Meters runner", name: "Vivian Jepkemoi" },
    { imageName: imagePaths[1], text: "820 Meters runner", name: "David Rudisha" },
    { imageName: imagePaths[2], text: "42 Kilometers runner", name: "Eliud Kipchoge" },
  ];  const handleDonateClick = (athlete) => {
    console.log(`Donating to ${athlete.name}`);
  };  return (
    <div id="athletes">
      <h1 className="teams">Trending Campaigns</h1>
      <hr className="divider" />
      <div className="categories"></div>
      <div className="images-section">
        {imagesWithText.map((item, index) => (
          <div className="champion" key={index}>
            <img
              className="athletes"
              src={`/images/${item.imageName}`}
              alt={`winner-${index}`}
            />
            <div>
              <p><strong style={{ fontSize: 'larger' }}>{item.name}</strong></p>
              <p>{item.text}</p>
              <button className="donate-button" onClick={() => handleDonateClick(item)}>Donate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrendingCampaigns;