---
trigger: always_on
---

Next.js
PostHog makes it easy to get data about traffic and usage of your Next.js app. Integrating PostHog into your site enables analytics about user behavior, custom events capture, session recordings, feature flags, and more.

This guide walks you through integrating PostHog into your Next.js app using the React and the Node.js SDKs.

You can see a working example of this integration in our Next.js demo app.

Next.js has both client and server-side rendering, as well as pages and app routers. We'll cover all of these options in this guide.


Prerequisites
To follow this guide along, you need:

A PostHog instance (either Cloud or self-hosted)
A Next.js application

Beta: integration via LLM
Install PostHog for Next.js in seconds with our wizard by running this prompt with LLM coding agents like Cursor and Bolt, or by running it in your terminal.

prompt


npx -y @posthog/wizard@latest --region us

Or, to integrate manually, continue with the rest of this guide.



Client-side setup
Install posthog-js using your package manager:

npm
Yarn
pnpm
Bun


npm install --save posthog-js

Add your environment variables to your .env.local file and to your hosting provider (e.g. Vercel, Netlify, AWS). You can find your project API key in your project settings.

.env.local


NEXT_PUBLIC_POSTHOG_KEY=phc_G8hgTRBNebn9xw697Gu3yfMZ1aeixo1XYEc5ScLIVfO
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
These values need to start with NEXT_PUBLIC_ to be accessible on the client-side.


Integration
Next.js 15.3+ provides the instrumentation-client.ts|js file for a quick, lightweight setup. Add it to the root of your Next.js app (for both app and pages router) and initialize PostHog in it like this:

instrumentation-client.js
instrumentation-client.ts


import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: '2025-11-30'
});
Using Next.js 15.2 or older?
Bootstrapping with instrumentation-client

Set up a reverse proxy (recommended)

Grouping products in one project (recommended)

Add IPs to Firewall/WAF allowlists (recommended)


Accessing PostHog
Instrumentation client
PostHog provider
Once initialized in instrumentation-client.js|ts, import posthog from posthog-js anywhere and call the methods you need on the posthog object.

JavaScript


'use client'
import posthog from 'posthog-js'

export default function Home() {
  return (
    <div>
      <button onClick={() => posthog.capture('test_event')}>
        Click me for an event
      </button>
    </div>
  );
}

Usage
See the React SDK docs for examples of how to use:

posthog-js functions like custom event capture, user identification, and more.
Feature flags including variants and payloads.
You can also read the full posthog-js documentation for all the usable functions.


Server-side analytics
Next.js enables you to both server-side render pages and add server-side functionality. To integrate PostHog into your Next.js app on the server-side, you can use the Node SDK.

First, install the posthog-node library:

npm
Yarn
pnpm
Bun


npm install posthog-node --save


Router-specific instructions
App router
Pages router
For the app router, we can initialize the posthog-node SDK once with a PostHogClient function, and import it into files.

This enables us to send events and fetch data from PostHog on the server – without making client-side requests.

JavaScript


// app/posthog.js
import { PostHog } from 'posthog-node'

export default function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0
  })
  return posthogClient
}
Note: Because server-side functions in Next.js can be short-lived, we set flushAt to 1 and flushInterval to 0.

flushAt sets how many capture calls we should flush the queue (in one batch).
flushInterval sets how many milliseconds we should wait before flushing the queue. Setting them to the lowest number ensures events are sent immediately and not batched. We also need to call await posthog.shutdown() once done.
To use this client, we import it into our pages and call it with the PostHogClient function:

JavaScript


import Link from 'next/link'
import PostHogClient from '../posthog'

export default async function About() {

  const posthog = PostHogClient()
  const flags = await posthog.getAllFlags(
    'user_distinct_id' // replace with a user's distinct ID
  );
  await posthog.shutdown()

  return (
    <main>
      <h1>About</h1>
      <Link href="/">Go home</Link>
      { flags['main-cta'] &&
        <Link href="http://posthog.com/">Go to PostHog</Link>
      }
    </main>
  )
}


