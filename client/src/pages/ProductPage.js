import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';


function ProductPage() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="product-page-container">

          <div className='product-page-top-strip'>
          <Button variant="contained" color="primary" disableElevation component={RouterLink} to="/shop"> Back </Button>
          </div>

          <div className='product-page-box-one'>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
            <div className='product-page-optionsbox'>

                <h2>{currentProduct.name}</h2>

                <p> <strong>Price:</strong>${currentProduct.price}{' '} </p> 

                <Button onClick={addToCart} size="small" color="primary" variant="contained">
                  Add to Cart
                </Button>
                <Button  disabled={!cart.find((p) => p._id === currentProduct._id)}
                              onClick={removeFromCart} size="small" color="primary" variant="contained">
                  Remove From Cart
                </Button>
            </div>
          </div>

          <div className='product-page-description'>

          <p>{currentProduct.description}</p>

          </div>
          

          </div>

        
      ) : null}
      {loading ? <div>loading</div> : null}
      <Cart />
    </>
  );
}

export default ProductPage;
