import React from 'react';
import Link from "next/link";

import logoImg from '@/assets/logo.png';

function MainHeader(props) {
    return (
        <header>
            <Link href={"/"}>
                <img src={logoImg.src} alt={"A plate of food"}/>
                NextLevel Foods
            </Link>

            <nav>
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
    );
}

export default MainHeader;