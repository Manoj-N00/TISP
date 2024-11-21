import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Shield, 
  Users, 
  MessageSquare, 
  Link,
  
} from 'lucide-react';



const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Threats', href: '/threats', icon: Shield },
  { name: 'Organizations', href: '/organizations', icon: Users },
  { name: 'Discussions', href: '/discussions', icon: MessageSquare },
  { name: 'Top 10 Threats', href: '/Top10', icon: Shield },
  { name: 'Chat With AI', href: '/Chat', icon: Users },
  { name: 'Link Checker', href: '/checklink', icon: Link },
  // { name: 'VirusTotal', href: '/Threatintll', icon: Link },
];

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <div className="pl-3 text-xl">TISP</div>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}