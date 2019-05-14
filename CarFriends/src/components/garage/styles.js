import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    filter_container: {
        flex: 1,
        marginTop: responsiveHeight(1),
        width: responsiveWidth(100),
        padding: responsiveWidth(2.5),
    }, 
    filter_box: {
        margin: responsiveWidth(2.5), 
        width: responsiveWidth(42.5),
        height: responsiveHeight(20),
        backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#00bce7',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filter_icon: {
        resizeMode: 'contain',
        height: responsiveHeight(15),
        width: responsiveWidth(30)
    },
    filter_label: {
        fontSize: responsiveFontSize(3),
        color: 'white',
        paddingBottom: responsiveHeight(1)
    }, 
    searched_container: {
        flex:1,
        marginTop: responsiveHeight(1),
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    searched_label: {
        fontSize: responsiveFontSize(2.5),
        color: '#f4c73b',
    },
    garage_item: {
        marginBottom: responsiveWidth(5), 
        marginLeft: responsiveWidth(15), 
        padding: responsiveWidth(2.5), 
        width: responsiveWidth(75),
        height: responsiveHeight(15),
        backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#00bce7',
        borderWidth: 2,
        flexDirection: 'row',
    }, 
    garage_img: {
        resizeMode: 'contain',
        width:responsiveWidth(20),
        height:responsiveHeight(12)
    },
    garage_desc: {
        marginLeft: responsiveWidth(2.5),
        width:responsiveWidth(40),
        height:responsiveHeight(12)
    }, 
    garage_name: {
        fontSize: responsiveFontSize(2.5),
        color: '#00bce7',
    },
    garage_pos: {
        fontSize: responsiveFontSize(2),
        color: 'white',
    },
    garage_service: {
        fontSize: responsiveFontSize(2),
        color: 'white',
    },
    garage_desc_pos_row: {
        marginTop: responsiveHeight(0.5),
        flexDirection: 'row'
    },
    garage_desc_pos_icon: {
        resizeMode: 'contain',
        height:responsiveHeight(3),
    },
    garage_desc_service_row: {
        marginTop: responsiveHeight(0.5 ),
        flexDirection: 'row'
    },
    garage_desc_service_icon: {
        resizeMode: 'contain',
        height:responsiveHeight(3),
    },
    garage_state: {
        width:responsiveWidth(7),
        height:responsiveHeight(12)
    },
    garage_state_icon: {
        resizeMode: 'contain',
        marginTop: responsiveHeight(0.5),
        height:responsiveHeight(2)
    }
});
