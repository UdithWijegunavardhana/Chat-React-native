import React, {useState, useRef} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Button} from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState({value: '', error: ''});
  const phoneInput = useRef();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const onLoginPressed = () => {
    const phoneNumberError = phoneNumberValidator(phoneNumber.value);

    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    navigation.navigate('OTP', {phoneNumber: value});

    if (phoneNumberError) {
      setPhoneNumber({...phoneNumber, error: phoneNumberError});
      return;
    }
    try {
      console.log('Phone Number: ' + phoneNumber.value);
    } catch (err) {
      console.log('Error in Storing Phone Number:' + err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>SkyMassage</Text>
      <Image source={require('../Assets/chat06.png')} style={styles.image} />
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="LK"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus={false}
        containerStyle={styles.phoneInput}
        textContainerStyle={styles.phoneInputText}
      />
      {valid ? <Text style={styles.error}>{phoneNumber.error}</Text> : null}
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
          navigation.navigate('OTP', {phoneNumber: value});
        }}>
        Get OTP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '150%',
    height: 465,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tittle: {
    fontSize: 34,
  },
  button: {
    marginTop: 25,
    width: '80%',
    borderRadius: 15,
  },
  phoneInput: {
    width: '80%',
    height: 80,
    borderRadius: 15,
  },
  phoneInputText: {
    fontSize: 15,
    color: '#000',
  },
  buttontext: {
    fontSize: 15,
    marginTop: 10,
  },
});
