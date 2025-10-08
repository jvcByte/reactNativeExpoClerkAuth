import { SignupForm } from '@/components/auth/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-[calc(100vh-4rem)] flex-col items-center justify-start pt-6 pb-10 px-4 md:justify-center md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}
