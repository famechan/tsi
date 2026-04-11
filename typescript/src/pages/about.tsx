import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/about");
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error("Failed to fetch about data:", error);
            }
        };

        fetchData();
    }, []);

    return <h1>О нас</h1>
}

export default About;
