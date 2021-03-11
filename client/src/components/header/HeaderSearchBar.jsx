import React from 'react';
import { GrSearch } from 'react-icons/gr';

class HeaderSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-search-bar">
        <div className="header-search-frame">
          <form>
            <input type="text" placeholder="Search for a Product" />
          </form>
          <div id="header-mag-glass">
            <GrSearch id="header-search-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSearchBar;
