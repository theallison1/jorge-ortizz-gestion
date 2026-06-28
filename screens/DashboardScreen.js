import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Header from "../components/Header";
import StatCard from "../components/StatCard";
import colors from "../theme/colors";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Header title="ORTIZ AUTOMOTORES" />

      <Text style={styles.welcome}>
        Bienvenido Nicolás 👋
      </Text>

      <View style={styles.statsContainer}>
        <StatCard icon="🚗" value="125" title="Vehículos" />
        <StatCard icon="💰" value="18" title="Ventas" />
        <StatCard icon="👥" value="240" title="Clientes" />
        <StatCard icon="📄" value="12" title="Reservas" />
      </View>

      <Text style={styles.sectionTitle}>
        Accesos rápidos
      </Text>

      {/* Botones de navegación */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Vehicles")}
      >
        <Text style={styles.cardText}>🚗 Vehículos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Clients")}
      >
        <Text style={styles.cardText}>👥 Clientes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Sales")}
      >
        <Text style={styles.cardText}>💰 Ventas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.cardText}>⚙ Configuración</Text>
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

  welcome: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },

  cardText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
});