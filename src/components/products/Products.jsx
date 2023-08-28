import React from 'react'
import styles from './Products.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { 
    addMoreItemsToAdd,
    addToCart,
    clearCart,
    costOfShopping,
    decrease,
    fetchCartItems, 
    increase, 
    removeOne, 
    selectAllCart, 
    selectAllTotal, 
    selectLoadingState 
} from '../../redux/features/cartSlice/CartSlice';
import {
    FaChevronUp,
    FaChevronDown
} from 'react-icons/fa6';
const Products = () => {
    const cart = useSelector(selectAllCart);
    const isLoading = useSelector(selectLoadingState);
    const total = useSelector(selectAllTotal);
    // const amount = useSelector(selectAllAmount);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const timeSetInfo = setTimeout(() => {
            dispatch(fetchCartItems());
        }, 1000);
        return () => {
            clearTimeout(timeSetInfo)
        }
  }, [dispatch]);
  if(isLoading) {
    return <section>
        <header>
            <h4 className={styles.cart_loader}>Please wait a moment...</h4>
        </header>
    </section>
  }
  if(cart.length === 0) {
    return <header>
        <div>
            <div className={styles.refresh_products}>Please your shopping cart is currently empty.</div>
            <button 
                type='button' 
                onClick={() => dispatch(fetchCartItems())}
                className={styles.refresh_btn_btn}
                >
                refresh your cart
            </button>
        </div>
    </header>
  }
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.amount
    })
    return total;
  }  
    return (
        <div>
            <nav className={styles.product_nav}>
                <ul className={styles.product_items}>
                    <li>
                        total: {total}
                    </li>
                    <li>
                        {getTotalQuantity() || 0}
                    </li>
                </ul>
            </nav>
            <h1 className={styles.shopping_cart}>Welcome to my shopping cart store built with React, Redux toolkit and Node.JS</h1>
            {cart.map((shop) => {
                const {id, img, price,title, amount } = shop;
                return(
                    <article key={id} className={styles.cart_container}>
                        <div className={styles.cart_content}>
                            <div>
                                <img src={img} alt='Still loading' className={styles.cart_image}/>
                                <div>{title}</div>
                                <div>
                                    <p  className={styles.amount_price}> The total cost of 
                                        items on
                                        our shopping cart is
                                        ${price} dollars.
                                    </p>
                                    <div>
                                        <button 
                                            type='button'
                                            className={styles.total_price}
                                            onClick={() => dispatch(costOfShopping(id))}
                                            >
                                            Total Price
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button type='button' 
                                        className={styles.amount_btn}
                                        onClick={() => dispatch(removeOne(id))}>
                                        remove
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button 
                                        type='button'
                                        className={styles.btn_btn_btn}
                                        onClick={() => dispatch(increase(id))}
                                    >
                                        <FaChevronUp/>
                                    </button>
                                </div>
                                    <span className={styles.shop_cart_text}>The amount on your cart 
                                    shopping cart is <p className={styles.new_amount}>{amount}</p>.
                                    </span>
                                <div>
                                    <button 
                                        type='button'
                                        className={styles.btn_btn_btn}
                                        onClick={() => {
                                            if(amount === 1) {
                                                dispatch(removeOne(id));
                                                return;
                                            }
                                            dispatch(decrease(id))
                                        }}
                                    >
                                        <FaChevronDown/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
            <div>
                <button 
                    type='button'
                    className={styles.addCart_btn}
                    onClick={() => dispatch(addToCart())}>
                    Add to Cart
                </button>
            </div>
            <div>
                <button 
                    type='button'
                    className={styles.addCart_btn}
                    onClick={() => 
                    dispatch(addMoreItemsToAdd())}>
                    Add more items
                </button>
            </div>
            <hr/>
            <div className={styles.clearCart_bg}>
                <button 
                        type='button'
                        className={styles.clearCart_btn}
                        onClick={() => dispatch(clearCart())}
                    >
                    clear your Cart
                </button>
            </div>
        </div>
    );
};
export default Products;

