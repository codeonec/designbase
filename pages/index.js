
import Listing from '../Components/Listings'
import Link from 'next/link'
import * as Icons from '../Components/icons'

export default function Home({data}) {
  return (
    <div>
      <section className="cover-section">
        <div className="container">
          <div className="cover">
            <div className="header head-1">Developers' Treasure of Resources</div>
            <div className="subhead">Curated list of design resources for developers</div>
            <a className="badge" href="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=293097&theme=light%22%20alt=%22Design%20Base%20-%20Curated%20design%20resources%20for%20developers%20|%20Product%20Hunt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=293097&theme=light" alt="Design Base - Curated design resources for developers | Product Hunt" style={{width: "250px"}, {height: "54px"}} width="250" height="54" /></a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="filter-section">
          <div className="section-title">Categories</div>
          <div className="section-subtitle">Choose a category to explore 200+ curated resources</div>
          <div className="categories">
            <Link href="/inspirations"><a className="category-item"><Icons.Inspiration /> UI Inspirations</a></Link>
            <Link href="/resources"><a className="category-item"><Icons.Resources />UI Resources</a></Link>
            <Link href="/colors"><a className="category-item"><Icons.Colors />Colors</a></Link>
            <Link href="/fonts"><a className="category-item"><Icons.Fonts />Fonts</a></Link>
            <Link href="/icons"><a className="category-item"><Icons.Icons />Icons</a></Link>
            <Link href="/illustrations"><a className="category-item"><Icons.Illustrations />Illustrations</a></Link>
            <Link href="/designsystems"><a className="category-item"><Icons.DesignSystems />Design Systems</a></Link>
            <Link href="/designguides"><a className="category-item"><Icons.DesignGuides />Design Guides</a></Link>
            <Link href="/stockimages"><a className="category-item"><Icons.Images />Stock Images</a></Link>
            <Link href="/mockups"><a className="category-item"><Icons.Mockups />Mockups</a></Link>
          </div>
        </div>
      </div>
      <div className="section-title mt-50">Featured Resources</div>
      <div className="section-subtitle">Few best selected resources from our resource library</div>
      <Listing data={data}></Listing>
    </div>
  )
}

