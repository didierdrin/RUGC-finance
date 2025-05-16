import Link from 'next/link'; 

export default function Signup() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-xl font-bold text-green-700 mb-4">Create an Account</h2>
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded mt-2" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded mt-2" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded mt-2" />
          <Link href='/'><button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Register
          </button></Link>
          <p className="text-sm mt-2">
            Already have an account? <a href="/login" className="text-green-700">Log in</a>
          </p>
        </div>
      </div>
    );
  }
  