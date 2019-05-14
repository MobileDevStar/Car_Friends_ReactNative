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
export default class GarageContent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      searched: false,
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
                    <Image source={require('../../assets/icons/garage_open.png')} style={styles.garage_state_icon}/>
                    <Text style={g_styles.page_title}>豪遠</Text>
                </View>
            </View>
            <ScrollView style={styles.garage_content_container}>
                <View style={styles.garage_content}>
                    <View style={styles.garage_image_container}>
                        <Image source={require('../../assets/images/car.png')} style={styles.garage_image}/>
                    </View>
                    <View style={styles.garage_info}>
                        <View style={styles.garage_info_service_container}>
                            <Image source={require('../../assets/icons/setting.png')} style={styles.garage_info_service_icon}/>
                            <Text style={styles.garage_info_item}>汽車美容 / 維修保養</Text>
                        </View>
                        <View style={styles.garage_info_service_container}>
                            <Image source={require('../../assets/icons/service.png')} style={styles.garage_info_service_icon}/>
                            <Text style={styles.garage_info_item}>專業噴油服務</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.garage_contact}>
                    <View style={styles.contact_label_container}></View>
                    <View style={styles.contact_row}>
                        <Text style={styles.contact_label}>地址：</Text>
                        <Text style={styles.contact_info}>元朗逸林首府路口附近</Text>
                    </View>
                    <View style={styles.contact_row}>
                        <Text style={styles.contact_label}>電話：</Text>
                        <Text style={styles.contact_info}>6187 9493</Text>
                    </View>
                    <View style={styles.contact_row}>
                        <Text style={styles.contact_label}>營業時間：</Text>
                        <Text style={styles.contact_info}>12:00 - 23:00</Text>
                    </View>
                    <View style={styles.contact_row}>
                        <Text style={styles.contact_label}></Text>
                        <Text style={styles.contact_info}>星期一至六（星期日及公眾假期休息）</Text>
                    </View>
                    <View style={styles.contact_row}>
                        <Text style={styles.contact_label}>付款方式：</Text>
                        <Text style={styles.contact_info}>現金</Text>
                    </View>
                </View>
                <View style={styles.garage_desc_container}>
                    <Text style={styles.garage_desc_label}>
                        豪遠專業噴油服務:
                    </Text>
                    <Text style={styles.garage_desc_value}>
                        直受眾多超跑 / 古董車車主追棒，可見
                        其復修翻新手工可見一斑！ 一團數十位逾廿多年經驗的噴漆
                        師父，專攻車身噴漆。
                    </Text>
                </View>
                <View style={styles.garage_desc_container}>
                    <Text style={styles.garage_desc_label}>
                        全車翻新或轉色服務:
                    </Text>
                    <Text style={styles.garage_desc_value}>
                        車身組件翻新都是另一賣點 ！
                    </Text>
                </View>
                <View style={styles.garage_desc_container}>
                    <Text style={styles.garage_desc_label}>
                        跟隨業界標準：
                    </Text>
                    <Text style={styles.garage_desc_value}>
                        DuPont (杜邦) 調色中心專人調色配油；使用銀箭力架，令車
                        漆硬度/亮度十足！自設逾2萬呎廠房，全上蓋密封工作平台；
                        鄰近元朗逸林首府 CarFriends亦曾選用車身翻新服務，相當
                        透明, 價錢均真! 一律先建議翻新報價，再跟據實況解釋修復
                        時間，翻新工序同實際價錢予車主考慮，雙方有效溝通，現金
                        支付
                    </Text>
                </View>
            </ScrollView>
            <TouchableHighlight>
                <Text style={styles.reserve_but}>預約</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
  }
}
