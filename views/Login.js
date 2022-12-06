import { KeyboardAvoidingView, TouchableOpacity, Image, TextInput, Plataform, Text, View , Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {css} from '../assets/css/Css';


export default function Login() {
    const[display, setDisplay]=useState('none');
    return (

        <KeyboardAvoidingView style= {[css.container, css.darkbg]}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style = {css.login__logo}>
                <Image source={require('../assets/img/icon.png')} />

            </View>
            <View>
                <Text style ={css.login__msg (display)}> Usuário ou senha inválido! </Text>

            </View>

            <View style = {css.login__form}>
                <TextInput style = {css.login__input} placeholder = 'Usuário' />
                <TextInput style = {css.login__input} placeholder = 'Senha' secureTextEntry={true} />
                
                <TouchableOpacity style = {css.login__button} onPress = {()=> setDisplay('flex')}>
                    <Text style = {css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

            


        </KeyboardAvoidingView>
        
    );
  }
  