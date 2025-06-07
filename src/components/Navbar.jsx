import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from 'react'
import CardElement from "./CardElement.jsx";



export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	const [classIcon, setClassIcon] = useState("")

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex align-items-center">
				<Link to="/" className="d-flex align-items-center">
					<img
						src="https://static.wikia.nocookie.net/fictionalcrossover/images/2/2f/Star_Wars_Logo.png/revision/latest?cb=20240117225716"
						style={{ height: "40px", objectFit: "contain" }}
						alt="Star Wars Logo"
					/>
				</Link>

				<div className="ms-auto dropdown-center">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						My Favorites
					</button>
					<ul className="dropdown-menu">
						<li>
							{
								store.favorites.map((favorite, index) => {
									return (
										<div className="container d-flex flex-row ms-0 p-0">
											<a className="dropdown-item">{favorite}</a>
											<button onClick={(e)=>{
												
												e.stopPropagation()
												dispatch({
													type: "delete_favorites",
													payload: favorite
												})
												
											}}><i className="fa-solid fa-trash"></i></button>
										</div>
									)
								})

							}
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	);
};