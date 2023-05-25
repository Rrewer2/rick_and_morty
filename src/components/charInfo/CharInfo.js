import { isFavourite } from "../../services/functions";
import "./CharInfo.scss";

export default function CharInfo({ char, favorites, toggleFavorites }) {
    return (
        <div className="app-info">
            <img className="app-info-img" src={char.image} alt={char.name} />
            <div className="descr">
                {Object.entries(char).map(([key, value]) => (
                    <h2 className="descr-text" key={key}>
                        {descriptions(key, value)}
                    </h2>
                ))}
                <label className="descr-label">
                    <h2 className="descr-title">Favorite</h2>
                    <input
                        type="checkbox"
                        checked={isFavourite(char, favorites)}
                        onChange={() => toggleFavorites(char)}
                    />
                </label>
            </div>
        </div>
    );
}

const descriptions = (key, value) => {
    if (["image", "url", "type"].includes(key)) return "";
    if (key === "created") return `${key}: ${value.slice(0, 10)}`;
    if (typeof value === "string" && !value.includes("unknown"))
        return `${key}: ${value}`;
    if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value.name !== "unknown"
    )
        return `${key}: ${value.name}`;
    if (Array.isArray(value))
        // return <h2>{`${key}: ${value.join(", ")}`}</h2>;
        return "";
    return "";
};
