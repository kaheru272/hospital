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
        phone: '',
        date_of_birth: '',
        gender: '',
        address: '',
        emergency_contact_name: '',
        emergency_contact_phone: '',
        emergency_contact_relationship: '',
        insurance_provider: '',
        insurance_policy_number: '',
        medical_history: '',
        national_id: '',
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

            <form onSubmit={submit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Full Name */}
                    <div>
                        <InputLabel htmlFor="name" value="Full Name" className="text-teal-700 font-medium" />
                        <TextInput id="name" name="name" value={data.name} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="name" isFocused={true} onChange={e => setData('name', e.target.value)} required />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    {/* Email */}
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="text-teal-700 font-medium" />
                        <TextInput id="email" type="email" name="email" value={data.email} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="username" onChange={e => setData('email', e.target.value)} required />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    {/* Phone */}
                    <div>
                        <InputLabel htmlFor="phone" value="Phone Number" className="text-teal-700 font-medium" />
                        <TextInput id="phone" name="phone" value={data.phone} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="tel" onChange={e => setData('phone', e.target.value)} required />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    {/* Date of Birth */}
                    <div>
                        <InputLabel htmlFor="date_of_birth" value="Date of Birth" className="text-teal-700 font-medium" />
                        <TextInput id="date_of_birth" type="date" name="date_of_birth" value={data.date_of_birth} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('date_of_birth', e.target.value)} required />
                        <InputError message={errors.date_of_birth} className="mt-2" />
                    </div>
                    {/* Gender */}
                    <div>
                        <InputLabel htmlFor="gender" value="Gender" className="text-teal-700 font-medium" />
                        <select id="gender" name="gender" value={data.gender} onChange={e => setData('gender', e.target.value)} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <InputError message={errors.gender} className="mt-2" />
                    </div>
                    {/* Address */}
                    <div>
                        <InputLabel htmlFor="address" value="Address" className="text-teal-700 font-medium" />
                        <TextInput id="address" name="address" value={data.address} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="street-address" onChange={e => setData('address', e.target.value)} required />
                        <InputError message={errors.address} className="mt-2" />
                    </div>
                    {/* Emergency Contact Name */}
                    <div>
                        <InputLabel htmlFor="emergency_contact_name" value="Emergency Contact Name" className="text-teal-700 font-medium" />
                        <TextInput id="emergency_contact_name" name="emergency_contact_name" value={data.emergency_contact_name} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('emergency_contact_name', e.target.value)} />
                        <InputError message={errors.emergency_contact_name} className="mt-2" />
                    </div>
                    {/* Emergency Contact Phone */}
                    <div>
                        <InputLabel htmlFor="emergency_contact_phone" value="Emergency Contact Phone" className="text-teal-700 font-medium" />
                        <TextInput id="emergency_contact_phone" name="emergency_contact_phone" value={data.emergency_contact_phone} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('emergency_contact_phone', e.target.value)} />
                        <InputError message={errors.emergency_contact_phone} className="mt-2" />
                    </div>
                    {/* Emergency Contact Relationship */}
                    <div>
                        <InputLabel htmlFor="emergency_contact_relationship" value="Relationship" className="text-teal-700 font-medium" />
                        <TextInput id="emergency_contact_relationship" name="emergency_contact_relationship" value={data.emergency_contact_relationship} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('emergency_contact_relationship', e.target.value)} />
                        <InputError message={errors.emergency_contact_relationship} className="mt-2" />
                    </div>
                    {/* Insurance Provider */}
                    <div>
                        <InputLabel htmlFor="insurance_provider" value="Insurance Provider" className="text-teal-700 font-medium" />
                        <TextInput id="insurance_provider" name="insurance_provider" value={data.insurance_provider} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('insurance_provider', e.target.value)} />
                        <InputError message={errors.insurance_provider} className="mt-2" />
                    </div>
                    {/* Insurance Policy Number */}
                    <div>
                        <InputLabel htmlFor="insurance_policy_number" value="Policy Number" className="text-teal-700 font-medium" />
                        <TextInput id="insurance_policy_number" name="insurance_policy_number" value={data.insurance_policy_number} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('insurance_policy_number', e.target.value)} />
                        <InputError message={errors.insurance_policy_number} className="mt-2" />
                    </div>
                    {/* National ID */}
                    <div>
                        <InputLabel htmlFor="national_id" value="National ID" className="text-teal-700 font-medium" />
                        <TextInput id="national_id" name="national_id" value={data.national_id} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" onChange={e => setData('national_id', e.target.value)} />
                        <InputError message={errors.national_id} className="mt-2" />
                    </div>
                </div>
                {/* Passwords side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <InputLabel htmlFor="password" value="Password" className="text-teal-700 font-medium" />
                        <TextInput id="password" type="password" name="password" value={data.password} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="new-password" onChange={e => setData('password', e.target.value)} required />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-teal-700 font-medium" />
                        <TextInput id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" autoComplete="new-password" onChange={e => setData('password_confirmation', e.target.value)} required />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>
                {/* Medical History (full width) */}
                <div>
                    <InputLabel htmlFor="medical_history" value="Medical History" className="text-teal-700 font-medium" />
                    <textarea id="medical_history" name="medical_history" value={data.medical_history} onChange={e => setData('medical_history', e.target.value)} className="mt-1 block w-full rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-teal-200/50 bg-teal-50/30 py-1 px-2 text-sm" rows={3} />
                    <InputError message={errors.medical_history} className="mt-2" />
                </div>
                <div className="flex items-center justify-between">
                    <Link href={route('login')} className="text-sm text-teal-600 hover:text-teal-800 font-medium">Already registered?</Link>
                </div>
                <div>
                    <PrimaryButton className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg shadow-md transition-colors duration-150" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
