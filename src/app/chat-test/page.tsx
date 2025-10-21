'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ChatTestPage() {
  const [chatEnabled, setChatEnabled] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if chat should be enabled by default (from URL params)
    const chatParam = searchParams.get('chat');
    if (chatParam === '1') {
      setChatEnabled(true);
    }
  }, [searchParams]);

  useEffect(() => {
    // Check if Tidio script is loaded
    const checkTidioLoaded = () => {
      if (typeof window !== 'undefined' && (window as any).tidioChatApi) {
        setScriptLoaded(true);
      } else {
        setScriptLoaded(false);
      }
    };

    // Check immediately and then periodically
    checkTidioLoaded();
    const interval = setInterval(checkTidioLoaded, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setChatEnabled(!chatEnabled);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          DrBalcony Lyro Sandbox
        </h1>
        <p className="text-xl text-gray-600">
          Test the Tidio/Lyro chat widget integration
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Chat Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Chat Widget Controls
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">
                Enable Chat Widget
              </span>
              <button
                onClick={toggleChat}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  chatEnabled ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    chatEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Script Status</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  scriptLoaded ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm text-gray-600">
                  {scriptLoaded ? 'Tidio script loaded' : 'Tidio script not loaded'}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Auto-enable URL</h3>
              <p className="text-sm text-blue-800 mb-2">
                Add <code className="bg-blue-100 px-2 py-1 rounded">?chat=1</code> to any URL to auto-enable chat
              </p>
              <p className="text-xs text-blue-600">
                Example: <code className="bg-blue-100 px-1 py-0.5 rounded">/chat-test?chat=1</code>
              </p>
            </div>
          </div>
        </div>

        {/* Testing Checklist */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Testing Checklist
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">What to Test</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic conversation flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Response accuracy and relevance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Widget loading and positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile responsiveness</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Sample Questions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>"What services do you offer?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>"How can I contact support?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>"What are your business hours?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>"Tell me about your pricing"</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Rating Guidelines</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Excellent:</strong> Accurate, helpful, and contextual</p>
                <p><strong>Good:</strong> Mostly accurate with minor issues</p>
                <p><strong>Fair:</strong> Partially helpful but needs improvement</p>
                <p><strong>Poor:</strong> Inaccurate or unhelpful response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-medium text-yellow-800 mb-2">Note</h3>
        <p className="text-yellow-700 text-sm">
          This page is excluded from search engine indexing (noindex, nofollow) to prevent 
          it from appearing in search results.
        </p>
      </div>
    </div>
  );
}
