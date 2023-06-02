import SimpleImageSlider from "react-simple-image-slider";

import first from "../assets/first.jpeg";
import second from "../assets/second.webp";
import third from "../assets/third.webp";
import fourth from "../assets/fourth.jpeg";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.jpeg";

const images = [
  { url: first },
  { url: second },
  { url: third },
  { url: fourth },
  { url: fifth },
  { url: sixth },
];
export const Slide = () => {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={600}
        images={images}
        slideDuration={1}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};
