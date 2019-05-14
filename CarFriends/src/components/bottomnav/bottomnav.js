import React, {Component} from 'react';
import BottomNavigation, {
    FullTab,
    Badge
  } from 'react-native-material-bottom-navigation'

import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
//import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default class BottomNav extends React.Component {
    state = {
      activeTab: 'home'
    }
  
    tabs = [
      {
        key: 'garage',
        label: 'Garage',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: require('../../assets/icons/garage.png')
      },
      {
        key: 'product',
        label: 'E-commerce',
        barColor: '#00695C',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: require('../../assets/icons/product.png')
      },
      {
        key: 'searchCar',
        label: 'Market',
        barColor: '#6A1B9A',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: require('../../assets/icons/searchCar.png')
      },
      {
        key: 'blog',
        label: 'Blog',
        barColor: '#000000',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: require('../../assets/icons/blog.png')
      },
      {
        key: 'home',
        label: 'Sign In/Up',
        barColor: '#1565C0',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: require('../../assets/icons/auth.png')
      }
    ]
  
    state = {
      activeTab: this.tabs[0].key
    }
  
    renderIcon = icon => ({ isActive }) => (
      <Image style={{width: 50, height: 30}} source={icon}/>
    )
  
    renderTab = ({ tab, isActive }) => (
      <LinearGradient colors={['#585858', '#151615', '#151615', '#151615', '#151615', '#151615']} style={{flex:1}} >
        <FullTab
          isActive={isActive}
          showBadge={tab.key === 'blog'}
          renderBadge={() => <Badge>2</Badge>}
          key={tab.key}
          label={tab.label}
          renderIcon={this.renderIcon(tab.icon)}
        />
      </LinearGradient>
    )

    onPressTab = (newTab) => {
      this.setState({ activeTab: newTab.key });
      if (newTab.key == 'garage') {
        Actions.reset('garage');
      } else if (newTab.key == 'product') {
        Actions.reset('product');
      } else if (newTab.key == 'searchCar') {
        Actions.reset('searchCar');
      } else if (newTab.key == 'blog') {
        Actions.reset('blog');
      } else if (newTab.key == 'home') {
        Actions.reset('home');
      }
    }
  
    render() {
      return (
        <BottomNavigation
            tabs={this.tabs}
            activeTab={this.state.activeTab}
            onTabPress={this.onPressTab}
            renderTab={this.renderTab}
            useLayoutAnimation
        />  
      )
    }
  }