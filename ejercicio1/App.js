/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {SafeAreaView, StyleSheet, Text, StatusBar, Image } from 'react-native';
 import colors from './src/utils/colors';
 import Form from './src/components/Form';
 import Result from './src/components/Result';
 import Footer from './src/components/Footer';
 
 const styles = StyleSheet.create({
   Header: {
     backgroundColor: colors.PRIMARY_COLOR,
     height: 385,
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
   },
   image: {
     marginTop: 10,
     width: 200,
     height: 125,
     alignItems: 'center',
   }
 });
 
 const App = () => {
   const [a, setA] = useState(0);
   const [b, setB] = useState(0);
   const [c, setC] = useState(0);
   const [solution, setSolution] = useState(null);
   const [errorMessage, setErrorMessage] = useState('');
 
   const solve = () => {
     reset();
     if (!a) {
       setErrorMessage('Escribe el valor de la letra A');
     } else if (!b) {
      setErrorMessage('Escribe el valor de la letra B');
     } else if (!c) {
      setErrorMessage('Escribe el valor de la letra C');
     } else {
       let x1 = ((-b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
       let x2 = ((-b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

       if(isNaN(x1)){
         x1 = 'No se encontro solución';
       }

       if(isNaN(x2)){
        x2 = 'No se encontro solución';
      }

       setSolution({
         x1: x1,
         x2: x2
       });
     }
   };
 
   const reset = () => {
     setErrorMessage('');
     setSolution(null);
   };
 
   return (
     <>
       <StatusBar barStyle="light-content" />
       <SafeAreaView style={styles.Header}>
         <Text style={styles.HeadApp}>Ecuación cuadrática</Text>
         <Image style={styles.image} source={require('./src/imgs/ecuacion.jpg')} />
         <Form setA={setA} setB={setB} setC={setC} />
       </SafeAreaView>

        <Result
          solution={solution}
          errorMessage={errorMessage}
        />
        <Footer solve={solve} />
     </>
   );
 };
 
 export default App;