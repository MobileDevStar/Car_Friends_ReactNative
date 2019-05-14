import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    signup_content_container: {
        flex: 1
    },
    phonenumber_container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: responsiveHeight(2),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        borderBottomColor: '#00bce7',
        borderBottomWidth: 2,
    },
    phonenumber_box: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: responsiveFontSize(2.5),
        paddingBottom: 1,
    },
    signup_box: {
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: responsiveWidth(5),
        width: responsiveWidth(90),
        height: responsiveHeight(10),
        color: 'white',
        fontSize: responsiveFontSize(3),
        backgroundColor: 'black',
        borderColor: '#00bce7',
        borderWidth: 2,
        borderRadius: 15
    }
});
