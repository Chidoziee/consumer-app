import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import TextInputContainer from "../../components/textInput/textInput.component";
import Button from "../../components/button/button.component";

import {
  AuthContainer,
  LableCover,
  EachLable,
  ClickableCover,
  FormCover,
  FormContain,
  Clickable,
  SmalllClickable,
  ForgotPassword,
  OrText,
  SociaMediaCover,
} from "./drawernavigator.styles";

function SignIn({ show, onPress, setIsSignIn, isSignIn }) {
  // they toggler
  // const [isSignIn, setIsSignIn] = React.useState(false);
  // the input array
  const [signInInputs, setSignInInputs] = React.useState([
    {
      label: "Email address",
      value: "",
      placeholder: "name@domain.com",
    },
    {
      label: "Password",
      value: "",
      placeholder: "* * * * * * * * *",
    },
  ]);

  // create account inputs
  const [createAccInputs, setCreateAccInputs] = React.useState([
    {
      label: "Full Name",
      value: "",
      placeholder: "John doe",
    },
    {
      label: "Email",
      value: "",
      placeholder: "* * * * * * * * *",
    },
    {
      label: "Password",
      value: "",
      placeholder: "* * * * * * * * *",
    },
  ]);

  // mapping the inputs whether its true or false
  const mappedSignIn = signInInputs.map((v, i) => (
    <View key={v.label}>
      <View style={{ height: 30 }}></View>
      <TextInputContainer placeholder={v.placeholder} label={v.label} />
    </View>
  ));

  // mapping the inputs whether its true or false
  const mappedCreatAcc = createAccInputs.map((v, i) => (
    <View key={v.label}>
      <View style={{ height: 30 }}></View>
      <TextInputContainer placeholder={v.placeholder} label={v.label} />
    </View>
  ));

  return (
    <AuthContainer
      // style={{ display: show ? "flex" : "none" }}
      onPress={onPress}
    >
      <FormCover onPress={e => e.stopPropagation()}>
        <>
        <ClickableCover onPress={onPress}>
          <Clickable></Clickable>
        </ClickableCover>
        <LableCover>
          <TouchableOpacity
            onPress={() => setIsSignIn(false)}
            style={{ alignItems: "center" }}
          >
            <EachLable style={{ color: isSignIn ? "#7f7f7f" : "#f38b1c" }}>
              Create Account
            </EachLable>
            <SmalllClickable
              style={{
                backgroundColor: isSignIn ? "#fff" : "#f38b1c",
                width: 70,
              }}
            ></SmalllClickable>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsSignIn(true)}
            style={{ alignItems: "center" }}
          >
            <EachLable style={{ color: isSignIn ? "#f38b1c" : "#7f7f7f" }}>
              Sign In
            </EachLable>
            <SmalllClickable
              style={{
                backgroundColor: isSignIn ? "#f38b1c" : "#fff",
                width: 30,
              }}
            ></SmalllClickable>
          </TouchableOpacity>
        </LableCover>

        <FormContain>
          {isSignIn ? mappedSignIn : mappedCreatAcc}
          <ForgotPassword>{isSignIn && "Forgot Password?"}</ForgotPassword>
          <Button />
        </FormContain>
        <OrText>Or</OrText>
        <LableCover>
          <SmalllClickable></SmalllClickable>
          <Text style={{ color: "#A2A2A2" }}>
            {isSignIn ? "Sign in" : "Register"} with
          </Text>
          <SmalllClickable></SmalllClickable>
        </LableCover>
        <LableCover
          style={{
            marginTop: 30,
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <SociaMediaCover>
            <Text style={{ color: "#fff", marginRight: 10 }}>Facebook</Text>
            <FontAwesome name="facebook-f" size={20} color="#fff" />
          </SociaMediaCover>
          <SociaMediaCover style={{ backgroundColor: "#F14336" }}>
            <Text style={{ color: "#fff", marginRight: 10 }}>Google</Text>
            <AntDesign name="google" size={20} color="#fff" />
          </SociaMediaCover>
        </LableCover>
        </>
      </FormCover>
    </AuthContainer>
  );
}

export default SignIn;
