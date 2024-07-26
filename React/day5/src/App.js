import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Login from './Login';

import Profile from './Profile';
import Propspass from './Propspass';
import { useState } from 'react';
import Hook1 from './Hook1';
import Style1 from './Style1';
import Reusable from './Reusable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import Navbar from './Component/Navbar';
import About from './Component/About'
import Service from './Component/Service';
import Page from './Component/Page';
import GetMethod from './GetMethod';
import ToDoList from './Component/TODoList';
import { useSelector , useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions';


function App() {
  const myState= useSelector((state)=> state.changeTheNumber)
  const dispatch=useDispatch();

  const handleButtonClick=()=>{

    console.log("Button Clicked");
  }

  const [count,setCount]=useState(0);

  const increment=()=>{

    setCount(count+1);
  }

  const click=()=>{

      console.log("Button Click");  
  }

  return (
    <>
    <div className="App">
{/*       
        <Form/>
        <Profile/>

        <Login/> */}  
       
          
            {/* <Propspass handle={handleButtonClick} count={count} increment={increment}/>
            <h2>Are baba {count}</h2> */}


            {/* Example 3 */}

            {/* <Hook1/> */}

            {/* <Style1/> */}
            {/* <Reusable text="click Me"  onClick={click}/>
            <Reusable text="submit"  onClick={click}/> */}

            {/* <h1> Hello ! React Router V6 </h1>
            <BrowserRouter>
          
                <Navbar/> 
                <Routes>
               
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/service' element={<Service/>}/> */}

                  {/* <Route path='/*' element={<h1 style={{color:White, backgroundColor:Black}}>404 Page Not Found</h1>}></Route> */}

                  {/* <Route to='/*' element={<Page/>}/>
                </Routes>
            </BrowserRouter>
            <h2> Fetch API get Method</h2>  

            <GetMethod/> */}

            {/* <ToDoList /> */}

            <h2> Welcome To Redux</h2>

            <h1>Increment /  Decrement Counter</h1>
            <h4>using React and Redux</h4>

            <div className='quantity'>
              <a className = "quantity_minus" title='Decrement' onClick={()=>dispatch(decNumber()) }><span>-</span></a>
              <input name='quantity' type='text' className='quantity__input' value={myState} />
              <a className='quantity__plus' title='Increment' onClick={()=>dispatch(incNumber()) }><span> + </span></a>

            </div>


     </div>
     </>
  );
}

export default App;
