import React, { useState, useEffect } from "react";
import { useApi } from "../ApiContext";
import useFetch from "../useFetch";
import { Container, Row, Col } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import { useParams } from "react-router-dom";
const ListMovie = () => {
    const { apiLink, apiKey } = useApi();
    const { slug: keySearch } = useParams();
    const [page, setPage] = useState(1);
    const urlApi = keySearch
        ? `${apiLink}search/movie?api_key=${apiKey}&page=${page}&query=${keySearch}`
        : `${apiLink}discover/movie?api_key=${apiKey}&page=${page}`;
    const { data } = useFetch(urlApi);
    const [allMovies, setAllMovies] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    useEffect(() => {
        if (page === 1) {
            setAllMovies(data.results);
        } else {
            const newMovies = data.results.filter((movie) => !allMovies.includes(movie));
            if (keySearch && newMovies.length === 0) {
                setHasMoreData(false);
            }
            setAllMovies([...allMovies, ...newMovies]);
        }
    }, [data.results, page]);
    return (
        <div className="listmovie">
            <Container>
                <div className="title">
                    <h3>Filmlane</h3>
                    <h1>LIST MOVIE</h1>
                </div>

                <Row>
                    {allMovies &&
                        allMovies.map((item) => (
                            <Col xs={6} lg={3} key={item.id}>
                                <CardMovie
                                    id={item.id}
                                    title={item.original_title}
                                    date={item.release_date}
                                    img={item.poster_path}
                                    star={item.vote_average}
                                ></CardMovie>
                            </Col>
                        ))}
                </Row>

                <div className="show">
                    {hasMoreData && (
                        <button className="show-more" onClick={handleShowMore}>
                            <i className="fa-solid fa-play"></i> SHOW MORE
                        </button>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default ListMovie;
