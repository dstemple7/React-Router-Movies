import React from 'react';
import {Link, useHistory, userRouterMatch, NavLink} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
       <NavLink to={`./${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
    ))}
    <Link className="home-button" to='/'>Home</Link>
  </div>
);

export default SavedList;