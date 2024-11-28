import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Innovations@EC</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <img src="/iec.jpeg" alt="Innovations@EC Logo" className="w-20 h-20" />
          </div>
          <h2 className="mb-6 text-2xl font-bold text-center text-yellow-500">
            Login to Innovations@EC
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-yellow-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
