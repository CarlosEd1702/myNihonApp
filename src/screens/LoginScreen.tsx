import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { loginUser, getUserRole } from "../firebase/auth";

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    const handleLogin = async () => {
        try {
            const user = await loginUser(email, password);
            const role = await getUserRole(user.uid); // Obtener el rol del usuario después de iniciar sesión
            alert("Login successful!");
            // Aquí puedes redirigir al usuario a otra pantalla o realizar otras acciones después del inicio de sesión
            if (role === 'teacher') {
                setTimeout(() => navigation.navigate("TeacherHome"), 100);
              } else if (role === 'student') {
                setTimeout(() => navigation.navigate("StudentHome"), 100);
              }
               else {
                alert("Rol no asignado correctamente.");
              }
        } catch (error: any) {
            setError("Login failed. Please check your credentials.");
            console.error("Login error:", error);
        }
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" autoCapitalize="none"/>

            <Text>Password:</Text>
            <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry autoCapitalize="none" />
            {error && <Text>{error}</Text>}

            <Button title="Login" onPress={handleLogin} />
            <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}
