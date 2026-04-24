# Snooker Cricket Tournament Manager: Project Overview

A professional-grade, mobile-optimized Progressive Web Application (PWA) designed to manage Snooker Cricket tournaments with real-time cloud synchronization and offline capabilities.

## 🚀 Core Features

### 1. Player Management
*   **Dual-Tier Registration**: Manage players across two skill levels (Team A / Team B or Pro / Medium).
*   **Quick Entry**: Simple interface to add players with "Enter" key support.
*   **Sample Data**: One-click loading of preset player lists for testing.
*   **Live Count**: Real-time tracking of player counts in each tier.

### 2. Team Generation & Draw
*   **Random Draw Engine**: Automatically pairs Team A and Team B players to create balanced teams.
*   **Manual Draw**: Full control to create specific pairings.
*   **Tournament Formats**: Support for **Round Robin** (Group Stage) and **Single Knockout** formats.
*   **Bye Management**: Ability to assign bye teams for knockout brackets.

### 3. Smart Scheduling
*   **Dynamic Generation**: Creates a full tournament schedule based on available time slots.
*   **Day Tracking**: Automatically splits matches between Saturday and Sunday based on start/end times.
*   **Match Duration**: Configurable match lengths (default 45 mins) with automatic time slot allocation.
*   **Automatic Progression**: Pre-configures Quarter Finals, Semi-Finals, and Finals based on group results.

### 4. Tournament Management
*   **Score Entry**: Dedicated modal for updating runs and wickets.
*   **Match Timer**: Built-in countdown timer for matches with visual alerts (changes color when time is low).
*   **Live Standings**: Real-time points table calculating Wins, Losses, Points, and Net Run Rate (NRR).
*   **Winner Determination**: Automatically calculates and displays winners for finished matches.

### 5. Export & Sharing
*   **Image Capture**: Built-in `html2canvas` integration to save Schedule and Standings as high-quality PNG images for sharing on WhatsApp or social media.

---

## 🛠️ Technical Stack

*   **Frontend**: Pure HTML5, CSS3 (Vanilla), and JavaScript (ES6+).
*   **Styling**: Premium dark-mode aesthetic with glassmorphism effects, responsive CSS Grid/Flexbox, and Google Fonts (Bebas Neue, DM Sans, JetBrains Mono).
*   **Database**: **Supabase** (PostgreSQL) for real-time cloud storage.
*   **PWA**: Service Worker (`sw.js`) and Web App Manifest (`manifest.json`) for home-screen installation and offline access.

---

## 🔒 Security & Persistence

*   **Restricted Access**: Custom login system ("ROCKET" system) to prevent unauthorized tournament edits.
*   **Zero-Flicker Persistence**: Immediate authentication checks in the document `<head>` to keep you logged in without screen flashes.
*   **Hybrid Storage Strategy**:
    *   **LocalStorage**: For instant data loading and offline persistence.
    *   **Supabase Cloud**: For cross-device synchronization and data safety.

---

## 🌐 Deployment & Workflow

*   **Version Control**: Hosted on **GitHub** for version tracking and collaborative development.
*   **CI/CD Deployment**: Linked to **Vercel** for automated deployments. Every push to GitHub triggers an instant live update of the web and mobile app.
*   **Mobile App Experience**: 
    *   Standalone display mode (hides browser UI).
    *   Fixed orientation and theme colors for a native feel.
    *   Persistent sessions so you never have to re-login on the field.

---

## 📱 Mobile App Optimization
The app is specifically optimized for mobile usage during live tournaments:
*   **Touch-Friendly UI**: Large buttons and interactive elements.
*   **Offline First**: Assets are cached locally via the Service Worker, allowing the app to open instantly even in areas with poor cellular signal.
*   **Data Integrity**: Automatic background syncing ensures that scores entered on one phone are saved to the cloud immediately.
