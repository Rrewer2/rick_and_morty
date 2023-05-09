import { lazy, useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Page404 from "./pages/Page404";
import Spinner from "./components/spinner/Spinner";
import "./App.scss";

const MainPage = lazy(() => import("./pages/MainPage"));
const CharacterPage = lazy(() => import("./pages/CharacterPage"));

export default function App() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem("favorite"));
        if (storageData) setFavorites(storageData);
    }, []);

    const toggleFavorites = (obj) => {
        const renewedFavorites = favorites.some(({ id }) => id === obj.id)
            ? favorites.filter(({ id }) => id !== obj.id)
            : [...favorites, obj];
        setFavorites(renewedFavorites);
        localStorage.setItem("favorite", JSON.stringify(renewedFavorites));
    };

    const props = { favorites, toggleFavorites };

    return (
        <BrowserRouter>
            <div className="app">
                <header className="app-header">
                    <Link className="app-title" to="/">
                        Rick and Morty
                    </Link>
                </header>
                <Suspense
                    fallback={
                        <div className="app-center">
                            <Spinner />
                        </div>
                    }
                >
                    <Routes>
                        <Route path="/" element={<MainPage {...props} />} />

                        <Route
                            path="/characters/:charId"
                            element={<CharacterPage {...props} />}
                        />

                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
                <footer className="app-footer">Rick & Morty fun page</footer>
            </div>
        </BrowserRouter>
    );
}
