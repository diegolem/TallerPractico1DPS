/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, Image } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Result from './src/components/Result';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 375,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  HeadApp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
  },
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
});

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [solution, setSolution] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const verify = () => {
    reset();
    if (!num1 || num1 <= 0) {
      setErrorMessage('El valor del número 1 no es válido');
    } else if (!num2 || num2 <= 0) {
      setErrorMessage('El valor del número 2 no es válido');
    } else if (!num3 || num3 <= 0) {
      setErrorMessage('El valor del número 3 no es válido');
    } else if (!num4 || num4 <= 0) {
      setErrorMessage('El valor del número 4 no es válido');
    } else {
      let arrayNums = [num1, num2, num3, num4];

      let maxNum = Math.max(...arrayNums);
      let minNum = Math.min(...arrayNums);

      let maxNumModified = (minNum > 10 ? maxNum + 10 : maxNum);
      let minNumModified = (maxNum < 50 ? minNum - 5 : minNum);

      if (isNaN(maxNumModified)) {
        maxNumModified = 'El número encontrado como máximo no es válido';
      }

      if (isNaN(minNumModified)) {
        minNumModified = 'El número encontrado como máximo no es válido';
      }

      setSolution({
        maxNum: maxNumModified,
        minNum: minNumModified
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setSolution(null);
  };

  /*
  
       <Footer solve={solve} />
  */

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Ejercicio 3</Text>
        <Form setNum1={setNum1} setNum2={setNum2} setNum3={setNum3} setNum4={setNum4} verify={verify} />
      </SafeAreaView>
      <Result
        solution={solution}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default App;