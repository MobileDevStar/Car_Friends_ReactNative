import { StyleSheet } from 'react-native';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    garage_state_icon: {
        resizeMode: 'contain',
        marginTop: responsiveHeight(0.5),
        height:responsiveHeight(2)
    },
    garage_content_container: {
        flex: 1
    },
    garage_content: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        height: responsiveHeight(15),
        width: responsiveWidth(90),
        flexDirection: 'row'
    },
    garage_image_container: {
        height: responsiveHeight(15),
        width: responsiveWidth(30),
        backgroundColor: 'green'
    },
    garage_image: {
        resizeMode: 'stretch',
        height: responsiveHeight(15),
        width: responsiveWidth(30)
    },
    garage_info: {
        height: responsiveHeight(15),
        width: responsiveWidth(60),
        justifyContent: 'flex-end',
    },
    garage_info_service_container: {
        flexDirection: 'row',
        paddingLeft: responsiveWidth(2.5),
    },
    garage_info_service_icon: {
        resizeMode: 'contain',
        width: responsiveWidth(6),
    }, 
    garage_info_item: {
        marginLeft: responsiveWidth(2.5),
        color: 'white',
        fontSize: responsiveFontSize(2.5)
    }, 
    garage_contact: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
        borderColor: '#00bce7',
        borderWidth: 2
    }, 
    contact_label_container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: responsiveWidth(23),
        backgroundColor: '#00bce7',
    },
    contact_row: {
        flexDirection: 'row',
    },
    contact_label: {
        width: responsiveWidth(23),
        padding: responsiveHeight(0.5),
        textAlignVertical: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2)
    },
    contact_info: {
        width: responsiveWidth(67),
        padding: responsiveHeight(0.5),
        textAlignVertical: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2)
    }, 
    garage_desc_container: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(90),
    },  
    garage_desc_label: {
        textAlignVertical: 'center',
        color: '#00bce7',
        fontSize: responsiveFontSize(2.5)
    },
    garage_desc_value: {
        textAlignVertical: 'center',
        color: 'white',
        fontSize: responsiveFontSize(2)
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
