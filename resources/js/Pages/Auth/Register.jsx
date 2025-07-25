import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

      <form
    onSubmit={submit}
    className="w-full max-w-md mx-auto space-y-5 bg-white p-6 rounded-xl shadow-md"
>
    {/* Full Name */}
    <div>
        <InputLabel htmlFor="name" value="Full Name" className="text-teal-700 font-medium" />
        <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
        />
        <InputError message={errors.name} className="mt-2" />
    </div>

    {/* Email */}
    <div>
        <InputLabel htmlFor="email" value="Email" className="text-teal-700 font-medium" />
        <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
            required
        />
        <InputError message={errors.email} className="mt-2" />
    </div>

    {/* Password */}
    <div>
        <InputLabel htmlFor="password" value="Password" className="text-teal-700 font-medium" />
        <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2"
            autoComplete="new-password"
            onChange={(e) => setData('password', e.target.value)}
            required
        />
        <InputError message={errors.password} className="mt-2" />
    </div>

    {/* Confirm Password */}
    <div>
        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-teal-700 font-medium" />
        <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
        />
        <InputError message={errors.password_confirmation} className="mt-2" />
    </div>

    {/* Already Registered */}
    <div className="flex justify-between items-center mt-2">
        <Link
            href={route('login')}
            className="text-sm text-teal-600 hover:text-teal-800 font-medium"
        >
            Already registered?
        </Link>
    </div>

    {/* Submit Button */}
    <div>
        <PrimaryButton
            className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg shadow-md transition-colors duration-150"
            disabled={processing}
        >
            Register
        </PrimaryButton>
    </div>
</form>


        </GuestLayout>
    );
}
