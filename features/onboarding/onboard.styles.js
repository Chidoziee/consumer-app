import styled from "styled-components/native";

export const AuthContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #fff9ec;
  position: relative;
  justify-content: center;
  align-items: center;
`;

// ${'' /* margin-top: 20px; */}
export const OnboardHeader = styled.Text`
  font-size: 30px;
  margin-top: 60px;
  font-weight: bold;
`;

export const ImageIcon = styled.Image`
  width: 300px;
  height: 179px;
  resize-mode: contain;
`;
//   margin: 30px 0;

export const OnboardLabel = styled.Text`
  font-size: 14px;
  margin-top: 20px;
  color: #000;
  width: 70%;
  text-align: center;
`;

export const ViewCover = styled.View`
  width: 90%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const BottomSection = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 50px;
  left: 0px;
`;

export const BottomCover = styled.View`
  bottom: 20px;
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
`;

export const EachDot = styled.TouchableOpacity`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: #c8c8c8;
`;

export const EachDotCover = styled.View`
  width: 40px;
  justify-content: space-between;
  height: 8px;
  flex-direction: row;
`;

//

// OnboardHeader
// OnboardLabel
