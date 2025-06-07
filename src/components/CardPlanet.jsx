import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const CardPlanet = (props) => {

    const { store, dispatch } = useGlobalReducer()


    const urlImageAlt = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"

    const handleImageError = (e) => {
        e.target.src = urlImageAlt
    }

    const addNewFavorite = () => {
        const favoriteExist = store.favorites.find(favorite => favorite == props.name)
        if (!favoriteExist) {
            dispatch({
                type: "add_favorites",
                payload: props.name
            })
        }
        else {
            dispatch({
                type: "delete_favorites",
                payload: props.name
            })
        }
    }

    const isFavorite = () => {
        const favoriteExist = store.favorites.find(favorite => favorite == props.name)
        if (favoriteExist) {
            return true
        }
        return false
    }

    return (
        <div className="card" style={{ width: "200px" }}>
            <img src={props.url} onError={(e) => {
                handleImageError(e)
            }} className="card-img-top" alt="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg" />
            <div className="card-body text-start">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on.</p>

                <Link to={`/planet-description/${props.id}`}>
                    <button id={props.id} className="btn btn-primary">Learn more</button>
                </Link>

                <button className='ms-3 btn btn-light' onClick={() => {
                    addNewFavorite()                    
                }}><i className={isFavorite() == true ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}></i></button>
            </div>
        </div>
    )
}

export default CardPlanet