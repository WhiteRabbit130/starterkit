import { useEffect } from "react";

import { getProducts } from "@api";

function Home () {
    useEffect(() => {
        getProducts().then(response => console.log(response));
    }, []);

    return (
        <div>
            This is Home Page
        </div>
    )
}

export default Home;