import React from "react";
import { Container } from "react-bootstrap";
import { useApi } from "../ApiContext";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieList = ({ title, type }) => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    const { apiLink, apiKey } = useApi();
    const { data } = useFetch(`${apiLink}movie/${type}?api_key=${apiKey}&page=1`);
    return (
        <div className="listmovie">
            <Container>
                <div className="title">
                    <h3>ONLINE STREAMING</h3>
                    <h1>{title}</h1>
                </div>

                <Slider {...settings}>
                    {data.results &&
                        data.results.map((item) => (
                            <CardMovie
                                key={item.id}
                                id={item.id}
                                title={item.original_title}
                                date={item.release_date}
                                img={item.poster_path}
                                star={item.vote_average}
                            ></CardMovie>
                        ))}
                </Slider>
            </Container>
        </div>
    );
};

export default MovieList;
