import React from 'react';

class RelatedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleModalClick } = this.props;

    return (
      <div
        className="related-modal"
        onClick={handleModalClick}
      >
        MODAL
      </div>
    );
  }
}

export default RelatedModal;
