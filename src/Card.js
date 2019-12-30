import React from 'react';
import './App.css';

const Card = ({name, email, id}) => {
    return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5  ">
        <img alt='this is a robot'  className= "robot" src={`https://robohash.org/${id}`} />
         <h2>{name}</h2>
         <p>{email}</p>
    </div>

    );

}

export default Card;