import { useEffect } from "react";
import axios from "axios";
import RenderList from "./RenderList";
import Navbar from "./Navbar";

const DirectoryList = () => {
    const [initialStore, setInitialStore] = useState({
        data: [],
    });

    useEffect(() => {
        axios
            .get(
                "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
            )
            .then(response => {
                const responseData = response.data.data;

                const arrayResponseData = [];

                responseData.map(item => {
                    return arrayResponseData.push(item);
                });

                setInitialStore({
                    ...initialStore,
                    data: arrayResponseData,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="principal-container">
            <Navbar />
            <div className="info">
                <b>
                    Estos establecimientos tienen OFERTAS para ti, ¡Descúbrelas!
                </b>
            </div>
            <div className="container">
                {initialStore.data.map(item => {
                    return (
                        <RenderList
                            key={item.id}
                            item={item}
                            name={item.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DirectoryList;
