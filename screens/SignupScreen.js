import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import authenthicate from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

function SignupScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  async function signUpHandler({email, password}){
    setIsLoading(true)
    try {
      await authenthicate('signUp', email, password)
      navigation.replace('Login')
    } catch (error) {
      Alert.alert("Register Failed","Check ur credetials")
    }
    setIsLoading(false)
  }

  if(isLoading){
    return <LoadingOverlay message='Creating User...' />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
