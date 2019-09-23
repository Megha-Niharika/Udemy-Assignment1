import React from "react"


const UserInput = (props) =>
{


    const style ={
        backgroundColor :"white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor :"pointer"
       };
    return (
    <div>
        <br></br>
        <input type="text" style={style} onChange={props.changed} value={props.currentName}/>
</div>)
}
export default UserInput