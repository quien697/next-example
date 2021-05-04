import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css'

const Header = () => {
    const router = useRouter();
    return (
        <div className={styles.main}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/product">
                        <a>Product</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;