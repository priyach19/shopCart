import Items from './components/Items';
import Navbar from './components/Navbar';
// import {useState} from 'react';
import CustomItemContext from './itemContext';

function App() {
  //these states move to custom context provider so that can be used by children eg. <Item>and <Navbar> components
  // let [total,setTotal]= useState(20);
  // let [item,setItem]=useState(0);

  return (
    // this is custom context provider for making all context in one file
    <CustomItemContext>
         
{/* <itemContext.Provider value={{total,setTotal}}>-->this is used when creating one context for item and total  */}
    <div className='App'>
      <h1>Shopping Cart</h1>
      
      <Navbar/>
      <Items/>
    </div>
    {/* </itemContext.Provider> */}

    </CustomItemContext>
 

  );
}

export default App;
