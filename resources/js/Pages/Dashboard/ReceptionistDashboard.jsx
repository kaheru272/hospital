import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

const navItems = [
    {
        label: 'Dashboard',
        href: '/receptionist-dashboard',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
        ),
    },
    {
        label: 'Appointments',
        href: '/receptionist/appointments',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        ),
    },
    {
        label: 'Admissions',
        href: '/receptionist/admissions',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" /></svg>
        ),
    },
    {
        label: 'Patients',
        href: '/receptionist/patients',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 010 7.75" /></svg>
        ),
    },
];

export default function ReceptionistDashboard() {
    const user = usePage().props.auth.user;
    return (
        <DashboardLayout navItems={navItems}>
            <Head title="Receptionist Dashboard" />
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-teal-700 mb-2">Welcome, {user.name}!</h2>
                <p className="text-gray-700">This is your receptionist dashboard. Here you can manage appointments, admissions, and assist patients.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-teal-50 p-6 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-teal-800 mb-2">Appointments</h4>
                    <p className="text-gray-600">Book, reschedule, or cancel appointments.</p>
                </div>
                <div className="rounded-xl bg-teal-50 p-6 shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-teal-800 mb-2">Admissions</h4>
                    <p className="text-gray-600">Track patient admissions and discharges.</p>
                </div>
            </div>
        </DashboardLayout>
    );
} 