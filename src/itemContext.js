import {createContext,useState,useContext} from 'react';
import CartModal from './components/CartModal';


const itemContext=createContext();

function useValue(){
    const value= useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    const [total,setTotal]= useState(0);
    const [item,setItem]=useState(0);
    const [showCart,setShowCart]=useState(false);
    const [cart,setCart]=useState([]);
    
    //event handlers for buttons
     const handleAdd= (prod)=>{
        // setTotal(total+price);
        // setItem(item+1);
        // console.log(prod);

        //find index to check item present in cart or not
        const index=cart.findIndex((item)=>item.id===prod.id);
        //if not then add one in the array
        if(index===-1){
            setCart([...cart,{...prod,qty:1}]);
            setTotal(total+prod.price)
        }else{
            cart[index].qty++;
            setCart(cart);
            console.log(cart);
            setTotal(total+cart[index].price);
           
        }
       
        setItem(item+1)
        
    }

    const handleRemove=(price)=>{
        if(total<=0){
            return
        }
        setTotal((prevState=>prevState-price));
        setItem(item-1);
    }

    const clear=()=>{
        setTotal(0);
        setItem(0);
        setCart([]);
    }

    const toggle=()=>{
        setShowCart(!showCart);
     }
    return(
        <itemContext.Provider value={{total,item,handleAdd,handleRemove,clear,toggle,cart}}> 
           {showCart && <CartModal toggle={toggle}/>}
            {children}
        </itemContext.Provider>

    )
}

export {itemContext,useValue};
export default CustomItemContext;