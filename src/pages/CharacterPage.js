import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../services/functions";
import CharInfo from "../components/charInfo/CharInfo";

export default function CharacterPage({ favorites, toggleFavorites }) {
    const [char, setChar] = useState(null);
    const { charId } = useParams();

    useEffect(() => {
        if (!charId) return;
        const setData = (data) => setChar(data);
        fetchData(
            `https://rickandmortyapi.com/api/character/${charId}`,
            () => {},
            setData
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return char ? (
        <main className="app-info">
            <img className="app-info-img" src={char.image} alt={char.name} />
            {CharInfo({ char, favorites, toggleFavorites })}
        </main>
    ) : (
        <div className="app-center">
            <h2 className="descr-error">{char?.error ? char.error : ""}</h2>
            <Link className="descr-link" to="/">
                <p>Back to main page</p>
            </Link>
        </div>
    );
}
//обработка загрузки и ошибок
