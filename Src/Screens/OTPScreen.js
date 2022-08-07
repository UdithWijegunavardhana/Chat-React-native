import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import OTPTextView from 'react-native-otp-textinput';

export default function OTPScreen({route, navigation}) {
  const [otpInput, setOtpInput] = useState('');
  const [err, setErr] = useState('');
  const [isOtpSent, setIsOtpSent] = useState();

  const {phoneNumber} = route.params;
  // const { signIn } = React.useContext(AuthContext)

  function onLoginPressed() {
    // signIn({ phoneNumber, otpInput })
  }

  function resentOtp() {}

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.instructions}>Verify Your Phone</Text>
        <Text style={styles.textInputContainer}>
          Please enter the 4 digit code sent to
        </Text>
        <Text style={{fontSize: 15}}>{phoneNumber}</Text>

        <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => setOtpInput(text)}
          inputCount={4}
          keyboardType="default"
        />
        <Text style={styles.errMessage}>{err}</Text>
        {isOtpSent && (
          <Apptext
            style={{
              backgroundColor: 'rgba(18, 62, 166,0.3)',
              padding: 5,
              borderRadius: 3,
            }}>
            {isOtpSent}
          </Apptext>
        )}
        <View style={styles.buttonWrapper}>
          <PaperButton
            style={styles.buttonStyle}
            mode="text"
            uppercase={false}
            onPress={resentOtp}>
            Resend OTP
          </PaperButton>
        </View>
        <TouchableOpacity>
          <PaperButton
            mode="contained"
            // onPress={onLoginPressed}
            onPress={() => navigation.navigate('Messages', {phoneNumber})}
            uppercase={true}
            style={styles.verifyButton}
            labelStyle={{color: 'white', marginTop: 13}}>
            Verify
          </PaperButton>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 30,
  },
  instructions: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '48%',
    borderRadius: 15,
  },
  textNearButton: {
    fontSize: 14,
  },
  verifyButton: {
    marginTop: 20,
    width: 280,
    height: 43,
    borderRadius: 15,
  },
  wrongNumButton: {
    width: '80%',
    marginTop: 20,
  },
  // errMessage: {
  //   color: theme.colors.error,
  // },
});
