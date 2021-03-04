import React from 'react';

class RelatedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleModalClick, selectedProduct, product } = this.props;

    return (
      <div
        className="related-modal"
        onClick={handleModalClick}
      >
        <h1> Comparing </h1>
        <table>
          <tbody>
            {selectedProduct.features.map((feature) => (
              <tr>
                <td>{feature.value}</td>
                <td>{feature.feature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RelatedModal;
