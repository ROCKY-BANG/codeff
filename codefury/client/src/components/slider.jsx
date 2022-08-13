import SimpleImageSlider from "react-simple-image-slider";
// import './style.css';
const images = [
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
  { url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"},
  { url: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" },
  { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
];

const Slider = () => {
  return (
    <div className="slider">
      <SimpleImageSlider
        width={800}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
        autoPlayDelay={1}

      />
    </div>
  );
}

export default Slider ;