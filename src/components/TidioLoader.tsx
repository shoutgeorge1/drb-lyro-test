'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { isChatEnabled } from '@/lib/isChatEnabled';

/**
 * TidioLoader component that conditionally loads the Tidio chat widget
 * Only loads on /chat-test route or when ?chat=1 is present
 */
export default function TidioLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const tidioKey = process.env.NEXT_PUBLIC_TIDIO_KEY;

  useEffect(() => {
    // Check if chat should be enabled based on current route and search params
    const chatEnabled = isChatEnabled(pathname, searchParams);
    setShouldLoad(chatEnabled);
  }, [pathname, searchParams]);

  // Show warning if no Tidio key is configured
  if (!tidioKey) {
    return (
      <div className="fixed bottom-4 right-4 max-w-sm p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Tidio Key Missing
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>Set NEXT_PUBLIC_TIDIO_KEY in your environment variables to enable the chat widget.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render anything if chat shouldn't be loaded
  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://code.tidio.co/${tidioKey}.js`}
        strategy="afterInteractive"
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={() => {
          console.error('Failed to load Tidio script');
        }}
      />
      {/* Optional: Show loading indicator */}
      {shouldLoad && !isLoaded && (
        <div className="fixed bottom-4 right-4 p-2 bg-blue-50 border border-blue-200 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm text-blue-800">Loading chat...</span>
          </div>
        </div>
      )}
    </>
  );
}
