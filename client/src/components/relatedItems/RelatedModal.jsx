import React from 'react';
import { GrCheckmark } from 'react-icons/gr';
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
        relatedValue: '',
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
        currentValue: '',
        relatedValue: feat.value,
      };
    });

    return resultArray.concat(cleanUp);
  }

  static featureCheck(featureValue) {
    if (featureValue === null) {
      return <GrCheckmark />;
    }
    return featureValue;
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
      <div className="modal-overlay">
        <div
          className="related-modal"
          onClick={closeModal}
          onKeyPress={closeModal}
          role="button"
          tabIndex={0}
        >
          <div className="table-graph-header">
            <table>
              <tbody>
                <tr>
                  <th className="modal-col modal-col-1">{modalArray[0].name}</th>
                  <th className="modal-col modal-col-2"> COMPARING </th>
                  <th className="modal-col modal-col-3">{modalArray[1].name}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-graph-body">
            <table>
              <tbody>
                {completeFeatArray.map((feature) => (
                  <tr key={feature.id}>
                    <td className="modal-col modal-col-1">{RelatedModal.featureCheck(feature.currentValue)}</td>
                    <td className="modal-col modal-col-2">{feature.feature}</td>
                    <td className="modal-col modal-col-3">{RelatedModal.featureCheck(feature.relatedValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
