import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  ${css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  `}
`;

export const ContentTitle = styled.View`
  align-items: flex-end;
`;

export const Title = styled.Text`
  ${css`
    color: #0277bd;
    font-size: 50px;
    font-weight: bold;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
`;

export const Content = styled.View`
  ${css`
    width: 100%;
    padding: 16px;
    margin-top: 50px;
    justify-content: center;
  `}
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: 60px;
  padding: 8px;
  margin-top: 18px;
  font-weight: bold;
  border-width: 1px;
  border-radius: 8px;
  border-color: #bdbdbd;
`;

export const Button = styled.TouchableOpacity`
  ${css`
    height: 50px;
    margin-top: 40px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: #0277bd;
  `}
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const ForgotPassword = styled.Text`
  color: #bdbdbd;
  margin-top: 12px;
  text-align: right;
`;
