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
import { useSignUp } from '@clerk/clerk-expo';
import { router } from 'expo-router';

const verifySchema = z.object({
    code: z.string({ message: 'Code is required' }).min(6, 'Minimum of 6 characters'),
});

type VerifyField = z.infer<typeof verifySchema>;

export default function VerifyScreen() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<VerifyField>({
        resolver: zodResolver(verifySchema),
    });

    const { signUp, isLoaded, setActive } = useSignUp();

    console.log('Errors: ', errors)

    const onVerify = async (data: VerifyField) => {
        console.log('Verify: ', data)

        if (!isLoaded) return;

        try {
            const signUpResult = await signUp.attemptVerification({
                strategy: 'email_code',
                code: data.code,
            })
            if (signUpResult.status === 'complete') {
                console.log('Sign up complete')
                setActive({ session: signUpResult.createdSessionId })
                router.push('/')
            } else {
                console.log('Sign up not complete: ', signUpResult)
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Text style={styles.title}>Verify your account</Text>

            <CustomInput
                name='code'
                control={control}
                placeholder='Enter code (Eg. 123456)'
                autoCapitalize='none'
                keyboardType='numeric'
                autoComplete='one-time-code'
            />

            <CustomButton
                text='Verify'
                onPress={handleSubmit(onVerify)}
            />
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
