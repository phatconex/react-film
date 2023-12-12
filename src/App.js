import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import ListMovie from "./component/ListMovie/ListMovie";
import DetailMovie from "./component/DetailMovie/DetailMovie";
import { ApiProvider } from "./component/ApiContext";
function App() {
    return (
        <ApiProvider>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/list-movie" element={<ListMovie />}></Route>
                <Route path="/list-movie/:slug" element={<ListMovie />}></Route>
                <Route path="/detail-movie/:slug" element={<DetailMovie />}></Route>
            </Routes>

            <Footer></Footer>
        </ApiProvider>
    );
}

export default App;
