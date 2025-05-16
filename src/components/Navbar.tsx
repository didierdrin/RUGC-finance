import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-30 px-6 flex items-center justify-between">
        <div className="flex space-x-4">
        <div className="h-9 w-9"><img src="/logoGolf.png"></img></div>
        <h1 className="text-2xl font-bold text-emerald-700">RUGC</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-slate-200 px-8 py-1 rounded-md text-sm outline-slate-300 text-slate-600"
          />
        <Link href="/login"><div className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center"><h2 className="text-slate-700 font-bold">T</h2></div></Link>
        </div>
      </nav>

    );
  }
  