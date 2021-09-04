import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

const Footer = (props) => {
    const { solve } = props;
    return(
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={solve}>
                <Text style={styles.text}>Resolver</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.SECONDARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.SECONDARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});

export default Footer;