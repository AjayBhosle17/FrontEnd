import React from "react";

export default function Reusable({text , onClick}){

    return <button onClick={onClick}>{text}</button>
}