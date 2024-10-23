import React from "react";

//functional component
const JokeView = (props) => {
    const {jokeInfo} = props

    
    return(
        <div>
            <h1>
                Hello World
            </h1>
            <div>
                {jokeInfo.setup}
            </div>
            <div>
                {jokeInfo.punchline}
            </div>
         </div>
    )
    
    
}

export default JokeView;