import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { useState } from "react";

const Login = () => {
    const [value, setValue] = useState("");
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