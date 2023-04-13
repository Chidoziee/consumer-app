import styled from "styled-components/native";

export const AuthContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #F38B1C99;
  position: absolute;
`;

// height: 75%;
export const FormCover = styled.Pressable`
  align-items: center;
  width: 100%;
  left: 0px
  bottom: -50px;
  padding-bottom: 70px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
`;

export const ClickableCover = styled.TouchableOpacity`
  width: 100%;
  height: 75px;
  justify-content: center;
  align-items: center;
`;

export const Clickable = styled.View`
  width: 70px;
  height: 7px;
  border-radius: 20px;
  background-color: #d2d4d8;
`;

export const SmalllClickable = styled.View`
  width: 70px;
  height: 2px;
  margin-top: 8px;
  border-radius: 20px;
  background-color: #d2d4d8;
`;

export const LableCover = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const EachLable = styled.Text`
  color: #7f7f7f;
  text-align: center;
`;

export const ForgotPassword = styled.Text`
  color: #f38b1c;
  padding-top: 1px;
  margin-bottom: 40px;
  text-align: right;
`;

export const OrText = styled.Text`
  color: #a2a2a2;
  padding-top: 1px;
  margin: 40px 0px 5px 0px;
  text-align: center;
`;

export const FormContain = styled.View`
  width: 90%;
  justify-content: center;
  flex-direction: column;
`;


export const SociaMediaCover = styled.View`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  backgroundColor: #3B5999;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
