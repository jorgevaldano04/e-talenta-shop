'use client'

import { CartContexProvider } from "@/hooks/useCart"

interface CartProviderProps {
    children: React.ReactNode
}

const CartProvider: React.FC<CartProviderProps> =
({children}) => {
    return (
        <CartContexProvider>{children}</CartContexProvider>
    )
}

export default CartProvider;