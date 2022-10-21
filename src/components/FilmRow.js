import React,{ Component } from 'react' 
import FilmList from './FilmList'
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component{
    render(){
        return(         
            <div className="film-row">
                <Poster film = {this.props.film}/>
                <div className="film-summary">
                    <Fave/>
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split('')}</p>
                </div>
            </div>   
        )
    }
}
//  <h1>{this.props.films[0].title}</h1>



export default FilmRow