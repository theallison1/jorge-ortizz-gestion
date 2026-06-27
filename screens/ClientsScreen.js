import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colors from "../theme/colors";

export default function ClientsScreen({ onBack }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        👥 Clientes
      </Text>

      <Text style={styles.subtitle}>
        Aquí se gestionarán todos los clientes de la concesionaria.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onBack}
      >
        <Text style={styles.buttonText}>
          ← Volver al Dashboard
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});