import React from 'react';
import Layout from '@theme/Layout';
import { inject } from '@vercel/analytics';

export default function Home() {
  inject();
  return (
    <Layout title="Homepage" description="Homepage">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          fontSize: '20px',
        }}
      >
        <h1>Welcome to my wiki</h1>
      </div>
    </Layout>
  );
}
