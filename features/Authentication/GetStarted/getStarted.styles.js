import styled from "styled-components/native";
import {
  Container
} from "../../../components/container/container.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { fonts, fontWeights } from "../../../infrastructure/theme/fonts";
import { lineHeights } from "../../../infrastructure/theme/spacing";

export const PageContainer = styled(Container)`
  flex: 1;
`;
export const ContentContainer = styled(Container)`
  flex: 1;
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

export const TermsAgreementText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  text-align: center;
`;
export const Links = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.regular};
`;
