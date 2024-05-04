import React from 'react';
import Link from "next/link";
import Image from "next/image";

import cssClasses from './main-header.module.css'
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={cssClasses.header}>
                <Link className={cssClasses.logo} href={"/"}>
                    <Image src={logoImg} alt={"A plate of food"} priority/>
                    NextLevel Foods
                </Link>

                <nav className={cssClasses.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainHeader;