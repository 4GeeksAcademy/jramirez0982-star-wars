import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import storeReducer from '../store';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const StarshiptDescription = (props) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const params = useParams()
    const [infoStarship, setInfoStarship] = useState({})


    console.log(params.id)

    function getPropertiesStarship() {
        fetch("https://www.swapi.tech/api/starships/" + params.id)
            .then((response) => {
                if (!response.ok) throw new Error("Error al leer la informacion del personaje")
                return response.json()
            })
            .then((data) => {
                console.log("estoy leyendo datos")
                console.log(data.result.properties)
                setInfoStarship(data.result.properties)

            })
            .catch((error) => { error })
    }

    useEffect(() => {
        getPropertiesStarship()
    }, [])

    const urlImageAlt = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"


    const handleImageError = (e) => {
        e.target.src = urlImageAlt
    }


    let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${params.id}.jpg`
    //console.log(urlImage)

    return (
        <div className='container'>
            <div className="card mb-3 mt-5" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImage} onError={(e)=>{
                            handleImageError(e)
                        }} className="img-fluid img-thumbnail rounded-start" style={{ width: "70%" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-1">{infoStarship.name}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda quasi dolor. Fugit iusto sint sit distinctio, laborum quia a ducimus magni cupiditate mollitia dolor praesentium. Expedita et nesciunt repudiandae illum, fuga dolores fugiat ex facilis magnam eveniet, commodi exercitationem voluptatibus accusantium dignissimos excepturi qui consequatur quas hic ullam fugit?</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center text-center text-danger'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Starship Class</th>
                            <th scope="col">Passengers</th>
                            <th scope="col">Cargo Capacity</th>
                            <th scope="col">Consumables</th>
                            <th scope="col">Length</th>
                            <th scope='col'>Crew</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{infoStarship.starship_class}</td>
                            <td>{infoStarship.passengers}</td>
                            <td>{infoStarship.cargo_capacity}</td>
                            <td>{infoStarship.consumables}</td>
                            <td>{infoStarship.length}</td>
                            <td>{infoStarship.crew}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
