import React, { createContext, useReducer } from 'react';
import PosReducer from './PosReducer';
import API from '../../utils/API';

const initialState = {
  orderTotal: 0,
  orderCustomer: '',
  orderPayment_method: '',
  orderLocationId: null,
  orderLatitude: null,
  orderLongitude: null,
  orderId: '',
  orderItems: [],
  orderItemKey: 0,
  categories: [],
  items: '',
  itemEditKey: 0,
  error: null,
  categoryKey: '',
  displayItemKey: '',
  numberOfItemsForOrder: 1,
  reviewOrder: false,
  // loading: true,
};

// creates context
export const PosGlobalContext = createContext(initialState);
export const PosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PosReducer, initialState);

  const loadCategories = async () => {
    try {
      const result = await API.getCategories();
      dispatch({
        type: 'LOAD_CATEGORIES',
        payload: result.data,
      });
    } catch (err) {
      console.error(err + 'Category Broke');
    }
  };

  const loadInventory = async () => {
    try {
      const result = await API.getInventory();
      dispatch({
        type: 'LOAD_INVENTORY',
        payload: result.data,
      });
    } catch (err) {
      console.error(err + 'this shit fucked up');
    }
    return state;
  };

  // function to add new item in Inventory page

  const setCategoryKey = async (key) => {
    try {
      dispatch({
        type: 'SET_CATEGORY_KEY',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'Category Key est fucked');
    }
  };

  const displayItem = async (key) => {
    try {
      await dispatch({
        type: 'DISPLAY_ITEM',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'Display item error');
    }
  };

  const postCategories = async (category) => {
    try {
      const result = await API.postCategories(category);
      dispatch({
        type: 'POST_CATEGORY',
        payload: result.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const minusNumberOfItems = async (number) => {
    if (number > 0) {
      try {
        await dispatch({
          type: 'MINUS_NUMBER',
        });
      } catch (err) {
        console.error(err, 'minus number');
      }
    }
  };

  const addNumberOfItems = async () => {
    try {
      await dispatch({
        type: 'ADD_NUMBER',
      });
    } catch (err) {
      console.error(err, 'add error');
    }
  };

  const addToOrder = async (item, count) => {
    try {
      await dispatch({
        type: 'ADD_TO_ORDER',
        payload: {
          key: state.orderItems.length + 1,
          itemName: item.itemName,
          itemId: item.id,
          price: item.price,
          numberOfItem: count,
        },
      });
    } catch (err) {
      console.error(err, 'add to order broken');
    }
  };

  const falseReviewOrder = async () => {
    try {
      await dispatch({
        type: 'FALSE_REVIEW_ORDER',
      });
    } catch (err) {
      console.error(err, 'update review order');
    }
  };
  const trueReviewOrder = async (key) => {
    try {
      await dispatch({
        type: 'TRUE_REVIEW_ORDER',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'update review order');
    }
  };

  const updateOrderItem = async (newOrder, newTotal) => {
    try {
      await dispatch({
        type: 'UPDATE_ORDER_ITEM',
        payload: [newOrder, newTotal],
      });
    } catch (err) {
      console.error(err, 'updateOrderItem');
    }
  };

  return (
    <PosGlobalContext.Provider
      value={{
        order: state.order,
        items: state.items,
        itemEditKey: state.itemEditKey,
        orderItems: state.orderItems,
        orderTotal: state.orderTotal,
        categories: state.categories,
        categoryKey: state.categoryKey,
        orderItemKey: state.orderItemKey,
        setCategoryKey,
        loadCategories,
        loadInventory,
        postCategories,
        displayItem,
        displayItemKey: state.displayItemKey,
        minusNumberOfItems,
        addNumberOfItems,
        numberOfItemsForOrder: state.numberOfItemsForOrder,
        addToOrder,
        falseReviewOrder,
        trueReviewOrder,
        reviewOrder: state.reviewOrder,
        updateOrderItem,
      }}
    >
      {children}
    </PosGlobalContext.Provider>
  );
};

// Ajax
// get all from categories
// get all from inventories
// get all from orderItems
// ----/---- from sales page, view orders in each sale

// post new item to inventory (if new category, to categories)
// ---- add item option on inventory page

// post new order to orders and ordersByLocation and orderItems
// --- when order is paid for from Checkout page
// ----/---- populate orders
// ----/---- populate order info to by location
// ----/---- populate order id and items to orderItems

//   const postOrder = (order) => {
//     API.postOrder(order)
//       .then((res) => {
//         order.orderId = res.data.response.id;
//         // receive orderId as response and set to state
//       })
//       .catch((err) => {
//         console.error(err);
//       })
//       .then(() => {
//         order.items.map((item) => {
//           item.orderId = order.orderId;
//           API.postItemOrder(item)
//             .then((res) => {
//               console.log('hello');
//               return res;
//             })
//             .catch((err) => {
//               console.error(err);
//             });
//         });
//       })
//       .then(() => {
//         API.postOrderLocation(order)
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       });

// map throught items in order and add individually to
//   };
