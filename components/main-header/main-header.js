import React from 'react';
import Link from "next/link";
import Image from "next/image";

import cssClasses from './main-header.module.css'
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from "@/components/main-header/main-header-background";

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
                            <Link href={"/meals"}>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href={"/community"}>Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainHeader;