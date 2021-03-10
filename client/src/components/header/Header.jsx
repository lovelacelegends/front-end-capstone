import React from 'react';
import HeaderSearchBar from './HeaderSearchBar';
import SaleModal from './SaleModal';

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
      <div className="header-grid-frame">
        <div className="header-logo"> </div>
        <div className="header-upper-middle"> </div>
        <HeaderSearchBar />
        {showSale ? <SaleModal closeSale={this.closeSale} /> : null}
      </div>
    );
  }
}

export default Header;
