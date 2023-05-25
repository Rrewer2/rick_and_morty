import Spinner from "../spinner/Spinner";
import { isFavourite } from "../../services/functions";
import { Link } from "react-router-dom";
import { heart } from "../../services/svgs";
import "./CharList.scss";

export default function CharList({
    data,
    clearQuery,
    status,
    favorites,
    toggleFavorites,
}) {
    const items = data?.results;
    const error = data?.error;
    const findError = (msg) => (
        <div>
            <h2 className="search-error">{msg}</h2>
            <button className="search-input-cleans" onClick={clearQuery}>
                Back
            </button>
        </div>
    );
    return (
        <article className="wrapper">
            {error && findError(error)}
            {status === "loading" && <Spinner />}
            {status === "error" && (
                <h2 className="search-error">Error Internet connection</h2>
            )}
            {!status &&
                items?.length &&
                charsRender(items, favorites, toggleFavorites)}
            {!status && !items?.length && !error && (
                <h2 className="search-error">Nothing found</h2>
            )}
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
                    <h3>{name}</h3>
                </Link>
                <span
                    onClick={() => toggleFavorites(obj)}
                    className="character-heart"
                >
                    {heart(color)}
                </span>
            </div>
        );
    });
