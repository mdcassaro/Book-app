import React from "react";
import "./style.css"
import ResultCard from"../ResultCard"
import API from "../utils/API";



function ResultContainer(){
    API.getBooks("Harry Potter")
    .then(res => 
        console.log(res)
    )
    .catch(err => console.log("error")) 
    return (
        <div >
            <h3>Results</h3>
            <ResultCard/>
        </div>

    ) 
}

export default ResultContainer