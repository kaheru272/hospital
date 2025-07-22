import { Head, Link } from '@inertiajs/react';

export default function LandingPage({ auth }) {
    return (
        <>
            <Head title="Hospital Management System" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-white">
                {/* Header/Navigation */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                {/* Hospital symbol from login page */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 48 48" stroke="currentColor">
                                    <rect x="8" y="8" width="32" height="32" rx="8" fill="#fff" stroke="#38b2ac" strokeWidth="2" />
                                    <path d="M24 16v16M16 24h16" stroke="#38b2ac" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                                <span className="text-lg font-semibold text-teal-700 ml-2">Hospital Management System</span>
                            </div>
                            <nav className="flex space-x-4">
                                {auth?.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-4 py-2 text-xs font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 text-xs font-medium text-teal-600 bg-white border border-teal-600 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 text-xs font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-3/5">
                            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                <span className="block">Modern Healthcare</span>
                                <span className="block text-teal-600">Management Solution</span>
                            </h1>
                            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base md:mt-5 md:text-lg">
                                A comprehensive platform for managing hospital operations, patient records, appointments, and more.
                            </p>
                            <div className="mt-8 flex space-x-4">
                                <Link
                                    href={route('login')}
                                    className="px-6 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 md:py-3 md:text-base md:px-8"
                                >
                                    Get Started
                                </Link>
                                <a
                                    href="#features"
                                    className="px-6 py-2 text-sm font-medium text-teal-600 bg-teal-100 rounded-md hover:bg-teal-200 md:py-3 md:text-base md:px-8"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-2/5">
                            <img
                                className="w-full h-64 object-cover rounded-lg shadow-xl"
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Doctor attending to patient"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-xs font-semibold text-teal-600 tracking-wide uppercase">Features</h2>
                            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to manage your hospital</p>
                            <p className="mt-4 max-w-2xl text-sm text-gray-500 mx-auto">
                                Our comprehensive system streamlines all aspects of hospital management.
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {/* Feature 1 */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Patient Management</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Efficiently manage patient records, medical history, and treatment plans in one secure location.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Appointment Scheduling</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Streamline appointment booking, manage doctor schedules, and reduce wait times.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3.75h3.75M9 15h3.75M9 12h3.75M15 12h3.75m-3.75 3h3.75m-3.75 3h3.75M6.75 19.5h3.75a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v7.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Medical Records</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Maintain comprehensive digital medical records with secure access for authorized personnel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Feature 4 - Laboratory Services */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.5 14.5M9.75 3.104c.251.023.501.05.75.082m0 0a24.301 24.301 0 0 0 4.5 0" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Laboratory Services</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Manage lab tests, track samples, and deliver results efficiently to doctors and patients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Feature 6 - Billing & Insurance */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Billing & Insurance</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Streamline billing processes, manage insurance claims, and provide transparent financial services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Feature 7 - Staff Management */}
                                <div className="pt-6">
                                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-base font-medium text-gray-900 tracking-tight">Staff Management</h3>
                                            <p className="mt-5 text-xs text-gray-500">
                                                Organize staff schedules, track performance, and manage credentials for all hospital personnel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="flex justify-center space-x-6 md:order-2">
                                <a href="#" className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                            <div className="mt-8 md:mt-0 md:order-1">
                                <p className="text-center text-xs text-gray-400">
                                    &copy; 2025 Hospital Management System. All rights reserved by Nextechera Solutions Limited.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );}
