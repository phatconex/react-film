import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ id, title, img, date, star }) => {
    return (
        <Link to={`/detail-movie/${id}`} className="cardmovie">
            <div className="thumb">
                <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="" />
            </div>
            <h3 className="mb-3 mt-2">{title}</h3>
            <div className="number d-flex align-items-center">
                <p className="day">{date}</p>
                <p className="rate">
                    <i className="fa-solid fa-star"></i>
                    {star}
                </p>
            </div>
        </Link>
    );
};

export default CardMovie;
