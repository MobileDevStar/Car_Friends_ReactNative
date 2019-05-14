import { StyleSheet } from 'react-native';
import { Metrics } from './theme';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const g_styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#151615',
    }, 
    logo_container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: responsiveHeight(20),
        width: responsiveWidth(100)
    },
    logo: {
        resizeMode: 'contain',
        height: responsiveHeight(15),
        width: responsiveWidth(40)
    },
    search_container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: responsiveHeight(5),
        width: responsiveWidth(100)
    },
    search_box: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: responsiveFontSize(3),
        height: responsiveHeight(5),
        width: responsiveWidth(90),
        paddingBottom: 3,
        borderBottomColor: '#00bce7',
        borderBottomWidth: 2
    },
    header_container: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(15),
        width: responsiveWidth(90),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        borderBottomColor: '#00bce7',
        borderBottomWidth: 2
    },
    back_container: {
        height: responsiveHeight(15),
        width: responsiveWidth(10),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    back_icon: {
        resizeMode: 'contain',
        width: responsiveWidth(8),
    },
    title_container: {
        height: responsiveHeight(15),
        width: responsiveWidth(80),
        paddingLeft: responsiveWidth(3),
        paddingBottom: responsiveHeight(0.8),
        justifyContent: 'flex-end'
    },
    page_title: {
        marginLeft: responsiveWidth(0.5),
        fontSize: responsiveFontSize(3),
        color: '#00bce7'
    }
});
