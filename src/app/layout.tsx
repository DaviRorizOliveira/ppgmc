import React from "react";
import Head from 'next/head';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../components/header/header.jsx';
import Slider from '../components/slider/slider.jsx';
import Footer from '../components/footer/footer.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PPGMC / UESC",
    description: "Programa de Pós-Graduação em Modelagem Computacional",
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
            </Head>
            <body className={inter.className}>
                <Header />
                <Slider />
                    {children}
                <Footer />
            </body>
        </html>
    );
}