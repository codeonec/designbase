import '../styles/globals.css'
import Nav from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <div className="home-container">  
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="title" content="DesignBase — Developers' Treasure of Resources"></meta>
          <meta name="description" content="Library of top rated curated design resources for developers. UI Inspirations, UI Resources, Icons, Fonts, Illustrations and much more..." />
          <meta name="keywords" content="UI Inpirations, Design Inspirations, UI Resources, Design Resources, UI design, UI/UX, Icons, Free Icons, Fonts, Free Fonts, Colors, Color Palette, Color Palette Generator, Illustrations, Free Illustrations, Design System, Design Guides, Stock Images, Free Images, Mockups, Free Mockups" />
          <link
            href="/Favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/Favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <title>DesignBase - Developers' Treasure of Resources</title>

          {/* OG META */}
          <meta name="theme-color" content="#fefefe"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://designbase.vercel.app/"></meta>
          <meta property="og:title" content="DesignBase — Developers' Treasure of Resources"></meta>
          <meta property="og:description" content="Library of top rated curated design resources for developers. UI Inspirations, UI Resources, Icons, Fonts, Illustrations and much more..."></meta>
          <meta property="og:image" content="/og_tw_img.png"></meta>

          {/* TW META */}
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://designbase.vercel.app/"></meta>
          <meta property="twitter:title" content="DesignBase — Developers' Treasure of Resources"></meta>
          <meta property="twitter:description" content="Library of top rated curated design resources for developers. UI Inspirations, UI Resources, Icons, Fonts, Illustrations and much more..."></meta>
          <meta property="twitter:image" content="/og_tw_img.png"></meta>

        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
}

export default MyApp
