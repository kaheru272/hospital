import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

const navItems = [
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

export default function AdminDashboard() {
    const user = usePage().props.auth.user;
    return (
        <DashboardLayout navItems={navItems}>
            <Head title="Admin Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Example module cards */}
                <div className="rounded-xl bg-teal-50 p-6 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-teal-800 mb-2">User Management</h4>
                    <p className="text-gray-600">Add, edit, or remove users and assign roles.</p>
                </div>
                <div className="rounded-xl bg-teal-50 p-6 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-teal-800 mb-2">Appointments</h4>
                    <p className="text-gray-600">View and manage all hospital appointments.</p>
                </div>
                <div className="rounded-xl bg-teal-50 p-6 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-teal-800 mb-2">Billing</h4>
                    <p className="text-gray-600">Monitor and process hospital billing and invoices.</p>
                </div>
            </div>
        </DashboardLayout>
    );
} 