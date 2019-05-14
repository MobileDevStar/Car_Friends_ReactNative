/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, SafeAreaView, FlatList, TouchableHighlight} from 'react-native';
import { Rating } from 'react-native-ratings';
import {g_styles} from '../../AppStyle';
import {styles} from './styles';
import { Actions } from 'react-native-router-flux';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

type Props = {};
export default class Garage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      searched: false,
    };
  }

  search = searchWord => {
    if (searchWord.length < 1) {
      this.setState({searched: false});  
    } else {
      this.setState({searched: true});  
    }
    this.setState({searchWord});
  }

  renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  render() {
    const {searched} = this.state;
    return (
      <SafeAreaView style={g_styles.container}>
        <View style={g_styles.logo_container}>
          <Image style={g_styles.logo} source={require('../../assets/icons/logo.png')}/>
        </View>
        <View style={g_styles.search_container}>
          <TextInput 
            style={g_styles.search_box}
            placeholder='Search'
            placeholderTextColor='grey'
            onChangeText={(searchWord) => this.search(searchWord)}
            value={this.state.searchWord}
          />
        </View>
        <View style={styles.viewpager_container}>
          <IndicatorViewPager
            style={{flex:1}}
            indicator={this.renderDotIndicator()}
          >
            <View>
                <View style={styles.service_image_container}>
                  <Image source={require('../../assets/images/image1.png')} style={styles.service_image}/>
                </View>
                <View style={styles.service_container}>
                  <Text style={styles.service_button}>
                    Service
                  </Text>
                </View>
            </View>
            <View>
                <View style={styles.service_image_container}>
                  <Image source={require('../../assets/images/image2.png')} style={styles.service_image}/>
                </View>
                <View style={styles.service_container}>
                  <Text style={styles.service_button}>
                    優惠詳情
                  </Text>
                </View>
            </View>
            <View>
                <View style={styles.service_image_container}>
                  <Image source={require('../../assets/images/image3.png')} style={styles.service_image}/>
                </View>
                <View style={styles.service_container}>
                  <Text style={styles.service_button}>
                    優惠詳情
                  </Text>
                </View>
            </View>
          </IndicatorViewPager>
        </View>
        <View style={styles.auth_container}>
          <TouchableHighlight onPress={()=>Actions.push('signin')}>
            <Text style={styles.auth_button}>Sign In / Sign Up</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
