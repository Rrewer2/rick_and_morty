import { Link, useParams } from "react-router-dom";
import CharInfo from "../components/charInfo/CharInfo";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/spinner/Spinner";

export default function CharacterPage({ favorites, toggleFavorites }) {
    const { charId } = useParams();
    const [status, char] = useFetch("character/", charId);

    const errorMessage = (
        <>
            <h2 className="descr-error">
                {char?.error ?? "Error Internet connection"}
            </h2>
            <Link className="descr-link" to="/">
                <span>Back to main page</span>
            </Link>
        </>
    );
    const errorOrLoading = (
        <div className="app-center">
            {status === "loading" && <Spinner />}
            {status === "error" && errorMessage}
        </div>
    );

    return (
        <main>
            {status && errorOrLoading}
            {char && CharInfo({ char, favorites, toggleFavorites })}
        </main>
    );
}
