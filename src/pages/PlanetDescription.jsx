import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import storeReducer from '../store';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetDescription = (props) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const params = useParams()
    const [infoPlanet, setInfoPlanet] = useState({})


    console.log(params.id)

    function getPropertiesPlanet() {
        fetch("https://www.swapi.tech/api/planets/" + params.id)
            .then((response) => {
                if (!response.ok) throw new Error("Error al leer la informacion del personaje")
                return response.json()
            })
            .then((data) => {
                console.log("estoy leyendo datos")
                console.log(data.result.properties)
                setInfoPlanet(data.result.properties)

            })
            .catch((error) => { error })
    }

    useEffect(() => {
        getPropertiesPlanet()
    }, [])


    const urlImageAlt = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"

    const handleImageError = (e) => {
        e.target.src = urlImageAlt
    }

    let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${params.id}.jpg`
        //console.log(urlImage)

    return (
        <div className='container'>
            <div className="card mb-3 mt-5" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImage} onError={(e)=>{
                            handleImageError(e)
                        }} className="img-fluid img-thumbnail rounded-start" style={{ width: "70%" }}
                            alt="Imagen" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-1">{infoPlanet.name}</h5>
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
                            <th scope="col">Climate</th>
                            <th scope="col">Surface water</th>
                            <th scope="col">Diameter</th>
                            <th scope="col">Population</th>
                            <th scope="col">Gravity</th>
                            <th scope='col'>Terrain</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{infoPlanet.climate}</td>
                            <td>{infoPlanet.surface_water}</td>
                            <td>{infoPlanet.diameter}</td>
                            <td>{infoPlanet.population}</td>
                            <td>{infoPlanet.gravity}</td>
                            <td>{infoPlanet.terrain}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
