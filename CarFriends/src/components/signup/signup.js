/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, Text, View, Image, TextInput, SafeAreaView, FlatList, TouchableHighlight} from 'react-native';
import { Rating } from 'react-native-ratings';
import {g_styles} from '../../AppStyle';
import {styles} from './styles';
import { Actions } from 'react-native-router-flux';

type Props = {};
export default class SignUp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      searched: false,
      phonenumber: ''
    };
  }

  render() {
    const {searched} = this.state;
    return (
        <SafeAreaView style={g_styles.container}>
            <View style={g_styles.header_container}>
                <View style={g_styles.back_container}>
                    <TouchableHighlight onPress={() => Actions.pop()}>
                        <Image source={require('../../assets/icons/back.png')} style={g_styles.back_icon}/>
                    </TouchableHighlight>
                </View>
                <View style={g_styles.title_container}>
                    <Text style={g_styles.page_title}>登記</Text>
                </View>
            </View>
            <ScrollView style={styles.signup_content_container}>
                <View style={styles.phonenumber_container}>
                    <TextInput 
                        style={styles.phonenumber_box}
                        placeholder='請輸入登入手機號碼'
                        placeholderTextColor='grey'
                        onChangeText={(phonenumber) => this.setState({phonenumber})}
                        value={this.state.phonenumber}
                    />
                </View>                
                <TouchableHighlight>
                    <Text style={styles.signup_box}>
                        傳送
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        </SafeAreaView>
    );
  }
}
