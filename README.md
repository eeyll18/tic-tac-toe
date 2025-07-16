# Strategic Tic-Tac-Toe

A classic game of Tic-Tac-Toe rebuilt with a modern tech stack and a strategic twist.

<!-- **[Live Demo Link]** `[PROJENİZİN CANLI LİNKİ]` -->

## About The Project

This project was developed as an exercise to showcase proficiency in modern front-end technologies and to demonstrate the ability to enhance a classic concept with a unique feature. The standard Tic-Tac-Toe is often a solved game, but the introduction of the "Hidden Joker Square" adds a layer of surprise.

### The Twist: The Hidden Joker Square 🃏

-   **Secret Location:** At the start of each game, one of the 9 squares is secretly designated as the Joker Square.
-   **Conditional Power:** Finding the Joker Square is only half the battle. Its special power—capturing an opponent's piece—can only be activated if your opponent already has at least one piece on the board.
-   **Game-Changing Move:** If you click on the Joker Square and its power is active, you not only claim that square but also get to convert one of your opponent's existing pieces into your own. This can instantly shift the balance of power and create unexpected paths to victory.

## Features

-   **Classic Tic-Tac-Toe Logic:** All the standard rules you know and love.
-   **Hidden Joker Mechanic:** Adds depth and high replayability.
-   **Sleek & Responsive UI:** Built with Tailwind CSS for a clean, modern look on all devices.
-   **Clear Game Status:** Instant feedback on the current player, game-winning moves, draws, and special actions.
-   **State Management with Custom Hooks:** The entire game logic is encapsulated in a clean, reusable `useTicTacToe` custom hook.
-   **Type-Safe Codebase:** Built with TypeScript to ensure reliability and maintainability.

## Built With

This project is built on a modern and efficient tech stack:

| Technology | Badge |
| :--- | :--- |
| **React** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) |
| **Vite** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| **Tailwind CSS** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/eeyll18/tic-tac-toe.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Run the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

The project follows a clean and scalable file structure, separating concerns for better maintainability.

```
src/
├── assets/         # SVG icons and other static assets
├── components/     # Reusable React components (Board, Square, etc.)
├── hooks/          # Custom hooks (useTicTacToe.ts - The game's brain)
├── types/          # Centralized TypeScript type definitions
├── utils/          # Pure helper functions (e.g., calculateWinner)
├── App.tsx         # Main application component
├── index.css       # Tailwind CSS directives
└── main.tsx        # Application entry point
```

## Future Improvements

-   [ ] **AI Opponent:** Implement an algorithm for a challenging single-player mode.
-   [ ] **Winning Line Highlight:** Visually strike through the three squares that form a winning line.
-   [ ] **Enhanced Animations:** Add more fluid animations for piece placement and game-over states.
...