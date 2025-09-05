"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [openModules, setOpenModules] = useState({
        dashboard: false,
        info: false,
        management: false,
        itInfo: false,
        details: false,
        settings: false
    });

    const pathname = usePathname();

    const toggleModule = (moduleName) => {
        setOpenModules(prev => {
            const newState = { ...prev };
            
            // Close all other modules
            Object.keys(newState).forEach(key => {
                if (key !== moduleName) {
                    newState[key] = false;
                }
            });
            
            // Toggle the clicked module
            newState[moduleName] = !prev[moduleName];
            
            return newState;
        });
    };

    // Check if a link is active
    const isLinkActive = (href) => {
        return pathname === href;
    };

    return (
        <div className="Navbar_Parent bg-white p-6 w-64 border-r h-screen flex flex-col font-sans fixed left-0 top-0 overflow-y-auto z-50">
            <div className="flex-grow">
                <div className="NavWithLogo flex items-center gap-2 mb-8">
                    <Image
                        src="/Fav.png"
                        alt="InfoLogo"
                        width={30}
                        height={20}
                        className="rounded-full shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">InfoSphere</h1>
                </div>

                <div className="space-y-2 mt-12">
                    
                    <div className="NavWithDashboardItems">
                        <button
                            onClick={() => toggleModule('dashboard')}
                            className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                        >
                            <i className="ri-dashboard-fill text-lg"></i>
                            <span className="text-lg font-medium">Dashboard</span>
                            <i
                                className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.dashboard ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                            ></i>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.dashboard ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                            <Link
                                href="/Analytics"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/Analytics') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-line-chart-fill text-sm"></i>
                                <span>Analytics</span>
                            </Link>
                            <Link
                                href="/reports"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/reports') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-file-text-fill text-sm"></i>
                                <span>Reports</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Info Module */}
                    <div className="NavWithInfoModule">
                        <button
                            onClick={() => toggleModule('info')}
                            className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                        >
                            <i className="ri-information-fill text-lg"></i>
                            <span className="text-lg font-medium">Info Module</span>
                            <i
                                className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.info ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                            ></i>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.info ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                            <Link
                                href="/DeveloperName"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/DeveloperName') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-user-3-fill text-sm"></i>
                                <span>Developer Name</span>
                            </Link>
                            <Link
                                href="/StackPage"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/StackPage') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-code-box-fill text-sm"></i>
                                <span>Stacks</span>
                            </Link>
                            <Link
                                href="/CertificatePage"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/CertificatePage') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-medal-fill text-sm"></i>
                                <span>Certificates</span>
                            </Link>
                        </div>
                    </div>

                    {/* Management Module */}
                    <div className="NavWithManagementModule">
                        <button
                            onClick={() => toggleModule('management')}
                            className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                        >
                            <i className="ri-briefcase-fill text-lg"></i>
                            <span className="text-lg font-medium">Management</span>
                            <i
                                className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.management ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                            ></i>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.management ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                            <Link
                                href="/countries"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/countries') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-earth-fill text-sm"></i>
                                <span>Countries</span>
                            </Link>
                            <Link
                                href="/expenses"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/expenses') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-money-dollar-circle-fill text-sm"></i>
                                <span>Expenses</span>
                            </Link>
                            <Link
                                href="/todos"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/todos') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-checkbox-circle-fill text-sm"></i>
                                <span>Todos</span>
                            </Link>
                            <Link
                                href="/notes"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/notes') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-sticky-note-fill text-sm"></i>
                                <span>Notes</span>
                            </Link>
                        </div>
                    </div>

                    {/* IT Info Module */}
                    <div className="NavWithITInfoModule">
                        <button
                            onClick={() => toggleModule('itInfo')}
                            className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                        >
                            <i className="ri-computer-fill text-lg"></i>
                            <span className="text-lg font-medium">IT Info</span>
                            <i
                                className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.itInfo ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                            ></i>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.itInfo ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                            <Link
                                href="/gfx-design"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/gfx-design') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-palette-fill text-sm"></i>
                                <span>GFX Design</span>
                            </Link>
                            <Link
                                href="/app-design"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/app-design') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-smartphone-fill text-sm"></i>
                                <span>App Design</span>
                            </Link>
                            <Link
                                href="/web-design"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/web-design') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-window-fill text-sm"></i>
                                <span>Web Design</span>
                            </Link>
                        </div>
                    </div>

                    {/* Details Module */}
                    <div className="NavWithDetailsModule">
                        <button
                            onClick={() => toggleModule('details')}
                            className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                        >
                            <i className="ri-file-list-3-fill text-lg"></i>
                            <span className="text-lg font-medium">Details</span>
                            <i
                                className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.details ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                            ></i>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.details ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                            <Link
                                href="/weather"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/weather') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-sun-fill text-sm"></i>
                                <span>Weather</span>
                            </Link>
                            <Link
                                href="/calendar"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/calendar') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-calendar-event-fill text-sm"></i>
                                <span>Calendar</span>
                            </Link>
                            <Link
                                href="/locations"
                                className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/locations') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <i className="ri-map-pin-fill text-sm"></i>
                                <span>Locations</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Module */}
            <div className="NavWithSettingsModule mt-auto pt-4 border-t">
                <button
                    onClick={() => toggleModule('settings')}
                    className="flex items-center gap-2 text-gray-800 hover:text-blue-600 w-full py-2 transition-colors"
                >
                    <i className="ri-settings-4-fill text-lg"></i>
                    <span className="text-lg font-medium">Settings</span>
                    <i
                        className={`text-lg transform transition-transform duration-300 ml-auto ${openModules.settings ? "ri-arrow-down-s-line rotate-180" : "ri-arrow-right-s-line"}`}
                    ></i>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openModules.settings ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                    <Link
                        href="/account"
                        className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/account') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                        <i className="ri-user-settings-fill text-sm"></i>
                        <span>Account</span>
                    </Link>
                    <Link
                        href="/preferences"
                        className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/preferences') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                        <i className="ri-settings-3-fill text-sm"></i>
                        <span>Preferences</span>
                    </Link>
                    <Link
                        href="/help"
                        className={`flex items-center gap-2 py-2 pl-6 rounded-lg transition-colors ${isLinkActive('/help') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                        <i className="ri-customer-service-2-fill text-sm"></i>
                        <span>Help</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;