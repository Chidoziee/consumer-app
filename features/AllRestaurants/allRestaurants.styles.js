import styled from "styled-components/native";
import { Container } from "../../components/container/container.component";
import { Text } from "../../components/typography/text.component";
import Check from "react-native-vector-icons/FontAwesome";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { theme } from "../../infrastructure/theme";
import { SafeArea } from "../../components/utility/safe-area.component";
// import 

export const AllRestaurantsContainer = styled(SafeArea)`
  flex: 1;
`;

export const BackIcon = styled.Image`
width:30px;
 height:20px

`