export const getStaticProps = () => {
  const data = [
    {
      id: 1,
      name: "Dribbble",
      url: "https://dribbble.com/",
      image: "https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png",
      description: "Designs from top designer and creators world-wide",
      category: "UI Inspiration"
    },
    {
      id: 2,
      name: "Behance",
      url: "https://www.behance.net/",
      image: "https://a5.behance.net/53bc9bd9b9f4a5b0b6b19a5a24a3d27a0dcab0e8/img/site/apple-touch-icon.png?cb=264615658",
      description: "Creative network for showcasing creative works",
      category: "UI Inspiration"
    },
    {
      id: 3,
      name: "Awwwards",
      url: "https://www.awwwards.com/",
      image: "https://www.awwwards.com/apple-touch-icon.png",
      description: "Website that promote the talent and effort of the best creators",
      category: "UI Inspiration"
    },
    {
      id: 4,
      name: "Muzli Search",
      url: "https://search.muz.li/",
      image: "https://search.muz.li/assets/images/favicon.png",
      description: "Search, discover, test and design inspiration",
      category: "UI Inspiration"
    },
    {
      id: 5,
      name: "UI8",
      url: "https://ui8.net/",
      image:"https://d1v8dk3ka6obgr.cloudfront.net/v5/assets/global/touch-icon-ipad-retina.png",
      description: "High quality UX/UI design resources and freebies for designers",
      category: "UI Resources"
    },
    {
      id: 6,
      name: "Invision Designs",
      url: "https://www.invisionapp.com/inside-design/design-resources/",
      image:"https://marketing.invisionapp-cdn.com/www-inside-design/static/img/icon-144.png",
      description: "Library of free, high-quality UI kits, icon packs, and mockups",
      category: "UI Resources"
    },
    {
      id: 7,
      name: 'UI Design Daily',
      url: 'https://www.uidesigndaily.com/',
      description: 'Free, Open-source UI design resources updated daily.',
      image: 'https://www.uidesigndaily.com/public/img/apple-touch-icon.png',
      category: "UI Resources"
    },
    {
      id: 8,
      name: 'UP Labs',
      url: "https://www.uplabs.com/",
      image: "https://www.uplabs.com/logos/uplabs/icons/apple-icon-152x152.png",
      description: "High-quality design resources",
      category: "UI Resources"
    },
    {
      id: 9,
      name: 'PSD repo',
      url: "https://psdrepo.com/",
      image: "https://cdn.psdrepo.com/resources/apple-touch-icon.png",
      description: "Free high quality PSD & Adobe Xd resources",
      category: "UI Resources"
    },
    {
      id: 10,
      name: "Coolors",
      url: "https://coolors.co",
      image: "https://coolors.co/assets/img/logo.svg",
      description: "Generate or browse beautiful color combinations for your designs.",
      category: "Colors"
    },
    {
      id: 11,
      name: "Color Hunt",
      url: "https://colorhunt.co/",
      image: "https://colorhunt.co/img/color-hunt-icon-ios.png",
      description: "Platform for color inspiration with thousands of color palettes.",
      category: "Colors"
    },
    {
      id: 12,
      name: "Colormind",
      url: "http://colormind.io/",
      image: "http://colormind.io/favicon16.gif",
      description: "Color scheme generator that uses deep learning.",
      category: "Colors"
    },
    {
      id: 13,
      name: "ColorSpace",
      url: "https://mycolor.space/",
      image: "https://mycolor.space/img/color-space-logo.png",
      description: "Generate nice color palettes, color gradients and much more",
      category: "Colors"
    },
    {
      id: 14,
      name: "Google Fonts",
      url: "https://fonts.google.com/",
      image: "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg",
      description: "Library of thousands of free licenced fonts",
      category: "Fonts"
    },
    {
      id: 15,
      name: "Adobe Fonts",
      url: "https://fonts.adobe.com/fonts",
      image: "https://adobe.com/favicon.ico",
      description: "Library of thousands of beautiful fonts with free licenced",
      category: "Fonts"
    },
    {
      id: 16,
      name: "Icons8",
      url: "https://icons8.com/",
      image: "https://icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png",
      description: "Icons, illustrations, photos, music, and design tools",
      category: "Icons"
    },
    {
      id: 17,
      name: "Flaticon",
      url: "https://www.flaticon.com/",
      image: "https://media.flaticon.com/dist/min/img/apple-icon-144x144-precomposed.png",
      description: "The largest database of free icons available in different formats.",
      category: "Icons"
    },
    {
      id: 18,
      name: "Ionicons",
      url: "https://ionicons.com/",
      image: "https://ionicons.com/assets/img/meta/apple-icon-152x152.png",
      description: "Premium designed, Open-sources and MIT licenced icons",
      category: "Icons"
    },
    {
      id: 19,
      name: "Feather Icons",
      url: "https://feathericons.com/",
      image: "https://feathericons.com/favicon-32x32.png",
      description: "Collection of simply beautiful open source icons.",
      category: "Icons"
    },
    {
      id: 20,
      name: "Material Icons",
      url: "https://fonts.google.com/icons",
      image: "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg",
      description: "Icons by official Google's Material UI",
      category: "Icons"
    },
    {
      id: 21,
      name: "Undraw",
      url: "https://undraw.co/illustrations",
      image: "https://undraw.co/apple-touch-icon.png",
      description: "Open-source illustrations for any idea you can imagine and create",
      category: "Illustrations"
    },
    {
      id: 22,
      name: "DrawKit",
      url: "https://www.drawkit.io/",
      image: "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d3e60f773102c8158c55778_drawkit.png",
      description: "Free SVG, Vector illustrations, packs, icons and more.",
      category: "Illustrations"
    },
    {
      id: 23,
      name: "Blush",
      url: "https://blush.design/",
      image: "https://blush.design/apple-touch-icon.png",
      description: "Create and customize illustrations with collections made by artists",
      category: "Illustrations"
    },
    {
      id: 24,
      name: "Manypixels",
      url: "https://www.manypixels.co/gallery",
      image: "https://www.manypixels.co/favicon.svg",
      description: "2,500+ royalty-free and editable illustrations",
      category: "Illustrations"
    },
    {
      id: 25,
      name: "Unsplash",
      url: "https://unsplash.com/",
      image: "https://unsplash.com/apple-touch-icon.png",
      description: "The internet’s source of freely-usable images.",
      category: "Stock Images"
    },
    {
      id: 26,
      name: "Pexels",
      url: "https://www.pexels.com/",
      image: "https://www.pexels.com/assets/icons/pexels-icon-644533b609157fd990b1a6675626d63077ae1fb81e819c83f81dc2242877d413.png",
      description: "Free stock photos and videos you can use everywhere",
      category: "Stock Images"
    },
    {
      id: 27,
      name: "Pixabay",
      url: "https://pixabay.com/",
      image: "https://pixabay.com/apple-touch-icon.png",
      description: "High quality stock images, videos and music",
      category: "Stock Images"
    },
    {
      id: 28,
      name: "Smart Mockups",
      url: "https://smartmockups.com/",
      image: "https://smartmockups.com/apple-touch-icon.png",
      description: "Create stunning and high-quality product photos online",
      category: "Mockups"
    },
    {
      id: 29,
      name: "Screely",
      url: "https://www.screely.com/",
      image: "https://www.screely.com/favicons/apple-touch-icon.png?v=m2LPa2XMm8",
      description: "Instantly turn your screenshot into a beautiful mockup",
      category: "Mockups"
    },
    {
      id: 30,
      name: "Mockupworld",
      url: "https://www.mockupworld.co/",
      image: "https://www.mockupworld.co/wp-content/uploads/fbrfg/apple-touch-icon.png",
      description: "Free and legal, fully layered, easily customizable mockups",
      category: "Mockups"
    },
    {
      id: 31,
      name: "Mockupbro",
      url: "https://mockupbro.com/",
      image: "https://mockupbro.com/_nuxt/icons/icon_64.90whVEWamww.png",
      description: "Create awesome product mockups without any graphic software",
      category: "Mockups"
    },
    {
      id: 32,
      name: "MokuPhone",
      url: "https://mockuphone.com/",
      image: "https://mockuphone.com/static/images/favicon.png",
      description: "Free and simple screenshots device mockups generator",
      category: "Mockups"
    }
  ]

  return {
    props: {
      data
    }
  }

}
