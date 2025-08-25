import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import 'tailwindcss/tailwind.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const trackingId = process.env.NEXT_PUBLIC_TRACKING_ID;

    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send("pageview");
    } else {
      console.warn("GA tracking ID not found, skipping initialization.");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
