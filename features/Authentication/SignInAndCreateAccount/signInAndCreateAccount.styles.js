import styled from "styled-components/native";
import { Container } from "../../../components/container/container.component";
import SocialIcon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { fonts, fontWeights } from "../../../infrastructure/theme/fonts";
import { lineHeights } from "../../../infrastructure/theme/spacing";
import { TouchableWithoutFeedback } from "react-native";

export const PageContainer = styled(Container)`
  flex: 1;
  overflow: hidden;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
`;
export const ContentContainer = styled(Container)`
  height: auto;
  border-radius: 0;
`;

export const Wrapper = styled(Container)``;
export const CustomText = styled(Text)`
  color: ${(props) => (props.color ? props.color : colors.text.strong)};
  font-weight: ${fontWeights.semiBold};
`;
export const HorizontaLineWrapper = styled(TouchableWithoutFeedback)`
  border-radius: 10;
`;
export const HorizontaLine = styled(Container)`
  border-radius: 10;
`;

export const Icon = styled(SocialIcon)`
  color: ${colors.white};
`;
