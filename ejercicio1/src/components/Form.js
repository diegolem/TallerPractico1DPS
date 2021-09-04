import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';

const Form = props => {
    const { setA, setB, setC } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Ingrese el valor de a"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setA(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese el valor de b:"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setB(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese el valor de c:"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setC(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        borderRadius: 30,
        height: 220,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '85%',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
});

export default Form;
