import React, { useState } from "react";

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import VehiclesScreen from "./screens/VehiclesScreen";
import ClientsScreen from "./screens/ClientsScreen";
import SalesScreen from "./screens/SalesScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default function App() {

  const [screen, setScreen] = useState("login");

  switch (screen) {

    case "login":
      return (
        <LoginScreen
          onLogin={() => setScreen("dashboard")}
        />
      );

    case "dashboard":
      return (
        <DashboardScreen
          onNavigate={setScreen}
        />
      );

    case "vehicles":
      return (
        <VehiclesScreen
          onBack={() => setScreen("dashboard")}
        />
      );

    case "clients":
      return (
        <ClientsScreen
          onBack={() => setScreen("dashboard")}
        />
      );

    case "sales":
      return (
        <SalesScreen
          onBack={() => setScreen("dashboard")}
        />
      );

    case "settings":
      return (
        <SettingsScreen
          onBack={() => setScreen("dashboard")}
        />
      );

    default:
      return (
        <DashboardScreen
          onNavigate={setScreen}
        />
      );
  }
}