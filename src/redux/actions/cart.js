export const addPizzaToCart = (pizzaObj) =>  ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const clearCart = () =>  ({
    type: 'CLEAR_CART',
})

export const removeCartItem = (id) =>  ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})

export const plusPizza = (id) =>  ({
    type: 'ADD_PIZZA',
    payload: id,
})

export const minusPizza = (id) =>  ({
    type: 'REMOVE_PIZZA',
    payload: id,
})