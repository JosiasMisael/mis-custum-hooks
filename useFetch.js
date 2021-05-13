import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {

    const isMoutend = useRef(true);
    const [state, setstate] = useState({ data: [], loading: true, error: null });

    useEffect(() => {
        return () => {
            isMoutend.current = false;
        }
    }, [])

    useEffect(() => {
        setstate({ data: [], loading: true, error: null });
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    if (isMoutend.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data,
                        })
                    }
            });

    }, [url])

    return state;
}

export default useFetch

