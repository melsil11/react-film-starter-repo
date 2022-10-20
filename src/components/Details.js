import React, {Component} from 'react'
import TMDB from '../TMDB'

class Details extends Component { 
state = {
    detailsToDisplay: this.props.TMDB
}

    render (){
        return (
            <>
            <div className="film-library">
                <div className="film-details">
                    <h1 className="section-title">DETAILS</h1>
                </div>
            </div>
            </>
        )
    }
}
export default Details 
