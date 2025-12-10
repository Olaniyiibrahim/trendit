import React, { useContext, useEffect, useState } from 'react'

const shopContext = React.createContext();
function AppProvider({children}){
        const [login , setLogin]= useState(false);
        const [showCart, setShowCart] = useState(false);
        const [shopping , setShopping] = useState(false);
        const [Btn , setBtn] = useState(null);  
        const [cart, setCart] = useState(() => {
        try {
            const storeValue = localStorage.getItem("cart");
                return storeValue ? JSON.parse(storeValue) : [];
                } catch (error) {
                // console.error("Error parsing cart from localStorage:", error);
                return [];
                }
            });
            
                useEffect(() => {
                    localStorage.setItem("cart", JSON.stringify(cart));
                }, []);
                
    function handleClick(){
        setLogin(red => (!red))
        setCart("")
        // setShowCart(false)
    }
    function handleClear(){
        setLogin(false)
    }
    function handleShopping(){
        setShopping(s => (!s))
        console.log("shopping")
    }
    function handleCart(item) {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
        setShowCart(true);
        // setLogin("");
    }
    function handleShawn(){
        setShowCart("")
        console.log("shawn")
    }   
    function handleBtn(){
        setBtn([])
        // setShowCart("") 
        console.log("btn")
    }
    // function handleClear(item){
    //     setCart(item.filter((clap) => clap.id !== item.id))
    // }   
    const contextValue = {
        handleBtn,
        handleCart,
        handleShawn,
        handleShopping,
        handleClear,
        showCart,
        setShowCart,
        handleClick,
        Btn,
        shopping,
        showCart,
        login,
        cart,
        // setCart
    }
    return (
        <shopContext.Provider value={contextValue}>
            {children}
        </shopContext.Provider>
    )
}

function useShop() {
    const context = useContext(shopContext);
    if (context === undefined)
        throw new Error("appContext was used outside AuthProvider");
    return context;
}

export {AppProvider, useShop};


