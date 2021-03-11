/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

class Zoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: false,
      mouseX: null,
      mouseY: null,
    };

    const {
      height,
      img,
      transitionTime,
      width,
    } = props;

    this.outerDivStyle = {
      height: `${height}px`,
      width: `${width}px`,
      overflow: 'hidden',
      margin: 'auto',
      cursor: 'zoom-out',
    };

    this.innerDivStyle = {
      height: `${height}px`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto 100%',
      transition: `transform ${transitionTime}s ease-out`,
      backgroundImage: `url('${img}')`,
    };

    this.imageRef = React.createRef();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
  }

  handleMouseOver() {
    this.setState({
      zoom: true,
    });
  }

  handleMouseOut() {
    this.setState({
      zoom: false,
    });
  }

  handleMouseMovement(e) {
    const {
      left: offsetLeft,
      top: offsetTop,
    } = this.imageRef.current.getBoundingClientRect();

    const {
      current: {
        style: {
          height,
          width,
        },
      },
    } = this.imageRef;

    const x = ((e.pageX - offsetLeft) / parseInt(width, 10)) * 100;
    const y = ((e.pageY - offsetTop) / parseInt(height, 10)) * 100;

    this.setState({
      mouseX: x,
      mouseY: y,
    });
  }

  render() {
    const {
      mouseX,
      mouseY,
      zoom,
    } = this.state;

    const {
      zoomScale,
      toggleZoom,
    } = this.props;

    const transform = {
      transformOrigin: `${mouseX}% ${mouseY}%`,
    };

    return (
      <div
        style={this.outerDivStyle}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onMouseMove={this.handleMouseMovement}
        ref={this.imageRef}
        onClick={toggleZoom}
      >
        <div
          style={{
            ...transform,
            ...this.innerDivStyle,
            transform: zoom ? `scale(${zoomScale})` : 'scale(1.0)',
          }}
          className="zoomImg"
        />
      </div>
    );
  }
}

Zoom.propTypes = {
  img: PropTypes.string.isRequired,
  zoomScale: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  transitionTime: PropTypes.number,
  toggleZoom: PropTypes.func.isRequired,
};

Zoom.defaultProps = {
  transitionTime: 0.1,
};

export default Zoom;
