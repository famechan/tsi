import { useEffect } from "react";

const Register = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/register");
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error("Failed to fetch register data:", error);
            }
        };

        fetchData();
    }, []);

    return <h1>Регистрация</h1>
}

export default Register;
