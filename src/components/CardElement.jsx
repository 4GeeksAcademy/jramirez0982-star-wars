import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const CardElement = (props) => {



    return (
        <div className="card" style={{ width: "200px" }}>
            <img src={props.url} class="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on.</p>
                
                <Link to={`/character-description/${props.id}`}>
                    <button id={props.id} className="btn btn-primary">Learn more</button>
                </Link>
                
                <button className='ms-3 btn btn-light'><i class="fa-regular fa-heart"></i></button>
            </div>
        </div>
    )
}

export default CardElement