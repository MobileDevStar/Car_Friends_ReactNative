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
export default class SignIn extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      searched: false,
      username: '',
      password: ''
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
                    <Text style={g_styles.page_title}>登入 / 登記</Text>
                </View>
            </View>
            <ScrollView style={styles.signin_content_container}>
                <View style={styles.username_container}>
                    <TextInput 
                        style={styles.username_box}
                        placeholder='會員名稱 / 手機號碼'
                        placeholderTextColor='grey'
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.password_container}>
                    <TextInput 
                        style={styles.password_box}
                        placeholder='密碼'
                        placeholderTextColor='grey'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.thirdparty_container}>
                    <View style={styles.facebook_box}>
                        <View style={styles.thirdparty_icon_box}>
                            <Image source={require('../../assets/icons/facebook.png')} style={styles.thirdparty_icon}/>
                        </View>
                        <Text style={styles.thirdparty_label}>
                            FACEBOOK 登入
                        </Text>
                    </View>
                    <View style={styles.wechat_box}>
                        <View style={styles.thirdparty_icon_box}>
                            <Image source={require('../../assets/icons/wechat.png')} style={styles.thirdparty_icon}/>
                        </View>
                        <Text style={styles.thirdparty_label}>
                            WeChat 登入
                        </Text>
                    </View>
                </View>
                <View style={styles.forgot_container}>
                    <Text style={styles.forgot_box}>
                        忘記密碼
                    </Text>
                </View>
            </ScrollView>
            <TouchableHighlight onPress={()=>Actions.push('signup')}>
                <Text style={styles.reserve_but}>登記</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
  }
}
