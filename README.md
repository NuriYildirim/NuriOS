# NuriOS

Portfolio-Website von Nuri Yildirim — gestaltet als interaktives, Desktop-OS-artiges Erlebnis im Browser. Statt klassischer Scroll-Seiten öffnet man einzelne "Apps" (z. B. Lebenslauf, Projekte) als frei verschiebbare Fenster auf einem virtuellen Desktop.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-black?style=flat)

## 🛠️ Tech Stack

| Bereich | Technologie |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Sprache | TypeScript |
| Styling | Tailwind CSS |
| Animation | [Motion](https://motion.dev) |
| Smooth Scroll | Lenis |

## 📂 Projektstruktur

```
NuriOS/
├── app/                        # Next.js App Router
│   ├── apps/                   # App-spezifische Routen
│   ├── home/
│   │   ├── cv/                 # Route für die CV-App (eigenständiges Layout)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx               # Root-Layout (Theme-Provider, Fonts, etc.)
│   ├── page.tsx                 # Einstiegspunkt / Desktop
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── OS/                      # Kern der "Betriebssystem"-Logik
│   │   ├── Desktop.tsx          # Desktop-Container, hält alle Apps
│   │   ├── Frame.tsx            # Einzelnes App-Fenster (Drag, Scroll, Maximieren, Schließen)
│   │   ├── App.tsx              # Desktop-Icon zum Öffnen einer App
│   │   ├── Dock.tsx             # Dock/Taskleiste
│   │   ├── Island.tsx           # Dynamic-Island-artiges UI-Element
│   │   ├── FullscreenBar.tsx    # Menüleiste im Vollbild-/Maximiert-Modus
│   │   └── Wallpaper.tsx        # Theme-abhängiges Hintergrundbild
│   │
│   ├── APP/                     # Inhalte der einzelnen Apps
│   │   ├── CVApp.tsx            # Lebenslauf-App
│   │   ├── NukeApp.tsx          # NuKe Digital Vorstellung
│   │   └── NuriGPTApp.tsx       # NuriGPT-App
│   │
│   ├── ui/                      # Wiederverwendbare UI-/Icon-Komponenten - lucide-animated
│   │   ├── battery.tsx
│   │   ├── github.tsx
│   │   ├── instagram.tsx
│   │   ├── linkedin.tsx
│   │   ├── send.tsx
│   │   └── x.tsx
│   │
│   ├── Cursor.tsx                # Custom Cursor
│   ├── LenisProvider.tsx         # Smooth-Scroll-Provider
│   ├── ParallaxText.tsx          # Laufschrift-/Parallax-Textkomponente
│   └── WindowHook.tsx            # Hook für Fenstergrößen/-status
│
├── lib/
│   └── utils.ts                  # Hilfsfunktionen
│
├── public/                       # Statische Assets
│   ├── appicons/                 # App-Icons für den Desktop
│   ├── wallpaper-dark.jpg
│   ├── wallpaper-light.jpg
│   └── ...
│
├── components.json                # shadcn/ui-Konfiguration
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

Voraussetzung: Node.js (empfohlen: aktuelle LTS-Version)

```bash
# Repository klonen
git clone https://github.com/NuriYildirim/NuriOS.git
cd NuriOS

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) im Browser öffnen.

## 📄 Lizenz

Dieses Repository ist öffentlich einsehbar, aber **nicht zur Wiederverwendung freigegeben**. Siehe [LICENSE](./LICENSE) für Details.

## 👤 Kontakt

**Nuri Yildirim**
Co-Founder [NuKe Digital](#) · Computer Science, TU Hamburg
