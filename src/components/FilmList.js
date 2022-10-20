import React, {Component} from 'react'
import TMDB from '../TMDB'
import FilmRow from './FilmRow'


class FilmList extends Component { 
    
    render (){
        const allFilms = this.props.films.map((film) => {
            return (
                <FilmRow film={film}/>
            )
        }) 
    //     <div className="film-row">
    //     <h1>{film.title}</h1>
    //   </div>)
        return (
            <div className="film-library">
                <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <h1>{allFilms}</h1>  
                </div>
            </div>
        )
    }
}

export default FilmList