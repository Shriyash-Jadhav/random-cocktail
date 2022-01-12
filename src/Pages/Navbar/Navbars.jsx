import React, { useState, useEffect } from "react";
import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Navbars = () => {
	return (
		<>
			<div
				style={{
					position: "sticky",
					top: "0",
					right: "0",
					left: "0",
					zIndex: "1000",
				}}
			>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<span
								role="img"
								aria-label="cokctail glass"
								style={{ fontSize: "35px" }}
							>
								🍸
							</span>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto"></Nav>
							<Nav>
								<Nav.Link href="/saved">
									<FontAwesomeIcon
										icon={faBookmark}
										style={{ fontSize: "35px" }}
									/>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</>
	);
};

export default Navbars;
