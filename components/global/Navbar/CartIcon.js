import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

function CartIcon(props) {
  const cartItems = useSelector((state) => state.cart); // Assuming your cart slice is stored in the Redux store under the key 'cart'

  // Function to calculate the total count of items in the cart
  const getTotalItemCount = (cartItems) => {
    if (!cartItems || !Array.isArray(cartItems)) {
      return 0;
    }

    return cartItems.reduce((totalCount, currentItem) => {
      return totalCount + currentItem.Quantity;
    }, 0);
  };

  const totalCount = getTotalItemCount(cartItems);

  return (
    <div className='h-7'>
      <ShoppingCartIcon className={`h-7 w-7 ${props.className}`} />
      {totalCount > 0 && (
        <span className='w-4 h-4 bg-red-500 rounded-full p-1 text-[10px] text-white relative bottom-9 left-5'>
          {totalCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
