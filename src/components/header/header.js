
import React, { Component } from 'react';

import Nav from './nav';

class Header extends Component {

  render() {  
    return (
      <div>
        <Nav onClickTogle={this.onClickTogle} />
      </div>
    );
  }


}

export default Header;
  