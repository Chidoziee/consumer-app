import styled from "styled-components/native";
import { View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text } from "../../../../components/typography/text.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontWeights } from "../../../../infrastructure/theme/fonts";
import ButtonContainer from "../../../../components/button/button.component";
import { Container as PageContainer } from "../../../../components/container/container.component";


export const Container = styled(PageContainer)`
flex:0.9;
`;

export const ImageIcon = styled.Image`
  width: 100%;
  height: 240;
`;

export const Title = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  text-align: center;
`;
export const SubText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  text-align: center;
`;

export const ButtonSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonComponent = styled(ButtonContainer)`
  background-color: ${colors.primary};
  display: flex;
`;

export const Icon = styled(AntDesign)`
  color: ${colors.white};
`;
export const SkipLabel = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  text-align: center;
`;

export const NextIcon = styled(AntDesign)`
  color: ${colors.primary};
`;