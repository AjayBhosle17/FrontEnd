import React, { useEffect, useState } from "react";

function GetMethod(){

    const [data, setdata]= useState([]);
    const [loading , setLoading]=useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response);
        if(!response.ok){
            throw new Error("Network Response is not Ok!");
        }
        return  response.json();


        })

        .then((data)=>{
            setdata(data)
            setLoading(false)

            console.log(data);
        })

        .catch((error) =>console.log("error",error));
    },[])
    return(
        <>
        <div>{
            loading?(

                <p>Loading...</p>
            ):(
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ajay</td>
                        <td>Hello CodeIterate</td>
                    </tr>
                </tbody>
            </table>
            )

            }
            
        </div>
        </>
    );
}
export default GetMethod;