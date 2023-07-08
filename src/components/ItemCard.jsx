import styles from './styles/ItemCard.module.css';

import { useValue } from '../itemContext';

function ItemCard({id,price,name}){
    const {handleAdd,handleRemove}= useValue();
    // const handleAdd= ()=>{
    //     setTotal(total+price);
    //     setItem(item+1);

    // }
    // const handleRemove=()=>{
    //     if(total<=0){
    //         return
    //     }
    //     setTotal((prevState=>prevState-price));
    //     setItem(item-1);

    // }
    return(
        
            <div className={styles.itemCard}>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemPrice}>&#x20B9;{price}</div>
            <div className={styles.itemButtonsWrapper}>
                <button className={styles.itemButton} onClick={()=>handleAdd({id,price,name})}>
                    ADD
                </button>
                <button className={styles.itemButton} onClick={()=>handleRemove(id)}>
                    REMOVE
                </button>
            </div>
            </div>
        
    )
}
export default ItemCard;