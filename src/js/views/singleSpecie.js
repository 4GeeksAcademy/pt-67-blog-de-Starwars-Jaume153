import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container as BootstrapContainer, Row, Col, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

const SingleSpecie = () => {   
    const params = useParams();
    const [specie, setSpecie] = useState(null);
    const [setPropertiesToShow] = useState([]);

    useEffect(() => {
        const fetchSpecie = async () => {            
                const response = await fetch(`https://www.swapi.tech/api/species/${params.theid}`);
                if (!response.ok) {
                    throw new Error(`Error obteniendo especie de API: ${response.statusText}`);
                }
                const data = await response.json();
                setSpecie(data.result.properties);

                const properties = Object.keys(data.result.properties);
                setPropertiesToShow(properties.filter(property => data.result.properties[property] !== ""));
            
        };

        fetchSpecie();
    }, [params.theid]);

    const renderSpecieDetails = () => {
        if (!specie) {
            return null;
        }

        return (
            <div className="container mt-5">
                <BootstrapContainer>
                    <Row>
                        <Col>
                            <Image
                                src={params.theid ? `https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg` : ""}
                            />
                        </Col>
                        <Col>
                            <h1>{specie.name}</h1>
                        {specie ? (
                            <>
                            <p>
                                <strong>Especie:</strong> {specie.name}<br />
                                <strong>Estatura:</strong> {specie.average_height} m<br />
                                <strong>Esperanza de vida:</strong> {specie.average_lifespan} years<br />
                                <strong>Clasificación:</strong> {specie.classification}<br />
                                <strong>Designación:</strong> {specie.designation}<br />
                                <strong>Color de ojos:</strong> {specie.eye_colors}<br />
                                <strong>Color de pelo:</strong> {specie.hair_colors}<br />
                                <strong>Idioma:</strong> {specie.language}<br />
                                <strong>Colores de piel:</strong> {specie.skin_colors}<br />
                            </p>
                            </>
                        ) : (
                            <p>Cargando...</p>
                        )}                        
                        </Col>
                    </Row>
                    <Link to="/">
                        <span className="btn btn-primary btn-lg mt-5" href="/" role="button">
                            Atrás
                        </span>
                    </Link>
                </BootstrapContainer>
            </div>
        );
    };

    return renderSpecieDetails();
};

export default SingleSpecie;