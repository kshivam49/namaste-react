import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid, {
            headers: {
                'x-cors-api-key': 'temp_cca7540d787d37b9f8583ad8e1a6e00f'
            }
        });
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    return resInfo;
}


export default useRestaurantMenu;