import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import authenthicate from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { useNavigation } from '@react-navigation/native';

function SignupScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  async function signUpHandler({email, password}){
    setIsLoading(true)
    await authenthicate('signUp', email, password)
    setIsLoading(false)
    navigation.replace('Login')
  }

  if(isLoading){
    return <LoadingOverlay message='Creating User...' />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
