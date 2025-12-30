"use client";

import posthog from "posthog-js";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Capture the error in PostHog when the error boundary is triggered
  // This is done in the render to ensure it captures before user interaction
  if (typeof window !== "undefined") {
    posthog.capture("global_error_occurred", {
      error_message: error.message,
      error_name: error.name,
      error_digest: error.digest,
      error_stack: error.stack?.slice(0, 500), // Limit stack trace length
    });
    // Also use PostHog's exception capture for richer error tracking
    posthog.captureException(error);
  }

  const handleRetry = () => {
    posthog.capture("error_retry_clicked", {
      error_message: error.message,
      error_name: error.name,
    });
    reset();
  };

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={handleRetry}>Try again</button>
      </body>
    </html>
  );
}
