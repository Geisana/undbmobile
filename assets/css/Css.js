import React from 'react';
import { StyleSheet} from 'react-native';


const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        
      },
    darkbg: {
        backgroundColor: '#c8a2c8'

    },

    login__msg: (text='none') => ({
        fontWeight: "bold", 
        fontSize: 22, 
        color:"red",
        marginTop: 5, 
        marginBottom: 15,
        display: text


    }),

    login__form: {
        width: "80%"
    },
    login__logo: {
        marginBottom: 10

    },

    login__input: {
        backgroundColor: '#fff', 
        fontSize:19, 
        padding: 7, 
        marginBottom:15, 
        borderRadius: 20
    },
    
    login__button: {
        padding: 12, 
        backgroundColor: '#fff', 
        alignSelf: "center", 
        borderRadius: 10
    },
    
    button__home: {
        marginRight: 20,
        height: 0.001, 
        alignItems: 'center',

    }, 
    textPage: {
        backgroundColor: 'orange',
        padding:20
    }, 
    login__buttonText: {
        fontWeight: "bold", 
        fontSize: 22, 
        color: "#333"

    }
  }); export {css};
  