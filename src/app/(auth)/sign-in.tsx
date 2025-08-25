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
import { useSignIn } from '@clerk/clerk-expo';

const signInSchema = z.object({
    email: z.string({ message: 'Email is required' }).email({ message: 'Invalid email' }),
    password: z.string({ message: 'Password is required' }).min(8, 'Minimum of 8 characters'),
});

type SignInField = z.infer<typeof signInSchema>;

export default function SignInScreen() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInField>({
        resolver: zodResolver(signInSchema),
    });
    const { signIn, isLoaded, setActive } = useSignIn();

    console.log('Errors: ', errors)

    const onSignIn = async(data: SignInField) => {
        console.log('Sign in: ', data)

        if (!isLoaded) return;

        try {
            const signInResult = await signIn.create({
                identifier: data.email,
                password: data.password,
            })

            if (signInResult.status === 'complete') {
                console.log('Sign in complete')
                setActive({session: signInResult.createdSessionId})
            } else {
                console.log('Sign in not complete')
            }
        } catch (error) {
            console.log('Error: ', error)
        }
        
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Text style={styles.title}>Sign in</Text>

            <View style={styles.form} >
                <CustomInput
                    name='email'
                    control={control}
                    placeholder='Email'
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
                text='Sign in'
                onPress={handleSubmit(onSignIn)}
            />

            <AuthNav title={'Don\'t have an account?'} text={'Sign up'} href={'/sign-up'} />
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
    },
});
