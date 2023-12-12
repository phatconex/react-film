import React, { createContext, useContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const infoAPI = {
        apiLink: "https://api.themoviedb.org/3/",
        apiKey: "e9e9d8da18ae29fc430845952232787c",
    };
    return <ApiContext.Provider value={infoAPI}>{children}</ApiContext.Provider>;
};
export const useApi = () => {
    return useContext(ApiContext);
};
