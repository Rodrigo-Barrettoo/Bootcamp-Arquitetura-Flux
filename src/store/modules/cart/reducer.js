import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const productId = draft.findIndex(p => p.id === action.product.id);

        productId >= 0
          ? (draft[productId].amount += 1)
          : draft.push({
              ...action.product,
              amount: 1,
            });
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productId = draft.findIndex(p => p.id === action.id);

        if (productId >= 0) draft.splice(productId, 1);
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productId = draft.findIndex(p => p.id === action.id);

        if (productId >= 0) draft[productId].amount = Number(action.amount);
      });
    }

    default:
      return state;
  }
}
