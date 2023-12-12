import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useApi } from "../ApiContext";
import useFetch from "../useFetch";
import YouTube from "react-youtube";
import "./DetailMovie.css";
const DetailMovie = () => {
    const { apiLink, apiKey } = useApi();
    const { slug: movieId } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [trailer, setTrailer] = useState();
    const [youtubeLink, setYoutubeLink] = useState();
    const { data: dataDetail } = useFetch(`${apiLink}/movie/${movieId}?api_key=${apiKey}`);
    const { data: dataVideo } = useFetch(`${apiLink}/movie/${movieId}/videos?api_key=${apiKey}`);
    const handleCloseModal = () => {
        setOpenModal(false);
        setYoutubeLink("");
    };
    const handleOpenModal = () => {
        setOpenModal(true);
        setYoutubeLink(`https://www.youtube.com/embed/${trailer}`);
    };

    useEffect(() => {
        if (dataVideo.results) {
            const getTrailer = dataVideo.results.filter((item) => item.type === "Trailer");
            setTrailer(getTrailer[0].key);
        }
    }, [dataVideo.results]);
    return (
        <div className="detail mb-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src={`https://image.tmdb.org/t/p/w300${dataDetail.poster_path}`} alt={dataDetail.original_title} />
                    </Col>
                    <Col lg={9}>
                        <h1>{dataDetail.original_title}</h1>
                        <div className="yearPro d-flex align-items-center gap-2">
                            <p className="year mb-0">{dataDetail.release_date}</p>
                            <p className="kind">{dataDetail.genres && dataDetail.genres.map((item) => item.name).join(",")}</p>
                            <p className="time mb-0">
                                <i className="fa-regular fa-clock"></i> {dataDetail.runtime} min
                            </p>
                        </div>
                        <div className="rate d-flex align-items-center">
                            <p className="number-rate">{dataDetail.vote_average}%</p>
                            <p className="user">user score</p>
                            <p className="playtrailer" onClick={handleOpenModal}>
                                <i className="fa-solid fa-play"></i> Play trailer
                            </p>
                        </div>
                        <h3>Can You Bury Your Past?</h3>
                        <h2>Overview</h2>
                        <p className="overview">{dataDetail.overview}</p>
                    </Col>
                </Row>
            </Container>
            <div className={`popup ${openModal && "active"}`}>
                <div className="popup-inner">
                    <div className="text">
                        <h3>TRALIER</h3>
                        <span className="faX" onClick={handleCloseModal}>
                            <i className="fa-solid fa-x"></i>
                        </span>
                    </div>
                    <div className="traliervideo">
                        <iframe
                            width="100%"
                            height="500px"
                            src={youtubeLink}
                            title="YouTube video player"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovie;
