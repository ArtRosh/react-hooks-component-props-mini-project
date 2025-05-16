import React from "react"


function Header ({header}) {
    console.log(header)
    return(
        <div>
        <h1>{header.name}</h1>
        </div>
    )
}


export default Header

