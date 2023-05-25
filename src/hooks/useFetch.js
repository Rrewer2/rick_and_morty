import { useEffect, useRef, useState } from "react";

const fetchData = (endpoint) => {
    return fetch(`https://rickandmortyapi.com/api/${endpoint}`, {
        method: "GET",
    });
};

export default function useFetch(endpoint, param) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        if (param && param !== ref.current) {
            ref.current = param;
            setStatus("loading");
            fetchData(endpoint + param)
                .then((res) => res.json())
                .then((data) => {
                    setStatus("");
                    setData(data);
                })
                .catch((e) => {
                    console.log("Error:", e);
                    setStatus("error");
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return [status, data];
}
