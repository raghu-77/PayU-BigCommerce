import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';


const SessionContext = createContext({});

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const router = useRouter();
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours
  const inactivityTimeout = 30 * 60 * 1000; // 30 minutes 

  // Update last interaction time on any user interaction
  useEffect(() => {
    const updateLastInteractionTime = () => {
      setLastInteractionTime(Date.now());
    };

    const events = ['mousemove', 'keydown', 'click'];

    for (const event of events) {
      window.addEventListener(event, updateLastInteractionTime);
    }

    return () => {
      for (const event of events) {
        window.removeEventListener(event, updateLastInteractionTime);
      }
    };
  }, []);

  // Redirect to error page if inactive for more than inactivityTimeout
  useEffect(() => {
    const checkInactivity = () => {
      if (Date.now() - lastInteractionTime > inactivityTimeout) {
        router.push('/sessionerror');
      }
    };

    const interval = setInterval(checkInactivity, 1000);

    return () => clearInterval(interval);
  }, [lastInteractionTime, inactivityTimeout, router]);

  // Redirect to error page after sessionTimeout
  useEffect(() => {
    const sessionTimeoutId = setTimeout(() => {
      router.push('/sessionerror');
    }, sessionTimeout);

    return () => clearTimeout(sessionTimeoutId);
  }, [sessionTimeout, router]);

  return (
    <SessionContext.Provider value={{}}>
      {children}
    </SessionContext.Provider>
  );
}

export function useQuery() {
  const [searchParams] = useSearchParams();

  return searchParams;
}


