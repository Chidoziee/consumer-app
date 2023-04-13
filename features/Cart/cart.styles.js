import styled from "styled-components/native";
import {
  Container,
  FlatListContainer,
  ScrollViewContainer,
} from "../../components/container/container.component";
import Arrow from "react-native-vector-icons/Ionicons"
import { colors } from "../../infrastructure/theme/colors";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const Icon = styled(Arrow)`
 color:${colors.primary};
`;
export const ContentContainer = styled(Container)`
  flex:1;
`;
export const FlatList = styled(FlatListContainer)`
  max-height: 55%;
`;
export const CheckoutInfo = styled(Container)`
  height: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
