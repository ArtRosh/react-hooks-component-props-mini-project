import React from "react"


function Header ({header}) {
    console.log(header)
    return(
       <header>
        <h1>{header}</h1>
      </header>
    )
}


export default Header
