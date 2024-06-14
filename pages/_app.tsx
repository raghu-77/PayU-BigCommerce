import { GlobalStyles, AlertsManager, createAlertsManager } from '@bigcommerce/big-design';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/styles.css'

export const alertsManager = createAlertsManager();

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyles />
        <AlertsManager manager={alertsManager} />
        <Component {...pageProps} />
    </>
);

export default MyApp;