Server-side configuration
Next.js overrides the default fetch behavior on the server to introduce their own cache. PostHog ignores that cache by default, as this is Next.js's default behavior for any fetch call.

You can override that configuration when initializing PostHog, but make sure you understand the pros/cons of using Next.js's cache and that you might get cached results rather than the actual result our server would return. This is important for feature flags, for example.

TSX


posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  // ... your configuration
  fetch_options: {
    cache: 'force-cache', // Use Next.js cache
    next_options: {       // Passed to the `next` option for `fetch`
      revalidate: 60,     // Cache for 60 seconds
      tags: ['posthog'],  // Can be used with Next.js `revalidateTag` function
    },
  }
})

Configuring a reverse proxy to PostHog
To improve the reliability of client-side tracking and make requests less likely to be intercepted by tracking blockers, you can setup a reverse proxy in Next.js. Read more about deploying a reverse proxy using Next.js rewrites, Next.js middleware, and Vercel rewrites.


Frequently asked questions

Does wrapping my app in the PostHog provider de-opt it to client-side rendering?
No. Even though the PostHog provider is a client component, since we pass the children prop to it, any component inside the children tree can still be a server component. Next.js creates a boundary between server-run and client-run code.

The use client reference says that it "defines the boundary between server and client code on the module dependency tree, not the render tree." It also says that "During render, the framework will server-render the root component and continue through the render tree, opting-out of evaluating any code imported from client-marked code."

Pages router components are client components by default.


What does wrapping my app in the PostHog provider do?
On top of the standard features like autocapture, custom events, session recording, and more, wrapping your app in the PostHog provider gives you:

The usePostHog, useFeatureFlagEnabled, and other hooks in any component.
A PostHog context you can access in any component.
The <PostHogFeature> component which simplifies feature flag logic.
See the React SDK docs for more details.


Why use a useEffect hook to initialize PostHog in the provider?
We want to initialize PostHog when the app is loaded. The React docs recommend using a useEffect hook to do this:

Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.

Technically, you can also use a window object check to initialize PostHog. This happens outside the React lifecycle, meaning it happens earlier and it looks like this:

JavaScript
TSX


// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
The problem with this is that it can cause a hydration and/or mismatch error like Warning: Prop dangerouslySetInnerHTML did not match..


Why did the pageview component need a useEffect?
Before updating the JavaScript Web SDK's default behavior when capturing pageviews ('2025-11-30'), we suggested using a useEffect hook to capture pageviews. This is because it's the simplest way to accurately capture pageviews. Other approaches include:

Not using a useEffect hook, but this might lead to duplicate page views being tracked if the component re-renders for reasons other than navigation. It might work depending on your implementation.
Using window.navigation to track pageviews, but this approach is more complex and is not supported in all browsers.
Note: This approach of manually capturing pageviews is no longer recommended. We recommend using defaults: '2025-11-30' or capture_pageview: 'history_change' instead, which automatically handles both $pageview and $pageleave events.

If you're still capturing pageviews manually, you should also capture $pageleave events to track important engagement metrics like time on page ($prev_pageview_duration) and scroll depth ($prev_pageview_max_scroll_percentage). To do this, set up a listener on window unload (similar to how PostHog does it):

JavaScript


useEffect(() => {
  const handlePageLeave = () => {
    posthog.capture('$pageleave', null, { transport: 'sendBeacon' })
  }

  // Use pagehide if available for better reliability, otherwise fallback to unload
  const event = 'onpagehide' in window ? 'pagehide' : 'unload'
  window.addEventListener(event, handlePageLeave)

  return () => window.removeEventListener(event, handlePageLeave)
}, [])
Using sendBeacon ensures the event is sent even when users quickly close tabs. See our time on page tutorial for more details on using these metrics.