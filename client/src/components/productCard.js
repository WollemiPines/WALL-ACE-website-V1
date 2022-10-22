import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


function ProductCard(item) {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>{quantity} {pluralize("item", quantity)} in stock</div>
    //     <span>${price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>
    // </div>


<div className='product-card'>
 
    <Link to={`/products/${_id}`}>
  <CardActionArea>
  <img
            src={`/images/${image}`}
            alt={name}
            height = "200px"
          />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {price}
      </Typography>
    </CardContent>
  </CardActionArea>
  </Link>
  <CardActions>
    <Button onClick={addToCart} size="small" color="primary">
      Add to Cart
    </Button>
    <Button size="small" color="primary">
      Remove From Cart
    </Button>
  </CardActions>

</div>
  );
}

export default ProductCard
