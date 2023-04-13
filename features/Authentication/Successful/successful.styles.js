import styled from "styled-components/native";
import { Container } from "../../../components/container/container.component";
import { Text } from "../../../components/typography/text.component";
import Check from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../infrastructure/theme/colors";
import { fontWeights } from "../../../infrastructure/theme/fonts";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const PaymentSuccessContainer = styled(Container)`
  margin-top: 50%;
  flex:1;
`;

export const IconContainer = styled(Container)`
  width: auto;
  width: 82px;
  height: 82px;
  border-radius: 82px;
  background: ${colors.primary};
`;
export const CheckIcon = styled(Check)``;
export const Wrapper = styled(Container)``;
export const TitleText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;
export const SubText = styled(Text)`
  color: ${colors.iconColor};
  font-weight: ${fontWeights.regular};
`;
export const Links = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.regular};
`;
