import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
function Results({result}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 
         xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
            {result.results.map((result) =>(
                <Thumbnail result={result} key={result.id}/>
            ))}
        </FlipMove>
    )
}

export default Results