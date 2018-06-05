import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import cmConfig from '../../CommonConfig';
import MenuMarkup from './MenuMarkup/MenuMarkup';
import MenuMarkup2 from './MenuMarkup/MenuMarkup2';
import QaMenu from './MenuMarkup/Qa';
import ResponsiveNav from './ResponsiveNav/ResponsiveNav';

class Header extends Component {
  render(){
    const userInfo = cmConfig.getUserInfoByToken(this.props.token);
    let menuType = null;
    switch(userInfo.dept){
      case 'Qa':
        menuType = QaMenu;
        break;
      case 'Leader':
        menuType = MenuMarkup;
        break;
      default:
        menuType = MenuMarkup2;
        break;
    };
    return (
      <ResponsiveNav
        activeLinkKey={this.props.location.pathname}
        menuMarkup={menuType}
        placement='bottomLeft'
      />
    );
  }
};

const mapStateToProps = state => {
  return {
      token: state.user.token
  };
};

export default connect(mapStateToProps)(withRouter(Header));

