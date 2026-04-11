import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { useEffect, useState } from "react";

const Login = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/login");
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error("Failed to fetch login data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <Text variant="title">Введите логин</Text>
            <Input
                color="primary"
                size="small"
                placeholder="Логин"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></Input>
            <Button
                color="primary"
                size="small"
                title="Вход"
                onClick={() => console.log("Хелло")}
                disabled
            ></Button>
        </div>
    ) 
}

export default Login;
