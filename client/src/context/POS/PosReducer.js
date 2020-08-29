/* eslint-disable default-case */

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_INVENTORY':
      return {
        ...state,
        items: action.payload,
      };

    case 'LOAD_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };

    case 'POST_CATEGORY':
      return {
        ...state,
        categories: [...state, action.payload],
      };
    case 'SET_CATEGORY_KEY':
      return {
        ...state,
        categoryKey: action.payload,
      };
    case 'DISPLAY_ITEM':
      return {
        ...state,
        displayItemKey: action.payload,
      };
    case 'MINUS_NUMBER':
      return {
        ...state,
        numberOfItemsForOrder: state.numberOfItemsForOrder - 1,
      };
    case 'ADD_NUMBER':
      return {
        ...state,
        numberOfItemsForOrder: state.numberOfItemsForOrder + 1,
      };
    case 'ADD_TO_ORDER':
      const orderItems = [...state.orderItems, action.payload];
      return {
        ...state,

        numberOfItemsForOrder: 1,
        orderItems: orderItems,
        orderTotal: orderItems.reduce((total, currentItem) => {
          const itemTotal = currentItem.numberOfItem * currentItem.price;
          return total + itemTotal;
        }, 0),
        // orderItemKey: state.orderItems.length,
      };
    case 'FALSE_REVIEW_ORDER':
      return {
        ...state,
        reviewOrder: false,
      };
    case 'TRUE_REVIEW_ORDER':
      return {
        ...state,
        itemEditKey: parseInt(action.payload),
        reviewOrder: true,
      };
    case 'UPDATE_ORDER_ITEM':
      return {
        ...state,
        orderItems: action.payload[0],
        orderTotal: action.payload[1],
      };

    // return {
    //   ...state,
    //   orderTotal: newTotal,
    // };
    default:
      return state;
  }
};
