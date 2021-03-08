import React from 'react';
import { GrSearch } from 'react-icons/gr';
import SaleModal from './SaleModal';

// const Header = () => (
//   <div>Header</div>
// );

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSale: true,
    };
    this.closeSale = this.closeSale.bind(this);
  }

  closeSale() {
    this.setState({
      showSale: false,
    });
  }

  render() {
    const { showSale } = this.state;
    return (
      <div>
        <div className="header-grid-frame">
          <div className="header-logo"> </div>
          <div className="header-title"> </div>
          <div className="header-search-bar">
            <div className="fake-search-bar">
              _____________
            </div>
            <GrSearch />
          </div>
        </div>
        {showSale ? <SaleModal closeSale={this.closeSale} /> : null}
      </div>
    );
  }
}

export default Header;
