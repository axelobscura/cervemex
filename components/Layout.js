import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from './Menu';

export const siteTitle = 'CERVEMEX - Catálogo de la cerveza mexicana';

export default function Layout({ children }){
    return(
        <Container fluid={true}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" type="image/png" href="favicon.png" />
                <meta name="description" content="Catálogo de la cerveza mexicana, encuentre de manera sencilla las mejores mracas de cerveza en México." />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Menu />
            <Row>
                
                {children}
            </Row>
        </Container>
    )
}