import React, { Component } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import cmConfig from './CommonConfig';

/* Static Page */
import LoginPage from './pages/StaticPage/Login';
import Logout from './pages/StaticPage/Logout';
import HomePage from './pages/StaticPage/Home';
import InProgress from './pages/StaticPage/InProgress';

/* Component */
import Header from './components/Menu/Header';

/* Pages */
//Fabric Warehouse
import WarehousePage from './pages/PreProduction/Fabric/Warehouse';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <Redirect to='/' />
      </Switch>
    );
    const token = localStorage.getItem('token');
    if(token && cmConfig.verifyToken(token)){
      routes = (
        <Grid fluid={true}>
          <Row className="show-grid" style={{marginBottom: '5px'}}>
              <Route path='/' component={Header} />
          </Row>
          <Row className="show-grid" style={{padding: "15px", background: "#f8f8f8"}}>
            <Col sm={12} md={12}>
              <Switch>
              <Route path='/fabricWarehouse' component={WarehousePage} exact />
                <Route path='/logout' component={Logout} exact />
                <Route path='/404' component={InProgress} exact />
                <Route path='/' component={HomePage} exact />
                <Redirect to='/404' />
              </Switch>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <footer style={{textAlign: 'center', color: '#767676'}}>Copyright © Duc Thanh Garment Import - Export Co., LTD 2018</footer>
            </Col>
          </Row>
        </Grid>
      );
    }
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
