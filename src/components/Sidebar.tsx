'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaHistory, FaChartPie } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Floating Sidebar Toggle */}
      <button
        onMouseEnter={() => setShowSidebar(true)}
        onMouseLeave={() => setShowSidebar(false)}
        className="fixed top-24 left-4 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
      >
        {showSidebar ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Bubble Sidebar */}
      {showSidebar && (
        <div
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => setShowSidebar(false)}
          className="fixed top-32 left-0 z-30 w-64 bg-white shadow-2xl rounded-r-2xl border-r border-gray-300"
        >
          <ul className="p-4 space-y-4 text-green-800">
            <li className="flex items-center space-x-2 font-medium hover:border-b-1 border-slate-200">
              <Link
                href="/"
                className={`flex items-center space-x-2 ${
                  pathname === '/' ? 'text-green-600 font-semibold' : ''
                }`}
              >
                <MdDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2 font-medium hover:border-b-1 border-slate-200">
              <Link
                href="/payment-history"
                className={`flex items-center space-x-2 ${
                  pathname === '/payment-history' ? 'text-green-600 font-semibold' : ''
                }`}
              >
                <FaHistory />
                <span>Payment History</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2 font-medium hover:border-b-1 border-slate-200">
              <Link
                href="/reports"
                className={`flex items-center space-x-2 ${
                  pathname === '/reports' ? 'text-green-600 font-semibold' : ''
                }`}
              >
                <FaChartPie />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}


// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';


// export default function Sidebar() {
//   const [showSidebar, setShowSidebar] = useState(false);
//   return (
//     {/* Floating Sidebar Toggle */}
//     <button
//     onMouseEnter={() => setShowSidebar(true)}
//     onMouseLeave={() => setShowSidebar(false)}
//     className="fixed top-24 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
//   >
//     {showSidebar ? <FaTimes size={20} /> : <FaBars size={20} />}
//   </button>

//   {/* Bubble Sidebar */}
//   {showSidebar && (
//     <div
//       onMouseEnter={() => setShowSidebar(true)}
//       onMouseLeave={() => setShowSidebar(false)}
//       className="fixed top-20 right-0 z-30 w-60 bg-white shadow-lg rounded-l-2xl border-l border-gray-200"
//     >
//       <ul className="p-4 space-y-4 text-blue-700">
//         <li  className="flex items-center space-x-2 font-medium">
//           <a href="/dashboard"><MdDashboard /> <span>Dashboard</span></a>
//         </li>
//         <li className="flex items-center space-x-2 font-medium">
//           <a href="/payment-history"><FaHistory /> <span>Payment History</span></a>
//         </li>
//         {/* <li className="flex items-center space-x-2 font-medium">
//           <FaWallet /> <span>Wallet</span>
//         </li> */}
//         <li className="flex items-center space-x-2 font-medium">
//           <a href='/reports'><FaChartPie /> <span>Reports</span></a>
//         </li>
//       </ul>
//     </div>
//   )}
//   ); 
// }


// const navItems = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Payment History', path: '/payment-history' },
//   { name: 'Reports', path: '/reports' },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="w-60 h-[calc(100vh-4rem)] bg-white shadow-md p-4 fixed top-16 left-0 z-40">
//       <ul className="space-y-4 text-green-800 font-medium">
//         {navItems.map((item) => (
//           <li key={item.name}>
//             <Link
//               href={item.path}
//               className={`block px-3 py-2 rounded-lg hover:bg-green-100 ${
//                 pathname === item.path ? 'bg-green-100 font-semibold' : ''
//               }`}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }
