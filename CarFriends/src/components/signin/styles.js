import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    signin_content_container: {
        flex: 1
    },
    username_container: {
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
    username_box: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: responsiveFontSize(2.5),
        paddingBottom: 1,
    },
    password_container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        borderBottomColor: '#00bce7',
        borderBottomWidth: 2,
    },
    password_box: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontSize: responsiveFontSize(2.5),
        paddingBottom: 1,
    },
    thirdparty_container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
        height: responsiveHeight(8)
    },
    facebook_box: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection: 'row',
        marginRight: responsiveWidth(2.5),
        padding: responsiveWidth(1),
        width: responsiveWidth(42.5),
        height: responsiveHeight(8),
        color: 'white',
        fontSize: responsiveFontSize(3),
        backgroundColor: 'black',
        borderColor: '#00bce7',
        borderWidth: 2,
        borderRadius: 15
    },
    wechat_box: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection: 'row',
        marginLeft: responsiveWidth(2.5),
        padding: responsiveWidth(1),
        width: responsiveWidth(42.5),
        height: responsiveHeight(8),
        color: 'white',
        fontSize: responsiveFontSize(3),
        backgroundColor: 'black',
        borderColor: '#00bce7',
        borderWidth: 2,
        borderRadius: 15
    },
    forgot_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(5),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
        height: responsiveHeight(8)
    },
    forgot_box: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection: 'row',
        marginRight: responsiveWidth(2.5),
        padding: responsiveWidth(1),
        width: responsiveWidth(42.5),
        height: responsiveHeight(8),
        color: 'white',
        fontSize: responsiveFontSize(3),
        backgroundColor: 'black',
        borderColor: '#00bce7',
        borderWidth: 2,
        borderRadius: 15
    },
    thirdparty_icon_box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(6),
        width: responsiveWidth(10),
        borderRightColor: 'white',
        borderRightWidth: 1
    },
    thirdparty_icon: {
        resizeMode: 'contain',
        width: responsiveWidth(10)
    },
    thirdparty_label: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: responsiveFontSize(1.9),
    },
    reserve_but: {
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
