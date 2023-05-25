import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div
            className="app-center"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>Page doesn't exist</h1>
            <Link
                to="/"
                style={{
                    marginTop: "30px",
                    fontWeight: "bold",
                    color: "var(--color-txt-char)",
                    cursor: "pointer",
                }}
            >
                <h2>Go to main page</h2>
            </Link>
        </div>
    );
}
