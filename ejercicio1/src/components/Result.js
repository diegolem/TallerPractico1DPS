import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
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
});

const Result = props => {
    const { solution, errorMessage } = props;

    return (
        <View style={styles.content}>
            {solution && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Solución</Text>
                    <DataResult title="X1:" value={`${solution.x1}`} />
                    <DataResult title="X2:" value={`${solution.x2}`} />
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
            <Text>{title} {value}</Text>
        </View>
    );
}

export default Result;