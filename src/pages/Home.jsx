import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import CardElement from "../components/CardElement.jsx";
import { CharacterDescription } from "./CharacterDescription.jsx";
import PropTypes from "prop-types";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [peopleList, setPeopleList] = useState([])


	function getCharacters() {
		fetch("https://www.swapi.tech/api/people")
			.then((response) => {
				if (!response.ok) throw new Error("Error al cargar la informacion")
				return response.json()
			})
			.then((data) => {
				//setPeopleList(data.results)
				dispatch({
					type: "load_characters",
					payload: data.results
					
				})

			})
			.catch((error) => { error })

	}

	useEffect(() => {
		getCharacters()

	}, [])

	

	return (
		<div className="text-center mt-5">
			<h1 className="mb-4">STAR WARS BLOG</h1>
			
			<div className="container d-flex justify-content-center flex-column">
				<h3 className="fs-3 text-danger text-start">Characters</h3> <br />
				<ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
					{
						
						store.results.map((characters, index) => {
							let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${characters.uid}.jpg`
							console.log(urlImage)
							return(
								<li className="list-group-item">
									{characters.name}
									<CardElement id={characters.uid} name={characters.name} url={urlImage}/>
								</li>
							)
						})
					}
				</ul>
			</div>
			<div>
			<h5>ACA VAN LOS PLANETAS</h5>
			</div>

			<div>
			<h5>ACA VAN LAS NAVES</h5>
			</div>

		</div>
	);
}; 