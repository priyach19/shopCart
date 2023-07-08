import styles from './styles/ItemCard.module.css';

import { useValue } from '../itemContext';

function ItemCard({id,price,name}){
    //destructure props from custom  context provider
    const {handleAdd,handleRemove}= useValue();
    return(
        // item card which shows the products description
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