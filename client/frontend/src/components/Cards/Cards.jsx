import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Cards() {
  const max = 1000;
  const min = 1;

  const URL = `https://www.eporner.com/api/v2/video/search/?query=teen&per_page=${Math.floor(
    Math.random() * 30
  )}&page=${Math.floor(
    Math.random() * 100
  )}&thumbsize=medium&order=top-weekly&lq=0&format=json`;

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const datos = await fetch(URL);
    const datosJSON = await datos.json();
    setVideos(datosJSON.videos);
    console.log(datosJSON);
  };

  return (
    <Carousel variant="dark">
      {!videos
        ? "Cargando datos"
        : videos.map((v) => {
            return (
              <Carousel.Item>
                <iframe
                  src={v.embed}
                  title={v.title}
                  width="600"
                  height="600"
                ></iframe>

                <Carousel.Caption>
                
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
}

export default Cards;
