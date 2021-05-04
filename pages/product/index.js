import Header from '../../components/header';
import Filter from './filter';
import List from './list';
import styles from '../../styles/Product.module.css';

const Product = () =>{
    console.log("Product");
    return (
        <div className={styles.main}>
            <Header />
            <div>Product Title</div>
            <Filter />
            <List />
        </div>
    );
};

export default Product;