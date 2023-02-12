import React from 'react';

import '../styles/globals.scss';
import { Layout, ParticleBg } from '../components';
// import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps } />
      {/* <Analytics /> */ }
    </Layout>
  );
}

export default MyApp;