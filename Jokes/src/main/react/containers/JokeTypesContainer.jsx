
import React, { useEffect } from "react";
import JokeView from "../components/JokeView";
import { useStore } from "../createStore";

//functional component
const JokeTypesContainer = () => {
    const newJoke = useStore()

    useEffect(() => {
        newJoke.fetchJokeByType()
    },[])
    
    return newJoke.typeJokeStatus === "SUCCESS" ? 
        <JokeView 
            jokeInfo={newJoke.typeJoke}
        />
        : newJoke.typeJokeStatus === "FAILURE" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

    function onFailure(){
        return(
            <div>
                Oops something went wrong, please try again later...
            </div>
        )
    }
    
}

export default JokeTypesContainer