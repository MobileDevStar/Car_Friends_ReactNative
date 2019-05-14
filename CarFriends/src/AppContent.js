import React, {Component} from 'react';
import { View } from 'react-native';

import Routers from './routers';
import BottomNav from './components/bottomnav';

class AppContent extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <Routers/>
            <BottomNav/>
        </View>
    );
  }
}

export default AppContent;