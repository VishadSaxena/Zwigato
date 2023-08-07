import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlieStatus] = useState(true);

    useEffect( ()=> {
     
        window.addEventListener("offline", () => {
            setOnlieStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlieStatus(true);
        });
    
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;