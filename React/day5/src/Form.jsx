
import React ,{useState} from "react";

function Form(){

    const[inputValue , setValue]=useState({

        username:'',
        email:'',
        password:'',
        isSubscribe:'',
        role:''
    })



    const handle=(event)=>{

        // inputValue[event.target.name]=event.target.value;
        
        const copyValue={...inputValue};
        copyValue[event.target.name]=event.target.value;
        setValue(copyValue)
        console.log(copyValue)
        
    }

        const handlesubmit=(event)=>{

            event.preventDefault();
            console.log('form data', inputValue);
        }
    return(
        
        <>
        <h2>Form Handling</h2>
        <form onSubmit={handlesubmit}>

            <div>
            <label htmlFor="username">Username: </label>
             <input type="text"  name='username' value={inputValue.username} placeholder='Enter UserName' onChange={handle} required/>
         
            </div>

            <br /><br />
            <div>
             
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='email'  name='email' value={inputValue.email} placeholder='Enter email' onChange={handle} required/>
                       </div>
                      <br />
                       <div>
                          
                           <label htmlFor="password">PassWord: </label>
                           <input type="password" id='password'  name='password' value={inputValue.password} placeholder='Enter password' onChange={handle} required/>
                       </div>
                          <br />
                       <div>
                          
                           <label htmlFor="isSubscribe">Subscribe: </label>
                           <input type="checkbox" id='isSubscribe'  name='isSubscribe' value={inputValue.isSubscribe} placeholder='Enter isSubscribe' onChange={handle} required/>
                       </div>
                          <br />
        
            <div>
                <br />
                <label htmlFor="role">Role: </label>
                <select name="role" id="role" value={inputValue.role} onChange={handle}>

                 <option value="">Select Role</option>
                 <option value="admin">admin</option>
                 <option value="user">user</option>
                 <option value="Guest">Guest</option>

               </select>
                
            </div>
            <br />

            <div>

                <button type="submit">Submit</button>
            </div>

        </form>
            
        </>
    )
}

export default Form;



// import React, { useState } from 'react'

// function Form() {

//    const[inputValue,setValue]=useState({

//         username:'',
//         email:'',
//         password:'',
//         isSubscribe:'',
//         role:''
//    }) 
// //    inputValue[event.target.name] = event.target.value;
   
// const handle=(event)=>{

//         const copyValue = {...inputValue};
//         copyValue[event.target.name] = event.target.value;
//         setValue(copyValue);

//         console.log(copyValue);
// }

//   return (

//     <>

//     <form>
//         <h2>Form Handling</h2>
//         <div>
             
//             <label htmlFor="username">Username: </label>
//             <input type="text" id='username'  name='username' value={inputValue.username} placeholder='Enter UserName' onChange={handle} required/>
//         </div>
//         <br />
//         <div>
             
//              <label htmlFor="email">Email: </label>
//              <input type="email" id='email'  name='email' value={"Ajay Bhosle"} placeholder='Enter email' required/>
//          </div>
//         <br />
//          <div>
             
//              <label htmlFor="password">PassWord: </label>
//              <input type="password" id='password'  name='password' value={"Ajay Bhosle"} placeholder='Enter password' required/>
//          </div>
//             <br />
//          <div>
             
//              <label htmlFor="isSubscribe">Subscribe: </label>
//              <input type="checkbox" id='isSubscribe'  name='isSubscribe' value={"Ajay Bhosle"} placeholder='Enter isSubscribe' required/>
//          </div>
//             <br />
//          <div>
             
//              <label htmlFor="role">Role: </label>
//              <select name="role" id="role" value={"role"}>

//                 <option value="">Select Role</option>
//                 <option value="admin">admin</option>
//                 <option value="user">user</option>
//                 <option value="Guest">Guest</option>

//              </select>
//          </div>

//         <br />
//          <button onClick={()=>{console.log(inputValue);}} type='submit'>Submit</button>

//     </form>
//     </>
//   )
// }

// export default Form