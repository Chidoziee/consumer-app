import styled from "styled-components";

import {
  Container,
  ScrollViewContainer,

} from "../../components/container/container.component";
import {SafeArea} from "../../components/utility/safe-area.component"
import { theme } from "../../infrastructure/theme";

export const SafeAreaViewContainer = styled(SafeArea)`
  /* flex: 1; */
  background-color: ${theme.colors.bg.lightOrange};
`;
export const HomeContainer = styled(ScrollViewContainer)`


`;
