import "./Navigation.scss";

export default function Navigation({
    founded,
    maxPage,
    currentPage,
    setCurPage,
}) {
    const nextPage = () =>
        setCurPage(currentPage === maxPage ? 1 : currentPage + 1);

    const prevPage = () =>
        setCurPage(currentPage === 1 ? maxPage : currentPage - 1);

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurPage(+event.target[0].value);
    };

    return founded?.length ? (
        <h3 className="navigation-results">Search results:</h3>
    ) : (
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
                <p>Go to the page №</p>
                <input type="number" />
            </form>
        </nav>
    );
}
