import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = /Mobile|Android|iP(ad|hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Acceleration|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
            userAgent
        );
        setIsMobile(mobile);
    }, []);

    return isMobile;
};

export default useIsMobile;