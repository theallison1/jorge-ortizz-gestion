import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {

  const handleLogin = () => {
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🚗</Text>

      <Text style={styles.title}>
        ORTIZ AUTOMOTORES
      </Text>

      <Text style={styles.subtitle}>
        Plataforma de Gestión
      </Text>

      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          INGRESAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    fontSize: 70,
    textAlign: "center",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  subtitle: {
    color: "#AAA",
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#1F2937",
    color: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#DC2626",
    padding: 18,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

});