import Spinner from "../spinner/Spinner";
import { isFavourite } from "../../services/functions";
import { Link } from "react-router-dom";
import { heart } from "../../services/svgs";
import "./CharList.scss";

export default function CharList({
    chars,
    founded,
    favorites,
    toggleFavorites,
    setFounded,
    status,
}) {
    const items = !founded || founded.length ? founded : chars;

    const notFound = () => (
        <>
            <h2 className="search-error">{"No characters found :("}</h2>
            <button
                className="search-input-cleans"
                onClick={() => setFounded([])}
            >
                Back
            </button>
        </>
    );
    return (
        <article className="wrapper">
            {status === "loading" && <Spinner />}
            {status === "error" && (
                <h1 className="search-error">Nothing found</h1>
            )}
            {!status &&
                items?.length &&
                charsRender(items, favorites, toggleFavorites)}
            {!status && !items && notFound()}
        </article>
    );
}

const charsRender = (array, favorites, toggleFavorites) =>
    array.map((obj) => {
        const { id, name, image } = obj;
        const isFav = isFavourite(obj, favorites);
        const color = isFav ? "red" : "grey";
        return (
            <div key={id} className={`character${isFav ? " favourite" : ""}`}>
                <div className="character-img">
                    <img src={image} alt={name} />
                </div>

                <Link className="character-name" to={`/characters/${id}`}>
                    <p>{name}</p>
                </Link>
                <span
                    onClick={() => toggleFavorites(obj)}
                    className="character-heart"
                    // className={`character-heart${isFav ? "-fav" : ""}`}
                >
                    {heart(color)}
                </span>
            </div>
        );
    });
