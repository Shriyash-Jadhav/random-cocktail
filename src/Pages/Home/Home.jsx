import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbars from "../Navbar/Navbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useStoreActions, useStoreState } from "easy-peasy";
import "./Home.css";

const Home = () => {
	const [drink, setDrink] = useState(null);
	const addtoCart = useStoreActions((state) => state.drinks.addtoCart);
	const drinks = useStoreState((state) => state.drinks.cart);

	useEffect(() => {
		fetchRandomDrink();
	}, []);

	const fetchRandomDrink = async () => {
		try {
			const res = await axios.get(
				"https://www.thecocktaildb.com/api/json/v1/1/random.php"
			);
			setDrink(res.data.drinks[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCart = (drink) => addtoCart(drink);

	const isDrinkPresent =
		drinks.findIndex((drnk) => drnk?.idDrink === drink?.idDrink) !== -1;

	const refreshPage = () => window.location.reload(false);
	return (
		<div className="main-div">
			<Navbars />

			<div
				style={{
					maxWidth: "450px",
					margin: "50px auto",
					border: "8px double #000000",
					padding: "15px",
					borderRadius: "12px",
				}}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						<h4 style={{ margin: "0px" }}>
							<strong>{drink?.strDrink}</strong>
						</h4>
						<p>{drink?.strAlcoholic}</p>
					</div>
					{isDrinkPresent ? (
						<div
							style={{ fontSize: "35px", cursor: "pointer" }}
							onClick={() => handleCart(drink)}
						>
							<i class="fas fa-bookmark"></i>
						</div>
					) : (
						<div
							style={{ fontSize: "35px", cursor: "pointer" }}
							onClick={() => handleCart(drink)}
						>
							<i class="far fa-bookmark"></i>
						</div>
					)}
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginTop: "15px",
					}}
				>
					<div>
						<h5>
							<strong>Ingredients</strong>
						</h5>
						<ol style={{ margin: "0px", marginLeft: "-15px" }}>
							<li>{drink?.strIngredient1}</li>
							<li>{drink?.strIngredient2}</li>
							<li>{drink?.strIngredient3}</li>
						</ol>
					</div>
					<div>
						<img
							src={drink?.strDrinkThumb}
							alt="cocktail"
							style={{
								height: "120px",
								width: "120px",
								borderRadius: "12px",
							}}
						/>
					</div>
				</div>
				<div
					style={{
						marginTop: "20px",
					}}
				>
					<h5>
						<strong>Instructions</strong>
					</h5>
					<p>{drink?.strInstructions}</p>
				</div>
				<div>
					<p>
						<strong>Serve in:</strong> {drink?.strGlass}
					</p>
				</div>
			</div>

			<div className="refresh-btn" onClick={refreshPage}>
				<i class="fas fa-sync-alt"></i>
			</div>
		</div>
	);
};

export default Home;
