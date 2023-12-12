import React from "react";

import Banner from "../../component/Banner/Banner";
import MovieList from "./MovieList";

const Home = () => {
    const listMovieHome = [
        {
            id: 1,
            type: "now_playing",
            title: "Now Playing Movie",
        },
        {
            id: 2,
            type: "upcoming",
            title: "Upcoming Movie",
        },
        {
            id: 3,
            type: "top_rated",
            title: "Top Rated Movie",
        },
    ];

    return (
        <div>
            <Banner></Banner>
            {listMovieHome.map((item) => (
                <MovieList key={item.id} type={item.type} title={item.title}></MovieList>
            ))}
        </div>
    );
};

export default Home;
