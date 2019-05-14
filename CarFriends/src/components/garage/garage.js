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

type Props = {};
export default class Garage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      searched: false,
      searchWord: '',
      filters:[
        { 
          key: 'maintenace',
          label: '維修保養',
          icon: require('../../assets/icons/maintenace.png')
        }, 
        { 
          key: 'carBeauty',
          label: '汽車美容',
          icon: require('../../assets/icons/carBeauty.png')
        },
        { 
          key: 'vehicleExam',
          label: '驗車',
          icon: require('../../assets/icons/vehicleExam.png')
        },
        { 
          key: 'rim',
          label: '呔軨',
          icon: require('../../assets/icons/rim.png')
        },
        { 
          key: 'performance',
          label: '性能',
          icon: require('../../assets/icons/performance.png')
        },
        { 
          key: 'fosgate',
          label: '影音',
          icon: require('../../assets/icons/fosgate.png')
        },
        { 
          key: 'trailer',
          label: '拖車',
          icon: require('../../assets/icons/trailer.png')
        },
        { 
          key: 'otherService',
          label: '其他',
          icon: require('../../assets/icons/otherService.png')
        }
      ],
      garages: [
        {
          key: 'garage1',
          name: '豪遠',
          rate: 1,
          position: '元朗',
          service: '專業噴油服務',
          img: require('../../assets/images/car.png')
        },
        {
          key: 'garage2',
          name: '豪遠',
          rate: 1,
          position: '元朗',
          service: '專業噴油服務',
          img: require('../../assets/images/car.png')
        },
        {
          key: 'garage3',
          name: '豪遠',
          rate: 1,
          position: '元朗',
          service: '專業噴油服務',
          img: require('../../assets/images/car.png')
        },
        {
          key: 'garage4',
          name: '豪遠',
          rate: 1,
          position: '元朗',
          service: '專業噴油服務',
          img: require('../../assets/images/car.png')
        },
        {
          key: 'garage5',
          name: '豪遠',
          rate: 1,
          position: '元朗',
          service: '專業噴油服務',
          img: require('../../assets/images/car.png')
        }
      ]
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

  onClickGarageItem = (item) => {
    console.log(item);
    Actions.push('garageContent', {garage: item});
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
            placeholder='搜尋'
            placeholderTextColor='grey'
            onChangeText={(searchWord) => this.search(searchWord)}
            value={this.state.searchWord}
          />
        </View>
        {
          searched ? (
            <View style={styles.searched_container}>
              <Text style={styles.searched_label}>
                新增更多商品 ：精選商品低至8折
              </Text>
              <FlatList style={styles.filter_container}
                data={this.state.garages}
                renderItem={({item}) => 
                  <TouchableHighlight onPress={() => this.onClickGarageItem(item)}>
                    <View style={styles.garage_item}>
                      <Image source={item.img} style={styles.garage_img}/>  
                      <View style={styles.garage_desc}>
                        <Text style={styles.garage_name}> {item.name}</Text>
                        <View style={styles.garage_desc_pos_row}>
                          <Image source={require('../../assets/icons/pos.png')} style={styles.garage_desc_pos_icon}/>  
                          <Text style={styles.garage_pos}> {item.position}</Text>
                        </View>
                        <View style={styles.garage_desc_service_row}>
                          <Image source={require('../../assets/icons/service.png')} style={styles.garage_desc_service_icon}/>  
                          <Text style={styles.garage_service}> {item.service}</Text>
                        </View>
                      </View>
                      <View style={styles.garage_state}>
                        <Image source={require('../../assets/icons/garage_open.png')} style={styles.garage_state_icon}/>  
                      </View>
                    </View>
                  </TouchableHighlight>
                }
              />
            </View>
          ) : (
            <FlatList style={styles.filter_container}
              data={this.state.filters}
              numColumns = {2}
              renderItem={({item}) => 
                <TouchableHighlight>
                  <View
                    style={styles.filter_box}
                  >
                  <Image source={item.icon} style={styles.filter_icon}/>
                    <Text style={styles.filter_label}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableHighlight>
              }
            />
          )
        }
      </SafeAreaView>
    );
  }
}
