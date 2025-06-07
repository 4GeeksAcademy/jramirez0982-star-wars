import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import CardElement from "../components/CardElement.jsx";
import CardPlanet from "../components/CardPlanet.jsx";
import CardStarship from "../components/CardStarship.jsx";
import { CharacterDescription } from "./CharacterDescription.jsx";
import PropTypes from "prop-types";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [planetsList, setPlanetsList] = useState([])
	const [peopleList, setPeopleList] = useState([])
	const [starshipList, setStarshipList] = useState([])


	function getCharacters() {
		fetch("https://www.swapi.tech/api/people")
			.then((response) => {
				if (!response.ok) throw new Error("Error al cargar la informacion")
				return response.json()
			})
			.then((data) => {
				setPeopleList(data.results)
				//dispatch({
				//	type: "load_characters",
				//	payload: data.results

				//})

			})
			.catch((error) => { error })

	}

	function getPlanets() {
		fetch("https://www.swapi.tech/api/planets")
			.then((response) => {
				if (!response.ok) throw new Error("Error al cargar la informacion de planetas")
				return response.json()
			})
			.then((data) => {
				setPlanetsList(data.results)
				console.log(planetsList)
			})
			.catch((error) => { error })
	}

	function getStarship() {
		fetch("https://www.swapi.tech/api/starships")
			.then((response) => {
				if (!response.ok) throw new Error("Error al cargar informacion de naves")
				return response.json()
			})
			.then((data) => {
				setStarshipList(data.results)
			})
			.catch((error) => { error })
	}


	useEffect(() => {
		getPlanets()
		console.log("ingrese a useefect y pase por planets")
		console.log(planetsList)
		getCharacters()
		getStarship()

	}, [])



	return (
		<div className="text-center mt-5">
			<h1 className="mb-4">STAR WARS BLOG</h1>

			<div className="container d-flex justify-content-center flex-column">
				<h3 className="fs-3 text-danger text-start">Characters</h3> <br />
				<ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
					{

						peopleList.map((characters, index) => {
							let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${characters.uid}.jpg`
							//console.log(urlImage)
							return (
								<li className="list-group-item">
									{characters.name}
									<CardElement id={characters.uid} name={characters.name} url={urlImage} />
								</li>
							)
						})
					}
				</ul>
			</div>

			<div>
				<div className="container d-flex justify-content-center flex-column mt-5">
					<h3 className="fs-3 text-danger text-start">Planets</h3> <br />
					<ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
						{

							planetsList.map((planets, index) => {
								let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${planets.uid}.jpg`
								//console.log(urlImage)
								return (
									<li className="list-group-item">
										{planets.name}
										<CardPlanet id={planets.uid} name={planets.name} url={urlImage} />
									</li>
								)
							})
						}
					</ul>
				</div>

			</div>
			<div className="container d-flex justify-content-center flex-column mt-5">
				<h3 className="fs-3 text-danger text-start">Starships</h3> <br />
				<ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
					{

						starshipList.map((starship, index) => {
							let urlImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${starship.uid}.jpg`
							//console.log(urlImage)
							return (
								<li className="list-group-item">
									{starship.name}
									<CardStarship id={starship.uid} name={starship.name} url={urlImage} />
								</li>
							)
						})
					}
				</ul>
			</div>
			<div>

			</div>

		</div>
	);
}; 