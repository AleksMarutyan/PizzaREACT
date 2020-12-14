const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            };
        }

        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items,
            }
            const currentItemsPrice = newItems[action.payload].totalPrice;
            const currentItemsCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentItemsPrice,
                totalCount: state.totalCount - currentItemsCount,
            }

        case 'CLEAR_CART':
            return {
                totalCount: 0,
                totalPrice: 0,
                items: {},
            }

        case 'ADD_PIZZA': {
            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            }

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0,);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0,);

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,
                }
            }

        case 'REMOVE_PIZZA': {
            const oldItems = state.items[action.payload].items
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            }

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0,);
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0,);

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,
            }
        }


        default:
            return state;
    }
}

export default cart;