export function fetchData(url, setStatus, setData) {
    setStatus("loading");
    fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            data.error ? setStatus("error") : setStatus("");
            setData(data);
        })
        .catch((e) => {
            console.log("Error:", e);
            setStatus("error");
        });
}

export const isFavourite = ({ id: ID }, arr) => arr.some(({ id }) => id === ID);
