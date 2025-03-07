import React from 'react';
import type { AppProps } from 'next/app';
import '../App.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
