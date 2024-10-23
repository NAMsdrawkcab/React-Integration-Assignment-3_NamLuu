import React, { Component } from "react";
import axios from "axios";
import JokeView from "../components/JokeView";
import { useStore } from "../createStore";

//class component
export class JokeByTypeContainer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeJoke: {},
            typeJokeStatus: null,
            jokeType: null
        }
    }

    componentDidMount() {
        this.jokeByTypeApiCall(null)
    }

    render() {
        // const storeInfo = useStore.getState();
        // console.log(storeInfo)
        const { typeJokeStatus, typeJoke, jokeType } = this.state

        return typeJokeStatus === "SUCCESS" ?
            <>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() => this.jokeByTypeApiCall(null)}>
                        Get Random Joke
                    </button>
                </div>
                <div>
                    <input
                        placeholder="Enter desired joke type"
                        type="text"
                        value={jokeType}
                        onChange={(event) => this.setState({jokeType: event.target.value})}
                    />
                    <button disabled={!jokeType} type="button" className="btn btn-info" onClick={() => this.jokeByTypeApiCall(type)}>
                        Fetch New Joke By Type
                    </button>
                </div>
                <JokeView
                    jokeInfo={typeJoke}
                />
            </>
            : typeJokeStatus === "FAILURE" ?
                this.onFailure()
                : <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }

    onFailure = () => {
        return (
            <div>
                Oops something went wrong, please try again later...
            </div>
        )
    }

    jokeByTypeApiCall = (newJokeType) => {
        const stateControl = (data, status) => {
            this.setState({ typeJoke: data, typeJokeStatus: status })
        }
        axios.get(`/joke/${!newJokeType ? "general" : newJokeType}/random`)
            .then(function (response) {
                stateControl(response.data, "SUCCESS");
            })
            .catch(function (error) {
                stateControl({}, "FAILURE")
                console.log(error)
            })
    }

}

export default JokeByTypeContainer2