import React from 'react';

class RelatedCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getRelatedDetails(productId) {}

  // loadRelatedDetails(listOfIds) {}

  render() {
    const { relatedProductIds } = this.props;

    if (relatedProductIds.length === 0) {
      return (
        <div className="related-card-container">
          No Related Products Available
        </div>
      );
    }

    return (
      <div className="related-card-container">
        {relatedProductIds.map((product) => (
          <div>
            {product}
          </div>
        ))}
      </div>
    );
  }
}

export default RelatedCardContainer;
