import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Navbars from "../Navbar/Navbars";
import {
	Row,
	Col,
	Container,
	Card,
	Button,
	Form,
	FormControl,
} from "react-bootstrap";
const Bookmark = () => {
	const cart = useStoreState((state) => state.drinks.cart);
	console.log(cart);
	return (
		<div>
			<Navbars />

			<Container>
				<Row className="mt-4">
					{cart &&
						cart.map((cocktail) => (
							<Col className="mb-5" xs={6} md={3} lg={3}>
								<Card
									border="primary"
									style={{ width: "18rem", borderRadius: "10px" }}
								>
									<Card.Img variant="top" src={cocktail?.strDrinkThumb} />
									<Card.Body>
										<Card.Title>{cocktail?.strDrink}</Card.Title>
										{/* <Card.Text>{cocktail?.strInstructions}</Card.Text> */}
									</Card.Body>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
};

export default Bookmark;
