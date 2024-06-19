import { GlobalStyles, AlertsManager, createAlertsManager } from '@bigcommerce/big-design';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '../styles/styles.css';
import { SessionProvider } from '../context/session';

export const alertsManager = createAlertsManager();

const MyApp = ({ Component, pageProps }: AppProps) => {
    
    // disable right click inside app
    useEffect(() => {
        const handleContextMenu = (event) => {
          event.preventDefault();
        };
    
        document.addEventListener('contextmenu', handleContextMenu);
    
        return () => {
          document.removeEventListener('contextmenu', handleContextMenu);
        };
      }, []);

    return (
        <>
            <GlobalStyles />
            <AlertsManager manager={alertsManager} />
            <SessionProvider>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
};

export default MyApp;
