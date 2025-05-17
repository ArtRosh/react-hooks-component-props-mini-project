import React from "react"


function About({about}) {
    return(
         <aside>
                <img src={about.image} alt="blog logo" />
                <p>{about.about}</p>
        </aside>
    )
}


export default About
