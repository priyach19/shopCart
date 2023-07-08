import styles from './styles/Nav.module.css';
import { useValue } from '../itemContext';
<styles />
function Navbar(){
    //destructuring props fron useValue context provider
    const {item,total,clear,toggle}=useValue();
    return(
        // navbar containing Total,no of items, cart and reset buttons
        <div className={styles.container}>
        <h1>Total:&#x20B9;{total}</h1>
        <h1>Items:{item}</h1>
        <div className={styles.ButtonsWrapper}>
            <button className={styles.button} onClick={toggle}>
                    Cart
            </button>
            <button className={styles.button} onClick={clear}>
                    Reset
            </button>
        </div>
        </div>
    )

}
export default Navbar;