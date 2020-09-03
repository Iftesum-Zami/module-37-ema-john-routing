import React, { useEffect } from 'react';
import './review.css';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => { // for cart
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];  // setting a new object
            return product;
        });
        setCart(cartProducts);
    }, [])

    return (
        <div>
            <h1 style={{marginLeft: '100px'}}>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;