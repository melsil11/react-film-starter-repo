import React,{ Component } from 'react' 
import FilmList from './FilmList'

class FilmRow extends Component{
    render(){
        return(         
            <div className="film-row">
            <img src={`https://image.tmdb.org/t/p/w780/}${this.props.poster_path}`}alt="" /> 
            <div className="film-summary">
            <h1>{this.props.film.title}</h1>
            <p>{this.props.film.release_date.split('')}</p>
            </div>
            </div>   
        )
    }
}
//  <h1>{this.props.films[0].title}</h1>



export default FilmRow