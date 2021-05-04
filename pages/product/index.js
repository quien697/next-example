import Head from 'next/head';
/* Common Commponents */
import Header from '../../components/header';
/* Commponents */
import Filter from './filter';
import List from './list';
/* CSS */
import styles from '../../styles/Product.module.css';

const Product = () =>{
    console.log("Product");
    return (
        <div className="container">
            <Head>
                <title>Next Example - 產品列表</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div>Product Title</div>
            <Filter />
            <List />
        </div>
    );
};

export default Product;