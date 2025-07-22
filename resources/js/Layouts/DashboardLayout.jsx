import { Link, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function DashboardLayout({ navItems, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen((open) => !open);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Top navigation bar */}
            <header className="w-full flex items-center justify-between bg-white border-b border-teal-100 px-8 py-4 shadow relative z-20">
                <div className="flex items-center">
                    {/* Sidebar toggle button (mobile) */}
                    <button
                        className="lg:hidden mr-4 focus:outline-none"
                        onClick={handleSidebarToggle}
                        aria-label="Toggle sidebar"
                    >
                        <svg className="h-6 w-6 text-teal-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 48 48" stroke="currentColor">
                        <rect x="8" y="8" width="32" height="32" rx="8" fill="#fff" stroke="#38b2ac" strokeWidth="2" />
                        <path d="M24 16v16M16 24h16" stroke="#38b2ac" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="ml-3 text-lg font-bold text-teal-700">HMS</span>
                </div>
                <div className="flex items-center space-x-6">
                    {/* Notification bell */}
                    <button className="relative focus:outline-none" title="Notifications">
                        <svg className="h-6 w-6 text-gray-500 hover:text-teal-600 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    {/* User info and dropdown logout */}
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-teal-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 border border-teal-100">
                                {user.name} <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3" /></svg>
                            </Menu.Button>
                        </div>
                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href={route('profile.edit')}
                                                className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Profile
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                                            >
                                                Log Out
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </header>
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-teal-100 flex flex-col py-8 px-4 shadow-lg transform transition-transform duration-200 ease-in-out
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                        lg:static lg:translate-x-0 lg:w-64`}
                    style={{ minHeight: '100vh' }}
                >
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-700 font-medium transition"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        {item.icon && <span className="mr-3">{item.icon}</span>}
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                {/* Overlay for sidebar on mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-0 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                    />
                )}
                {/* Main content */}
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
} 