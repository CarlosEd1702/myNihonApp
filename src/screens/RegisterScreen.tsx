import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { registerUser } from "../firebase/auth";

export default function RegisterScreen() {

        const [name, setName] = useState("");
        const [level, setLevel] = useState("");
        const [surname, setSurname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [role, setRole] = useState<'teacher' | 'student' | null>(null); // Define el rol del usuario (teacher o student)
        const [error, setError] = useState<string | null>(null); // Estado para manejar errores

        const handleRegister = async () => {
            if(!role) {
                setError("Please select a role (teacher or student)");
                return;
            }
            try {
                await registerUser(email, password, role);
                alert("Registration successful!");
                // Aquí puedes redirigir al usuario a otra pantalla o realizar otras acciones después del registro
            }
            catch (error) {
                setError("Registration failed. Please try again.");
                console.error("Registration error:", error);
            }
        };

        return (
            <View>
                <Text>Name:</Text>
                <TextInput value={name} onChangeText={setName} placeholder="Enter your full name" autoCapitalize="none"/>

                <Text>Level:</Text>
                <TextInput value={level} onChangeText={setLevel} placeholder="Enter your level" autoCapitalize="none"/>

                <Text>User:</Text>
                <TextInput value={surname} onChangeText={setSurname} placeholder="Enter your user" autoCapitalize="none"/>

                <Text>Email:</Text>
                <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" autoCapitalize="none"/>

                <Text>Contraseña:</Text>
                <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry autoCapitalize="none"/>

                <Button title="Soy Maestro" onPress={() => setRole('teacher')} />
                <Button title="Soy Estudiante" onPress={() => setRole('student')} />

                <Button title="Register" onPress={handleRegister} />
            </View>
        );
};