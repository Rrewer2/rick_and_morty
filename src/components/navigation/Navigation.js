import { useState } from "react";
import "./Navigation.scss";

export default function Navigation({
    info,
    isSearch,
    maxPage,
    currentPage,
    setCurPage,
}) {
    const [value, setValue] = useState(1);
    const nextPage = () =>
        setCurPage(currentPage === maxPage ? 1 : currentPage + 1);

    const prevPage = () =>
        setCurPage(currentPage === 1 ? maxPage : currentPage - 1);

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurPage(value);
    };

    const handleChange = (e) => {
        const newValue = +e.target.value;
        if (newValue > maxPage || newValue < 1) return;
        setValue(newValue);
    };

    if (isSearch) {
        return (
            <h3 className="navigation-results">
                Search results: {info?.count ? `${info.count} found` : ""}
            </h3>
        );
    }
    return (
        <nav className="navigation">
            <button className="navigation-button" onClick={prevPage}>
                {/* ← */}
                {"<"}
            </button>
            <h3 className="navigation-page">{currentPage}</h3>
            <button className="navigation-button" onClick={nextPage}>
                {/* → */}
                {">"}
            </button>
            <form className="navigation-form" onSubmit={handleSubmit}>
                <button className="navigation-form-button">To page</button>
                <input type="number" onChange={handleChange} value={value} />
            </form>
        </nav>
    );
}
