import { Link, usePage } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    const page = usePage();
    const isRegister = page.url === '/register';
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-white py-8 px-2">
            <div className="mb-6 flex flex-col items-center">
                <Link href="/">
                    {/* Hospital/healthcare SVG icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-600" fill="none" viewBox="0 0 48 48" stroke="currentColor">
                        <rect x="8" y="8" width="32" height="32" rx="8" fill="#fff" stroke="#38b2ac" strokeWidth="2" />
                        <path d="M24 16v16M16 24h16" stroke="#38b2ac" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </Link>
                <span className="mt-2 text-xl font-semibold text-teal-700 tracking-wide">Hospital Management System</span>
            </div>
            <div className={isRegister ? "w-full max-w-4xl md:w-3/4 rounded-2xl bg-white/90 px-8 py-8 shadow-xl ring-1 ring-teal-100" : "w-full max-w-md rounded-2xl bg-white/90 px-8 py-8 shadow-xl ring-1 ring-teal-100"}>
                {children}
            </div>
        </div>
    );
}
