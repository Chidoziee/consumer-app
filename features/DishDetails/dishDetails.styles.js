import styled from "styled-components/native";
import {
  Container,
  FlatListContainer,
  ScrollViewContainer,
} from "../../components/container/container.component";
import Arrow from "react-native-vector-icons/Ionicons";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";
import IconForNaira from "react-native-vector-icons/MaterialCommunityIcons";
import StarIcon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const ArrowIcon = styled(Arrow)`
  color: ${colors.primary};
`;
export const ContentContainer = styled(ScrollViewContainer)`
  flex: 1;
`;
export const FlatList = styled(FlatListContainer)`
  max-height: 55%;
`;
export const CheckoutInfo = styled(Container)`
  height: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const HeroSection = styled(Container)`
  background: ${colors.bg.lightOrange};
`;
export const ImageWrapper = styled(Container)``;
export const HeroImage = styled.Image`
  height: 290;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const CounterButtonWrapper = styled(Container)``;
export const ScreenHeaderContainer = styled(Container)``;
export const TitleSection = styled(Container)`
  width: 80%;
`;
export const Title = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
`;
export const SubTitle = styled(Text)`
  color: ${colors.text.soft};
  font-weight: ${fontWeights.semiBold};
`;
export const PriceSection = styled(Container)`
  width: 20%;
`;
export const PriceText = styled(Text)`
  color: ${colors.black.strong};
  line-height: 25;
`;
export const NairaIcon = styled(IconForNaira)`
  color: ${colors.black.strong};
`;

export const RatingStarContainer = styled(Container)``;
export const Wrapper = styled(Container)``;

export const RatingStar = styled(StarIcon)`
  color: ${colors.primary};
  line-height: ${lineHeights.title};
`;

export const DishDescriptionWrapper = styled(Container)``;

export const DishDescriptionText = styled(Text)`
  color: ${colors.text.soft};
  font-weight: ${fontWeights.regular};
`;
