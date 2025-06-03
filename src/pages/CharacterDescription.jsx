import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import storeReducer from '../store';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CharacterDescription = (props) => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const params = useParams()
    const [infoCharacter, setInfoCharacter] = useState({})

    console.log(params.id)

    function getPropierties() {
        fetch("https://www.swapi.tech/api/people/" + params.id)
            .then((response) => {
                if (!response.ok) throw new Error("Error al leer la informacion del personaje")
                return response.json()
            })
            .then((data) => {
                console.log(data.result.properties)
                setInfoCharacter(data.result.properties)

            })
            .catch((error) => { error })
    }

    useEffect(() => {
        getPropierties()
    }, [])


    let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${params.id}.jpg`
    return (
        <div className='container'>
            <div className="card mb-3 mt-5" style={{ width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImage} className="img-fluid img-thumbnail rounded-start" style={{ width: "70%" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-1">{infoCharacter.name}</h5>
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
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Skin Color</th>
                            <th scope="col">Hair Color</th>
                            <th scope="col">Height</th>
                            <th scope='col'>Birth year</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{infoCharacter.name}</td>
                            <td>{infoCharacter.gender}</td>
                            <td>{infoCharacter.skin_color}</td>
                            <td>{infoCharacter.hair_color}</td>
                            <td>{infoCharacter.height}</td>
                            <td>{infoCharacter.birth_year}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
