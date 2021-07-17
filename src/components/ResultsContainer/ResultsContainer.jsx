import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'

const ResultsContainer = ({suggestedNames})=>{
    const suggestNameJSX = suggestedNames.map((suggestedName)=>{
        return <NameCard key ={suggestedName} suggestedName = {suggestedName} />
    })
    return(
        <div className="result-container">
            {suggestNameJSX}
        </div>
    )
}
export default ResultsContainer;