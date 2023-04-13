import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  PageContainer,
  PaymentSuccessContainer,
  IconContainer,
  CheckIcon,
  Wrapper,
  TitleText,
  SubText,
  Links
} from "./backEmail.styles";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import ButtonContainer from "../../../components/button/button.component";

const BackEmail = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <PageContainer>
        <PaymentSuccessContainer paddingHorizontal>
          <Spacer size="medium" positiion="top" />
          <IconContainer justifyContent="center" alignItems="center">
            <CheckIcon
              onPress={() => {
                navigation.navigate("NewPassword");
              }}
              name="check"
              size={26}
              color={colors.white}
            />
          </IconContainer>
          <Spacer size="large" positiion="top" />
          <Wrapper>
            <TitleText variant="h5">Submission Successful</TitleText>
          </Wrapper>
          <Wrapper>
            <SubText variant="smallBody">
              Please check your email for create a new password
            </SubText>
          </Wrapper>
          <Spacer size="large" positiion="top" />
          <Spacer size="large" positiion="top" />
          <Wrapper>
            <SubText variant="smallBody">
              Can't get email?{" "}
              <Links
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
                variant="smallBody"
              >
                {" "}
                Resubmit
              </Links>
            </SubText>
          </Wrapper>
        </PaymentSuccessContainer>
      </PageContainer>
    </SafeArea>
  );
};
export default BackEmail;
