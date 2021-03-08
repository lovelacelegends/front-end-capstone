import React from 'react';
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
  }

  closeSale() {
    this.setState({
      showSale: false,
    });
  }

  render() {
    return (
      <div>
        <div className="header-grid-frame">
          <div className="header-logo"> </div>
          <div className="header-title">
            LOVELACE LEGENDS PRODUCT PAGE
          </div>
          <div className="header-search-bar">
            SEARCH ME
          </div>
        </div>
        <SaleModal />
      </div>
    );
  }
}

export default Header;
