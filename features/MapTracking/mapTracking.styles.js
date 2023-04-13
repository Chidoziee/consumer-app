import styled from "styled-components/native";
import {
  Container,
  ScrollViewContainer,
} from "../../components/container/container.component";
import Arrow from "react-native-vector-icons/Ionicons";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const ArrowIcon = styled(Arrow)`
  color: ${colors.primary};
`;
export const ContentContainer = styled(Container)`
  flex: 1;
  width: 100%;
`;

export const MapInfoContainer = styled(Container)`
  background: ${colors.white};
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: auto;
  border-top-left-radius: 20;
  border-top-right-radius: 20;
`;

export const HeaderWrapper = styled(Container)``;

export const LeftSection = styled(Container)`
  padding-right: 3%;
`;
export const RightSection = styled(Container)`
  padding-right: 3%;
`;
export const BigText = styled(Text)`
  color: ${colors.iconColor};
  font-weight: ${fontWeights.semiBold};
`;

export const SubText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
`;
