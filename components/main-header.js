import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "@/styles/main-header.module.css";
import NavLinks from "./Links/nav-links";

export default function RootHeader(){
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logoImg} alt="A plate with food on it" width={30} height={40} priority quality={100}/>
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLinks href={"/meals"}>Browse Meals</NavLinks>
                    </li>
                    <li>
                        <NavLinks href={"/community"}>Foodie Community</NavLinks>
                    </li>
                </ul>
            </nav>
        </header>
    )
}