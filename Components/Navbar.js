import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useEffect} from 'react';
import * as Icons from '../Components/icons'

const Nav = () => {

    useEffect(()=>{
        document.onclick = (e) => {
            if(e.target.id !== "menu"){
                document.querySelector('.menu-section').classList.remove("active")
            }
        }
        window.addEventListener('scroll',()=>{
            const dEm = document.documentElement.scrollTop;
            const navBar = document.querySelector('.navbar');
            if(dEm > 0) navBar.classList.add('scrolled');
            else  navBar.classList.remove('scrolled');
        });
    },[])

    const router = useRouter();

    const getClass = (href) => {
        if(href === router.pathname || href === router.query.id){return 'link active'}
        else {return 'link'}
    }

    const onClkBtn = () =>{
        document.querySelector('.menu-section').classList.toggle("active")
    }
    const onClkLnk = () => {
        document.querySelector('.menu-section').classList.remove("active")
    }

    const NavLink = (props) => {
        return(
            <Link href={"/"+props.path}>
                <a className={getClass(props.path)} onClick={onClkLnk}>{props.ico}{props.alt}</a>
            </Link>
        )      
    }

    return(
        <div className="navbar">
            <div className="logo">
                <Link href="/"><a><img src="./logo.svg" alt="designbase" />DesignBase</a></Link>
            </div>
            <div className="links">
                <div className="site-menu">
                    <div className="menu-switch" onClick={onClkBtn} id="menu">
                        Categories <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#626262" d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></svg>
                    </div>
                    <div className="menu-section">
                        <NavLink path="inspirations" alt="UI Inspiration" ico={<Icons.Inspiration />} />
                        <NavLink path="resources" alt="UI Resources" ico={<Icons.Resources />}/>
                        <NavLink path="colors" alt="Colors" ico={<Icons.Colors />} />
                        <NavLink path="fonts" alt="Fonts" ico={<Icons.Fonts />} />
                        <NavLink path="icons" alt="Icons" ico={<Icons.Icons />} />
                        <NavLink path="illustrations" alt="Illustrations" ico={<Icons.Illustrations />} />
                        <NavLink path="designsystems" alt="Design Systems" ico={<Icons.DesignSystems />} />
                        <NavLink path="designguides" alt="Design Guides" ico={<Icons.DesignGuides />} />
                        <NavLink path="stockimages" alt="Stock Images" ico={<Icons.Images />} />
                        <NavLink path="mockups" alt="Mockups" ico={<Icons.Mockups />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;