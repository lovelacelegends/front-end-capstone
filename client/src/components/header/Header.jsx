import React from 'react';
import { GrSearch } from 'react-icons/gr';
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
        <div className="header-search-bar"> hell </div>
        {showSale ? <SaleModal closeSale={this.closeSale} /> : null}
      </div>
    );
  }
}

export default Header;
