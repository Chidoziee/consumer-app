import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Header } from "../../../components/header/header.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  Spacer,
  GroupedSpacer,
} from "../../../components/spacer/spacer.component";
import ButtonContainer from "../../../components/button/button.component";
import {
  PageContainer,
  ContentContainer,
  Wrapper,
  HorizontaLineWrapper,
  HorizontaLine,
} from "./signInAndCreateAccount.styles";
import TextInputContainer from "../../../components/textInput/textInput.component";
import { fontSizes } from "../../../infrastructure/theme/fonts";
import { TopTab } from "../../../components/topTab/topTab.component";
import SignIn from "./SIgnIn/signIn.screen";
import CreateAccount from "./CreateAccount/createAccount.screens";
import { BottomSheet } from "react-native-elements";

const SignInAndCreateAccount = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpenAuthScreen = () => {
    return setIsVisible(true);
  };
  const handleCloseAuthScreen = () => {
    return setIsVisible(false);
  };
  return (
    <BottomSheet
      isVisible={true}
      containerStyle={{
        backgroundColor: "rgba(0.5, 0.25, 0, 0.2)"
      }}
      // onTouchStart={handleCloseAuthScreen}
    >
      <PageContainer justifyContent="flex-end" background={colors.white}>
        <ContentContainer paddingVertical="20">
          <HorizontaLineWrapper
            onPress={() => {
              navigation.goBack();
            }}
          >
            <HorizontaLine height={6} background="#D2D4D8" width="25%" />
          </HorizontaLineWrapper>
          <Spacer size="large" position="top" />
          <TopTab
            firstBtnText="Create Account"
            secondBtnText="Sign In"
            firstTabScreen={<CreateAccount navigation={navigation} />}
            secondTabScreen={<SignIn navigation={navigation} />}
          />
        </ContentContainer>
      </PageContainer>
    </BottomSheet>
  );
};

export default SignInAndCreateAccount;
