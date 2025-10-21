import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          DrBalcony Lyro Test
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A minimal Next.js app to test Tidio/Lyro chat widget integration
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-blue-800">
            This is just a Lyro sandbox for testing chat widget functionality.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Test Chat Widget
          </h2>
          <p className="text-gray-600 mb-6">
            Navigate to the chat test page to interact with the Tidio/Lyro chat widget.
          </p>
          <Link 
            href="/chat-test"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 transition-colors"
          >
            Go to Chat Test
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Setup Instructions
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">1</span>
              <p>Get your Tidio public key from the Tidio Dashboard</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">2</span>
              <p>Set NEXT_PUBLIC_TIDIO_KEY in your environment variables</p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">3</span>
              <p>Run <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> to start testing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Built with Next.js 14, TypeScript, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
