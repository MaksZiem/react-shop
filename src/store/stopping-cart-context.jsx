import { createContext } from "react";

export const CartContex = createContext({
    items: [],
    addItemToCart: () => {}
})

