import Filter from './filter';
import List from './list';
import styles from '../../styles/Product.module.css';

const Product = () =>{
    return (
        <div className={styles.main}>
            <div>Product Title</div>
            <Filter />
            <List />
        </div>
    );
};

export default Product;