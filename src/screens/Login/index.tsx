import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as S from './styles';

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email == 'marc01@gmail.com' && password == '123456') {
      Alert.alert('Seja bem vindo', 'Login e senha corretos')
    } else {
      Alert.alert('Ops', 'Login e senha incorrentos')
    }
    setEmail('')
    setPassword('')

  }

  return (
    <S.Container>
      <S.ContentTitle>
        <S.Title>Meu app</S.Title>
        <S.SubTitle>React Native</S.SubTitle>
      </S.ContentTitle>

      <S.Content>
        <S.InputText
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <S.InputText
          placeholder='Senha'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <S.Button activeOpacity={0.7} onPress={handleLogin} >
          <S.TextButton>Entrar</S.TextButton>
        </S.Button>
        <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
      </S.Content>

    </S.Container>
  );
}