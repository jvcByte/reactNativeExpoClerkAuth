import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
    View,
} from 'react-native';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v3';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthNav from '@/components/AuthNav';

const signUpSchema = z.object({
    email: z.string({ message: 'Email is required' }).email({ message: 'Invalid email' }),
    password: z.string({ message: 'Password is required' }).min(8, 'Minimum of 8 characters'),
});

type SignUpField = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpField>({
        resolver: zodResolver(signUpSchema),
    });

    console.log('Errors: ', errors)

    const onSignUp = (data: SignUpField) => {
        console.log('Sign up: ', data)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Text style={styles.title}>Create an account</Text>

            <View style={styles.form} >
                <CustomInput
                    name='email'
                    control={control}
                    placeholder='Email'
                    autoFocus
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoComplete='email'
                />
                <CustomInput
                    name='password'
                    control={control}
                    placeholder='Password'
                    secureTextEntry
                />
            </View>

            <CustomButton
                text='Sign up'
                onPress={handleSubmit(onSignUp)}
            />

            <AuthNav title={'Already have an account?'} text={'Sign in'} href={'/sign-in'} />
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

    form: {
        gap: 4,
    }
});
