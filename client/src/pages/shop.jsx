
import ProductCard from "../components/productCard";
import React, { useEffect } from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

// function ProductList() {
//   const [state, dispatch] = useStoreContext();

//   const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   useEffect(() => {
//     if (data) {
      
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     } else if (!loading) {
//       idbPromise('products', 'get').then((products) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: products,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterProducts() {
//     if (!currentCategory) {
//       return state.products;
//     }

//     return state.products.filter(
//       (product) => product.category._id === currentCategory
//     );
//   }

//   return (
//     <div className="my-2">
//       <h2>Our Products:</h2>
//       {state.products.length ? (
//         <div className="flex-row">
//           {filterProducts().map((product) => (
//             <ProductCard
//               key={product._id}
//               _id={product._id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }

// export default ProductList;



class Shop extends React.Component {
    
  render() {
      return (
    <div>
         <h1>Shop</h1>
         <ProductCard/>
 </div>
  )
    }
  };
export default Shop