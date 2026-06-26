import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colors from "../theme/colors";

export default function SettingsScreen({ onBack }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        ⚙️ Configuración
      </Text>

      <Text style={styles.subtitle}>
        Personalizá el sistema de Ortiz Automotores.
      </Text>

      <View style={styles.card}>
        <Text style={styles.option}>👤 Mi Perfil</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>🔒 Seguridad</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>🎨 Apariencia</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>📱 WhatsApp</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>🤖 Asistente IA</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>ℹ️ Acerca del sistema</Text>
      </View>

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
    padding: 20,
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 30,
  },

  card: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  option: {
    color: colors.text,
    fontSize: 18,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});