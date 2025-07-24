import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '../Layouts/AdminLayout';

export default function PatientShow({ patient }) {
    const [activeTab, setActiveTab] = useState('appointments');
    const { delete: destroy, processing } = useForm();

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this patient?')) {
            destroy(route('admin.patients.destroy', patient.id));
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-between">
                    Patient Details
                    <div className="flex gap-2">
                        <Link href={route('admin.patients.edit', patient.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
                        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded" disabled={processing}>Delete</button>
                    </div>
                </h1>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><span className="font-semibold">Name:</span> {patient.name}</div>
                        <div><span className="font-semibold">Email:</span> {patient.email}</div>
                        <div><span className="font-semibold">Phone:</span> {patient.phone}</div>
                        <div><span className="font-semibold">Gender:</span> {patient.gender}</div>
                        <div><span className="font-semibold">Date of Birth:</span> {patient.date_of_birth}</div>
                        <div><span className="font-semibold">Address:</span> {patient.address}</div>
                        <div><span className="font-semibold">National ID:</span> {patient.national_id}</div>
                        <div><span className="font-semibold">Insurance Provider:</span> {patient.insurance_provider}</div>
                        <div><span className="font-semibold">Insurance Policy #:</span> {patient.insurance_policy_number}</div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Emergency Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><span className="font-semibold">Name:</span> {patient.emergency_contact_name}</div>
                        <div><span className="font-semibold">Phone:</span> {patient.emergency_contact_phone}</div>
                        <div><span className="font-semibold">Relationship:</span> {patient.emergency_contact_relationship}</div>
                    </div>
                </div>
                {/* Tabs for Appointments, Medical Records, Prescriptions, Billing */}
                <div className="mb-6">
                    <div className="flex border-b mb-4">
                        <button className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none ${activeTab === 'appointments' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500'}`} onClick={() => setActiveTab('appointments')}>Appointments</button>
                        <button className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none ${activeTab === 'medical' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500'}`} onClick={() => setActiveTab('medical')}>Medical Records</button>
                        <button className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none ${activeTab === 'prescriptions' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500'}`} onClick={() => setActiveTab('prescriptions')}>Prescriptions</button>
                        <button className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none ${activeTab === 'billing' ? 'border-teal-600 text-teal-700' : 'border-transparent text-gray-500'}`} onClick={() => setActiveTab('billing')}>Billing</button>
                    </div>
                    <div>
                        {activeTab === 'appointments' && (
                            <div className="p-4 bg-gray-50 rounded">Appointments content goes here.</div>
                        )}
                        {activeTab === 'medical' && (
                            <div className="p-4 bg-gray-50 rounded">Medical records content goes here.</div>
                        )}
                        {activeTab === 'prescriptions' && (
                            <div className="p-4 bg-gray-50 rounded">Prescriptions content goes here.</div>
                        )}
                        {activeTab === 'billing' && (
                            <div className="p-4 bg-gray-50 rounded">Billing content goes here.</div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
