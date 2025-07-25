import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
           

            <form onSubmit={submit} className="w-full max-w-md mx-auto space-y-5 bg-white p-6 rounded-xl shadow-md">
                <div>
                     {status && <div className="mb-4 text-sm text-green-600">{status}</div>}
                    <InputLabel htmlFor="email" value="Email" className="text-teal-700 font-medium" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password" className="text-teal-700 font-medium" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <div>
                    <PrimaryButton className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg shadow-md transition-colors duration-150" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">Don't have an account? </span>
                    <Link
                        href={route('register')}
                        className="text-sm text-teal-600 hover:text-teal-800 font-medium">
                        Register
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
