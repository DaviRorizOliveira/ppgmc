import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/header/header.jsx';
import Slider from '../components/slider/slider.jsx';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'PPGMC / UESC',
    description: 'Programa de Pós-Graduação em Modelagem Computacional',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/images/header-imgs/ppgmc_logo.ico" />
                <title>PPGMC / UESC</title>
            </Head>
            <body className={inter.className}>
                <Header />
                <Slider />
                <Navbar />
                {children}
                <Footer />
                <div className="fixed-action-btn" title="Voltar ao topo">
                    <a className="btn-floating btn-large teal darken-4 rollUp">
                        <i className="large material-icons">arrow_upward</i>
                    </a>
                </div>
                {/* Scripts devem estar dentro do <body> */}
                <Script src="/js/jquery.js" strategy="beforeInteractive" />
                <Script src="/js/materialize.js" strategy="beforeInteractive" />
                <Script src="/js/funcoes.js" strategy="beforeInteractive" />
            </body>
        </html>
    );
}