import { useState, useEffect, useRef } from "react";
import { fetchData } from "../../services/functions";
import { magnifyingGlass } from "../../services/svgs";
import "./FindChar.scss";

export default function FindChar({ setFounded }) {
    const [status, setStatus] = useState("");
    const [query, setQuery] = useState("");
    const ref = useRef({});
    const ref2 = useRef({});

    useEffect(() => {
        if (!query) return setFounded([]);
        const setData = ({ results }) => setFounded(results);
        // console.log("request", query);
        fetchData(
            `https://rickandmortyapi.com/api/character/?name=${query}`,
            () => {},
            setData
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!status) {
            setStatus("ready");
            return ref.current.focus();
        }

        setQuery(event.target[0].value);
    };
    const clear = () => {
        setFounded([]);
        setStatus("");
    };
    const getClass = (status) =>
        `${status === "ready" ? " visible" : ""}${
            status === "" ? " hidden" : ""
        }`;

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className={`search-input${getClass(status)}`}
                    type="text"
                    placeholder="Enter name"
                    ref={ref}
                    // onBlur={clear}
                />
                <button ref={ref2} className="search-input-find">
                    {magnifyingGlass}
                </button>
                <input
                    className="search-input-cleans"
                    type="reset"
                    value="&#215;"
                    onClick={clear}
                />
            </form>
            {/* <button className="search-input-cleans" onClick={clear}>
                Back
            </button> */}
            {/* {status === "loading" && (
                <p className="search-loading">Loading...</p>
            )}
            {status === "error" && (
                <p className="search-error">Nothing found</p>
            )} */}
        </div>
    );
}
