import react , {useState}from 'react'

function Profile(){

    const isLoggedIn=true;
    const item=['Apple','Orange', 'Banana'];
    // Example 3

    const isAuth=true;
    return(

        <>
            <h2>Conditional Rendering</h2>

            {/* Example 1 */}
            {isLoggedIn? <h2>WelCome User</h2>: <h2>Welcome Guest</h2> }


            {/* Example 2 */}

            <div>
                {item.length>0?(

                    <ul>
                        {
                            item.map((item,index)=>(

                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                ):(
                    <p>No Items to Display</p>
                )}
            </div>

            {/* Example 3 */}

            <div>
                {isAuth&& (<button onClick={()=> console.log("Logged out")}> Logout</button>)}
            </div>
        </>
    )
}

export default Profile;