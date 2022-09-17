import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import authenthicate from '../utils/auth';

function LoginScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  async function signInHandler({email, password}){
    setIsLoading(true)
    try {
      await authenthicate('signInWithPassword', email, password)
      navigation.replace('Welcome')
    } catch (error) {
      Alert.alert('Auth Failed','Check ur credentials')
    }
    setIsLoading(false)
  }

  if(isLoading){
    return <LoadingOverlay message='Logging In...' />
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
