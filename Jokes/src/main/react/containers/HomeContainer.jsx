
import React, { useEffect } from "react";
import JokeView from "../components/JokeView";
import { useStore } from "../createStore";

//functional component
const HomeContainer = () => {
    const newJoke = useStore()

    useEffect(() => {
        newJoke.fetchRandomJoke()
    },[])
    
    return newJoke.randomJokeStatus === "SUCCESS" ? 
        <JokeView 
            jokeInfo={newJoke.random}
        />
        : newJoke.randomJokeStatuss === "FAILURE" ?
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

export default HomeContainer