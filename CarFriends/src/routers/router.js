import React, { Component } from 'react';
import { styles } from './styles';
import { Scene, Router, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { Root } from 'native-base'

import HomeContainer from '../components/home';
import SignInContainer from '../components/signin';
import SignUpContainer from '../components/signup';
import GarageContainer from '../components/garage';
import GarageContentContainer from '../components/garageContent';
import ProductContainer from '../components/product';
import SearchCarContainer from '../components/searchCar';
import BlogContainer from '../components/blog';
import AuthContainer from '../components/auth';

const RouterRedux = connect()(Router);

export default class Routes extends React.Component {

  render() {
    return (
      <Root>
        <StatusBar
            backgroundColor="#000"
            barStyle="light-content"
          />
        <RouterRedux navigationBarStyle={styles.navBar}
          tintColor="#ffffff"
          titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="garage"
              component={GarageContainer}
              title="Garage"
              hideNavBar={true}
            />
            <Scene key="garageContent"
              component={GarageContentContainer}
              title="GarageContent"
              hideNavBar={true}
            />
            <Scene key="product"
              component={ProductContainer}
              title="home"
              hideNavBar={true}
            />
            <Scene key="searchCar"
              component={SearchCarContainer}
              title="home"
              hideNavBar={true}
            />
            <Scene key="blog"
              component={BlogContainer}
              title="home"
              hideNavBar={true}
            />
            <Scene key="auth"
              component={AuthContainer}
              title="home"
              hideNavBar={true}
            />
            <Scene key="home"
              component={HomeContainer}
              title="home"
              hideNavBar={true}
            />
            <Scene key="signin"
              component={SignInContainer}
              title="signin"
              hideNavBar={true}
            />
            <Scene key="signup"
              component={SignUpContainer}
              title="signup"
              hideNavBar={true}
            />
          </Scene>
        </RouterRedux>
      </Root>
    );
  }
}
