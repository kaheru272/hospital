import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function PatientEdit({ patient }) {
    const { data, setData, put, processing, errors, delete: destroy } = useForm({
        name: patient.name || '',
        email: patient.email || '',
        phone: patient.phone || '',
        gender: patient.gender || '',
        date_of_birth: patient.date_of_birth || '',
        address: patient.address || '',
        insurance_provider: patient.insurance_provider || '',
        insurance_policy_number: patient.insurance_policy_number || '',
        emergency_contact_name: patient.emergency_contact_name || '',
        emergency_contact_phone: patient.emergency_contact_phone || '',
        emergency_contact_relationship: patient.emergency_contact_relationship || '',
        national_id: patient.national_id || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.patients.update', patient.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this patient?')) {
            destroy(route('admin.patients.destroy', patient.id));
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Edit Patient</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Email</label>
                        <input type="email" className="border rounded px-3 py-2 w-full" value={data.email} onChange={e => setData('email', e.target.value)} />
                        {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Phone</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                        {errors.phone && <div className="text-red-600 text-sm">{errors.phone}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Gender</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.gender} onChange={e => setData('gender', e.target.value)} />
                        {errors.gender && <div className="text-red-600 text-sm">{errors.gender}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Date of Birth</label>
                        <input type="date" className="border rounded px-3 py-2 w-full" value={data.date_of_birth} onChange={e => setData('date_of_birth', e.target.value)} />
                        {errors.date_of_birth && <div className="text-red-600 text-sm">{errors.date_of_birth}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Address</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.address} onChange={e => setData('address', e.target.value)} />
                        {errors.address && <div className="text-red-600 text-sm">{errors.address}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">National ID</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.national_id} onChange={e => setData('national_id', e.target.value)} />
                        {errors.national_id && <div className="text-red-600 text-sm">{errors.national_id}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Insurance Provider</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.insurance_provider} onChange={e => setData('insurance_provider', e.target.value)} />
                        {errors.insurance_provider && <div className="text-red-600 text-sm">{errors.insurance_provider}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Insurance Policy #</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.insurance_policy_number} onChange={e => setData('insurance_policy_number', e.target.value)} />
                        {errors.insurance_policy_number && <div className="text-red-600 text-sm">{errors.insurance_policy_number}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Emergency Contact Name</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.emergency_contact_name} onChange={e => setData('emergency_contact_name', e.target.value)} />
                        {errors.emergency_contact_name && <div className="text-red-600 text-sm">{errors.emergency_contact_name}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Emergency Contact Phone</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.emergency_contact_phone} onChange={e => setData('emergency_contact_phone', e.target.value)} />
                        {errors.emergency_contact_phone && <div className="text-red-600 text-sm">{errors.emergency_contact_phone}</div>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Emergency Contact Relationship</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" value={data.emergency_contact_relationship} onChange={e => setData('emergency_contact_relationship', e.target.value)} />
                        {errors.emergency_contact_relationship && <div className="text-red-600 text-sm">{errors.emergency_contact_relationship}</div>}
                    </div>
                </div>
                <div className="flex gap-2 mt-6">
                    <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded" disabled={processing}>Save</button>
                    <Link href={route('admin.patients.index')} className="bg-gray-300 text-gray-800 px-6 py-2 rounded">Cancel</Link>
                    <button type="button" className="bg-red-600 text-white px-6 py-2 rounded ml-auto" onClick={handleDelete} disabled={processing}>Delete</button>
                </div>
            </form>
        </div>
    );
}
