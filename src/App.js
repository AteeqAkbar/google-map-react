import React, { useState } from "react";
import "./styles.css";
import ReactPlayer from "react-player";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  {
    id: 1,
    title: "Round Pond",
    lat: 51.506,
    lng: -0.184,
    url: "https://youtu.be/TXyt-9Iu61E",
  },
  {
    id: 2,
    title: "The Long Water",
    lat: 51.508,
    lng: -0.175,
    url: "https://youtu.be/QnqTBtTAo-c",
  },
  {
    id: 3,
    title: "The Serpentine",
    lat: 51.505,
    lng: -0.164,
    url: "https://youtu.be/tqiIIRyoV0Q",
  },
];

export default function App() {
  const [urls, setUrls] = useState("");
  const playerHendler = (url) => {
    console.log(url);
    setUrls(url);
  };

  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyCvfuGYSkTsQCa9hEra7V94t1J_Q2r-iYg",
          language: "en",
          region: "US",
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title, url }) => {
          return (
            <MyMarker
              key={id}
              lat={lat}
              lng={lng}
              text={id}
              tooltip={title}
              url={url}
              onclicks={playerHendler}
            />
          );
        })}
      </GoogleMapReact>
      <ReactPlayer url={urls} onReady playing={true} width={"100%"} />
    </div>
  );
}
