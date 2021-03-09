import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Thumbnails from './Thumbnails';
//import Zoom from './Zoom';
import { AiOutlineExpand } from 'react-icons/Ai';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainThumbNailIndex: 0,
    };
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.handelEnlargedImage = this.handelEnlargedImage.bind(this);
  }

  handelEnlargedImage(){
    console.log('enlarged')
  }

  leftArrowClick() {
    const currentThumbnail = this.state.mainThumbNailIndex
    if(this.props.styles.results[this.props.currentStyle].photos[currentThumbnail -1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail - 1) });
    }
  }

  rightArrowClick() {
    const currentThumbnail = this.state.mainThumbNailIndex
    if(this.props.styles.results[this.props.currentStyle].photos[currentThumbnail +1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail + 1) });
    }
  }

  thumbnailClick(event) {
    const arrayOfPhotos = this.props.styles.results[this.props.currentStyle].photos;
    const newIndex = arrayOfPhotos.map((e) => e.thumbnail_url).indexOf(event.target.src);
    this.setState({ mainThumbNailIndex: newIndex });
  }

  render() {
    const { styles, currentStyle, handleExpandedView, displayGroupedExtras } = this.props;
    const { mainThumbNailIndex } = this.state;
    return (
      <div id="image-gallery">
        <img
          id="large-img"
          className={displayGroupedExtras ? null : "large-img-expanded"}
          src={styles.results[currentStyle].photos[mainThumbNailIndex].url}
          onClick={displayGroupedExtras ? handleExpandedView : this.handelEnlargedImage}
          alt="large image">
        </img>
        {/* <Zoom
          img={styles.results[currentStyle].photos[mainThumbNailIndex].url}
          zoomScale={3}
          width={600}
          height={600}
        /> */}
        <Thumbnails
          styles={styles}
          currentStyle={currentStyle}
          thumbnailClick={this.thumbnailClick}
        />
        <BsArrowLeftShort className="left-arrow" onClick={this.leftArrowClick} />
        <BsArrowRightShort className="right-arrow" onClick={this.rightArrowClick} />
        <div className="expand-button"><AiOutlineExpand onClick={handleExpandedView} /></div>
      </div>
    );
  }
}

export default ImageGallery;

/*
  componentDidMount() {
    this.magnify('large-img', 3);
  }

  magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    function moveMagnifier(e) {
      var pos, x, y;

      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}

      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";

      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;

      a = img.getBoundingClientRect();

      x = e.pageX - a.left;
      y = e.pageY - a.top;

      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

*/