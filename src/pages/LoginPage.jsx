import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';
import logo from '/logo.png';
import { Link } from 'react-router';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-blue-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-56 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={logo} alt="Logo" width={140} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-600 mt-2">Login with your credentials</p>
          </div>

          <form className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username..."
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <FaEye />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Link to="/dashboard" className="block">
              <button
                type="submit"
                className="w-full bg-blue-400 cursor-pointer text-white py-2 rounded-md font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <FaShieldAlt className="w-4 h-4 mr-2" />
                Sign In
              </button>
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Secure admin access with username and password</p>
          </div>
        </div>
      </div>
    </div>
  );
}
