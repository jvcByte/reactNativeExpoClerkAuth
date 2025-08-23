import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './src/components/ui/CustomInput';
import CustomButton from './src/components/ui/CustomButton';
import { useForm } from 'react-hook-form';

export default function App() {

  const { control, handleSubmit, formState: { errors } } = useForm();

  console.log('Errors: ', errors)

  const onSignin = (data: any) => {
    console.log('Sign in: ', data)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <Text style={styles.title}>Sign in</Text>
      
      <CustomInput
        isRequired="Email is required"
        name='email'
        control={control}
        placeholder='Email'
        autoFocus
        autoCapitalize='none'
        keyboardType='email-address'
        autoComplete='email'
      />
      <CustomInput
        isRequired="Password is required"
        name='password'
        control={control}
        placeholder='Password'
        secureTextEntry
      />

      <CustomButton
        text='Sign in'
        onPress={handleSubmit(onSignin)}
      />

      <StatusBar style='auto' />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
