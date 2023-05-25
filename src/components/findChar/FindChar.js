import { useRef, useEffect, useState } from "react";
import { magnifyingGlass } from "../../services/svgs";
import "./FindChar.scss";

export default function FindChar({ setQuery, clearQuery }) {
    const [status, setStatus] = useState(false);
    const input = useRef({});

    useEffect(() => {
        const fn = () => {
            setStatus(false);
        };
        document.addEventListener("click", fn);

        return () => document.removeEventListener("click", fn);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!status) {
            setStatus(true);
            input.current.focus();
            return;
        }
        setQuery(event.target[0].value);
    };

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className={`search-input ${status ? "visible" : "hidden"}`}
                type="text"
                placeholder="Enter name"
                ref={input}
                onClick={stopPropagation}
            />
            <input
                className={`search-clean${status ? "-visible" : ""}`}
                type="reset"
                value="&#215;"
                onClick={(e) => {
                    stopPropagation(e);
                    clearQuery();
                }}
            />
            <button onClick={stopPropagation} className="search-input-find">
                {magnifyingGlass}
            </button>
        </form>
    );
}
