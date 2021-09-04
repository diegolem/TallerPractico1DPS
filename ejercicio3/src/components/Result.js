import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
        marginTop: 25
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20, 
    },
    text: {
        fontSize: 15
    }
});

const Result = props => {
    const { solution, errorMessage } = props;

    return (
        <View style={styles.content}>
            {solution && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Solución</Text>
                    <DataResult title="Número mayor :" value={`${solution.maxNum}`} />
                    <DataResult title="Número menor :" value={`${solution.minNum}`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

const DataResult = (props) => {
    const { title, value } = props;

    return (
        <View>
            <Text style={styles.text}>{title} {value}</Text>
        </View>
    );
}

export default Result;