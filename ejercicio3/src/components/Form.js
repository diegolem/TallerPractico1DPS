import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';

const Form = props => {
    const { setNum1, setNum2, setNum3, setNum4, verify } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Ingrese el valor #1"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setNum1(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese el valor #2:"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setNum2(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese el valor #3:"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setNum3(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese el valor #4:"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setNum4(e.nativeEvent.text)}
                />

                <View>
                    <TouchableOpacity style={styles.button} onPress={verify}>
                        <Text style={styles.text}>Resolver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 60,
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
    button: {
        backgroundColor: colors.SECONDARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: 200,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});

export default Form;
