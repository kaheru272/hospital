import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-white py-8 px-4">
            <div className="mb-6 flex flex-col items-center">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-600" fill="none" viewBox="0 0 48 48" stroke="currentColor">
                        <rect x="8" y="8" width="32" height="32" rx="8" fill="#fff" stroke="#38b2ac" strokeWidth="2" />
                        <path d="M24 16v16M16 24h16" stroke="#38b2ac" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </Link>
                <span className="mt-2 text-xl font-semibold text-teal-700 tracking-wide">Hospital Management System</span>
            </div>

            {/* Form container with max-width and no background */}
            <div className="w-full max-w-md px-4">
                {children}
            </div>
        </div>
    );
}
