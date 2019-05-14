import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    viewpager_container: {
        flex:1,
        marginTop: responsiveHeight(2),
        width: responsiveWidth(100),
    },
    service_image_container: {
        flex: 1,
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        //marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(1),
        borderColor: '#00bce7',
        borderWidth: 2,
    },
    service_image: {
        resizeMode: 'contain',
        flex: 1
    },
    service_container: {
        width: responsiveWidth(100),
        height: responsiveHeight(10)
    },
    service_button: {
        width: responsiveWidth(50),
        height: responsiveHeight(5),
        color: 'white',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#00bce7',
        borderWidth: 2,
        marginLeft: responsiveWidth(25),
        marginRight: responsiveWidth(25),
        marginTop: responsiveWidth(1),
        marginBottom: responsiveWidth(4),
    },
    auth_container: {
        width: responsiveWidth(100),
    },
    auth_button: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: responsiveWidth(5),
        height: responsiveHeight(10),
        backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#00bce7',
        borderWidth: 2,
    }
});
