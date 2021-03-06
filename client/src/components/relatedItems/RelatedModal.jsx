import React from 'react';
import PropTypes from 'prop-types';

class RelatedModal extends React.Component {
  static combineFeatures(featureArray1, featureArray2) {
    const arr1 = featureArray1.slice();
    const arr2 = featureArray2.slice();

    const resultArray = [];
    let counter = 0;

    for (let i = 0; i < arr1.length; i += 1) {
      counter += 1;
      const newFeatObj = {
        id: counter,
        feature: arr1[i].feature,
        currentValue: arr1[i].value,
        relatedValue: null,
      };

      for (let j = 0; j < arr2.length; j += 1) {
        if (arr1[i].feature === arr2[j].feature) {
          newFeatObj.relatedValue = arr2[j].value;
          arr2.splice(j, 1);
          break;
        }
      }
      resultArray.push(newFeatObj);
    }
    const cleanUp = arr2.map((feat) => {
      counter += 1;
      return {
        id: counter,
        feature: feat.feature,
        currentValue: null,
        relatedValue: feat.value,
      };
    });

    return resultArray.concat(cleanUp);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modalArray, closeModal } = this.props;

    const completeFeatArray = RelatedModal.combineFeatures(
      modalArray[0].features, modalArray[1].features,
    );

    return (
      <div
        className="related-modal"
        onClick={closeModal}
        onKeyPress={closeModal}
        role="button"
        tabIndex={0}
      >
        <div className="table-heading"> Comparing </div>
        <table id="compare-products">
          <tbody>
            <tr>
              <th>{modalArray[0].name}</th>
              <th> </th>
              <th>{modalArray[1].name}</th>
            </tr>
            {completeFeatArray.map((feature) => (
              <tr key={feature.id}>
                <td>{feature.currentValue}</td>
                <td>{feature.feature}</td>
                <td>{feature.relatedValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RelatedModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalArray: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
    ]),
  ).isRequired,
};

export default RelatedModal;
