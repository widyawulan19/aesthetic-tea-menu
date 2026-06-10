import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AosInit() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return null;
}

export default AosInit;