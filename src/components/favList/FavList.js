import { Link } from "react-router-dom";
import { x } from "../../services/svgs";
import "./FavList.scss";

export default function FavList({ toggleFavorites, favorites }) {
    const favour = favorites.map((obj) => {
        const { id, name, image } = obj;
        return (
            <div key={id} className="char">
                <div className="char-wrap">
                    <img
                        className="char-img"
                        src={image}
                        alt={`${name.slice(0, 10)}...`}
                    />
                    <span
                        className="char-x"
                        onClick={() => toggleFavorites(obj)}
                    >
                        {x}
                    </span>
                </div>
                <Link className="char-name" to={`/characters/${id}`}>
                    <h3>{name}</h3>
                </Link>
            </div>
        );
    });

    return (
        <article className="favourites">
            <h3 className="favourites-title">Favorites</h3>
            {favorites.length ? (
                <div className="favourites-wrapper">{favour}</div>
            ) : (
                <h2 className="favourites-none">
                    You don't have favorite characters. Select someone to add to
                    the list
                </h2>
            )}
        </article>
    );
}
