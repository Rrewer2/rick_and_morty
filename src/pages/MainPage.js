import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CharList from "../components/charList/CharList";
import FavList from "../components/favList/FavList";
import FindChar from "../components/findChar/FindChar";
import Navigation from "../components/navigation/Navigation";

export default function MainPage({ favorites, toggleFavorites }) {
    const [currentPage, setCurPage] = useState(1);
    const [query, setQuery] = useState("");
    const [pageStatus, pageData] = useFetch("character/?page=", currentPage);
    const [searchStatus, searchData] = useFetch("character/?name=", query);

    const clearQuery = () => setQuery("");

    return (
        <main className="app-main">
            {FindChar({ setQuery, clearQuery })}
            <section className="app-characters">
                {Navigation({
                    info: searchData?.info,
                    isSearch: query.length,
                    maxPage: pageData?.pages ?? 42,
                    currentPage,
                    setCurPage,
                })}
                {CharList({
                    data: query ? searchData : pageData,
                    clearQuery,
                    status: query ? searchStatus : pageStatus,
                    favorites,
                    toggleFavorites,
                })}
            </section>
            <section className="app-favorites">
                {FavList({ toggleFavorites, favorites })}
            </section>
        </main>
    );
}
