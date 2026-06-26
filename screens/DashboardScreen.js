import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "../components/Header";
import StatCard from "../components/StatCard";
import MenuCard from "../components/MenuCard";
import colors from "../theme/colors";

export default function DashboardScreen({ onNavigate }) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
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

      <MenuCard
        icon="🚗"
        title="Vehículos"
        onPress={() => onNavigate("vehicles")}
      />

      <MenuCard
        icon="👥"
        title="Clientes"
        onPress={() => onNavigate("clients")}
      />

      <MenuCard
        icon="💰"
        title="Ventas"
        onPress={() => onNavigate("sales")}
      />

      <MenuCard
        icon="📄"
        title="Reservas"
        onPress={() => onNavigate("reservations")}
      />

      <MenuCard
        icon="💬"
        title="WhatsApp"
        onPress={() => onNavigate("whatsapp")}
      />

      <MenuCard
        icon="🤖"
        title="Asistente IA"
        onPress={() => onNavigate("ai")}
      />

      <MenuCard
        icon="⚙️"
        title="Configuración"
        onPress={() => onNavigate("settings")}
      />
    </ScrollView>
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
});