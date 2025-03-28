'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/nav-links.module.css";

export default function NavLinks({href, children}){
    console.log("href: ", href);
    
    const pathName = usePathname();
    return (
        <Link href={href} className={pathName.includes(href) ? styles.active : ''}>{children}</Link>
    );
}