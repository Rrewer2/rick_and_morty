import { useState, useEffect } from "react";
import CharList from "../components/charList/CharList";
import FavList from "../components/favList/FavList";
import FindChar from "../components/findChar/FindChar";
import Navigation from "../components/navigation/Navigation";
import { fetchData } from "../services/functions";

export default function MainPage({ favorites, toggleFavorites }) {
    const [status, setStatus] = useState("");
    const [chars, setChars] = useState([]);
    const [founded, setFounded] = useState([]);
    const [currentPage, setCurPage] = useState(1);
    const [maxPage, setMaxPage] = useState(42);

    useEffect(() => {
        const setData = ({ results, info }) => {
            setChars(results);
            if (info?.pages && info.pages !== maxPage) setMaxPage(info.pages);
        };
        fetchData(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
            setStatus,
            setData
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    return (
        <main className="app-main">
            {FindChar({ setFounded })}
            <section className="app-characters">
                {Navigation({ founded, maxPage, currentPage, setCurPage })}
                {CharList({
                    chars,
                    favorites,
                    founded,
                    setFounded,
                    status,
                    toggleFavorites,
                })}
            </section>
            <section className="app-favorites">
                {FavList({ toggleFavorites, favorites })}
            </section>
        </main>
    );
}
