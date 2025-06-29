
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/components/HomePage";
import MenuPage from "@/components/MenuPage";
import CalendarPage from "@/components/CalendarPage";
import FavoritesPage from "@/components/FavoritesPage";
import SettingsPage from "@/components/SettingsPage";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
        <Router>
          <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto pb-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Index;
