import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResourceCard from "../component/resourceCard.js";



export const Home = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getSWAPI('people');
        actions.getSWAPI('species');
        actions.getSWAPI('vehicles')
    }, []);

    return (
        <Container className="mt-5">
            <Row className="mt-2">
                <Col xs={12}>
                    <h1 className="text-primary text-decoration-underline mb-5">Personajes</h1>
                </Col>
            </Row>
            <Row className="flex-nowrap overflow-auto">
                <Col xs={12} className="d-flex flex-nowrap">
                    <div className="scroll-horizontal d-flex flex-nowrap">
                        {store.people.map((character) => {
                            return (
                                <ResourceCard key={character.uid} uid={character.uid} name={character.name} resource="people" />
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={12}>
                    <h1 className="text-primary text-decoration-underline mb-3 mt-3">Especies</h1>
                </Col>
            </Row>
            <Row className="mt-4 flex-nowrap overflow-auto">
                <Col xs={12} className="d-flex flex-nowrap">

                    <div className="scroll-horizontal d-flex flex-nowrap">
                        {store.species.map((specie) => {
                            return (
                                <ResourceCard key={specie.uid} uid={specie.uid} name={specie.name} resource="species" />
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={12}>
                    <h1 className="text-primary text-decoration-underline mb-3 mt-3">Vehículos</h1>
                </Col>
            </Row>
            <Row className="mt-4 flex-nowrap overflow-auto">
                <Col xs={12} className="d-flex flex-nowrap">

                    <div className="scroll-horizontal d-flex flex-nowrap">
                        {store.vehicles.map((planet) => {
                            return (
                                <ResourceCard key={planet.uid} uid={planet.uid} name={planet.name} resource="vehicles" />
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>


    )
}