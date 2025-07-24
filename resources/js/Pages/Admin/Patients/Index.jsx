import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

const navItems = [
    { label: 'Dashboard', href: '/admin-dashboard', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
    ) },
    { label: 'Patients', href: '/admin/patients', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ) },
    { label: 'Appointments', href: '/admin/appointments', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ) },
    { label: 'Ward Management', href: '/admin/beds-wards', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10M4 17h16" /></svg>
    ) },
    { label: 'Staff Management', href: '/admin/staff', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 010 7.75" /></svg>
    ) },
    { label: 'Medical Records', href: '/admin/medical-records', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ) },
    { label: 'Laboratory', href: '/admin/laboratory', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18V5a2 2 0 012-2h8a2 2 0 012 2v13M6 18a2 2 0 002 2h8a2 2 0 002-2M6 18h12" /></svg>
    ) },
    { label: 'Billing & Invoicing', href: '/admin/billing', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
    ) },
    { label: 'Inventory', href: '/admin/inventory', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>
    ) },
    { label: 'Reports', href: '/admin/reports', icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
    ) },
];

export default function PatientsIndex({ patients, filters }) {
    const { data, setData, get, delete: destroy, processing } = useForm({ search: filters.search || '' });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('admin.patients.index'), { preserveState: true });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this patient?')) {
            destroy(route('admin.patients.destroy', id));
        }
    };

    // Calculate the starting index for the current page
    const startIndex = patients.from ? patients.from - 1 : 0;

    return (
        <DashboardLayout navItems={navItems}>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow">
                <h1 className="text-xl sm:text-2xl font-bold mb-4 text-teal-800">Patients</h1>
                <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                    <input
                        type="text"
                        name="search"
                        value={data.search}
                        onChange={e => setData('search', e.target.value)}
                        placeholder="Search by name, email, phone, or ID..."
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-200 w-full max-w-xs"
                    />
                    <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition">Search</button>
                </form>
                <div className="overflow-x-auto rounded-lg border border-gray-100">
                    <table className="min-w-full bg-white text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                                <th className="px-3 py-2 border-b">#</th>
                                <th className="px-3 py-2 border-b">Name</th>
                                <th className="px-3 py-2 border-b">Email</th>
                                <th className="px-3 py-2 border-b">Phone</th>
                                <th className="px-3 py-2 border-b">Gender</th>
                                <th className="px-3 py-2 border-b">DOB</th>
                                <th className="px-3 py-2 border-b">Status</th>
                                <th className="px-3 py-2 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.data.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="text-center py-6 text-gray-400">No patients found.</td>
                                </tr>
                            )}
                            {patients.data.map((patient, idx) => (
                                <tr key={patient.id} className="hover:bg-teal-50/40 transition">
                                    <td className="border-b px-3 py-2 whitespace-nowrap text-center">{startIndex + idx + 1}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap">{patient.name}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap">{patient.email}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap">{patient.phone}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap">{patient.gender}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap">{patient.date_of_birth}</td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap"><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Active</span></td>
                                    <td className="border-b px-3 py-2 whitespace-nowrap flex gap-2">
                                        <Link href={route('admin.patients.show', patient.id)} className="text-blue-600 hover:underline text-xs font-medium">View</Link>
                                        <Link href={route('admin.patients.edit', patient.id)} className="text-yellow-600 hover:underline text-xs font-medium">Edit</Link>
                                        <button type="button" onClick={() => handleDelete(patient.id)} className="text-red-600 hover:underline text-xs font-medium" disabled={processing}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination controls */}
                <div className="mt-4 flex justify-center gap-2">
                    {patients.links && patients.links.map((link, idx) => (
                        <button
                            key={idx}
                            disabled={!link.url}
                            onClick={() => link.url && get(link.url, { preserveState: true })}
                            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${link.active ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'} ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
