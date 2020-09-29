import React from 'react'
import Head from 'next/head';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const siteTitle = 'CERVEMEX - Catálogo de la cerveza mexicana';

export default function Layout({ children }){
    return(
        <Container fluid={true}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" type="image/png" href="/img/logo.png" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Row>
                {children}
            </Row>
        </Container>
    )
}