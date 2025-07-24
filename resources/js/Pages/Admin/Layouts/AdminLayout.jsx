import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { url } = usePage();
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow flex flex-col">
                <div className="h-16 flex items-center justify-center font-bold text-xl border-b">Admin Panel</div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href={route('admin.dashboard')} className="block px-4 py-2 rounded hover:bg-gray-200">Dashboard</Link>
                    <Link href={route('admin.patients.index')} className="block px-4 py-2 rounded hover:bg-gray-200">Patients</Link>
                    {/* Add more admin links here */}
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
