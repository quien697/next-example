import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.main}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;