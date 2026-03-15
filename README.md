# Minecraft To-Dos
### A simple website to add all your Minecraft tasks!

## Project Overview
Whenever you're in your survival world, especially early game, you'd always have missions to accomplish, whether as simple as gathering wood for building a house or as complicated as building a villager trading hall, you may not have a good way to write those down. Writing them externally takes some time especially if you wanna plan them out carefully, and crafting a book & quill is just not it. 

This Minecraft-themed website allows you to describe the task naturally and with AI's assistance get a detailed task with all the info you'd need! You simply type in the task's description in the input bar and in a few seconds get all the details organized with AI's assistance! All the tasks will be organized in clean blocks in the website for easy access.

## Tech Stack

### Frontend:
* React
* TypeScript
* Vite
* Tailwind CSS v4

### Backend:
* Flask
* Flash-CORS
* Python-dotenv
* Google GenAI

## Project Structure
```
.
├── backend
│   ├── app.py
│   ├── config.py
│   ├── crud.py
│   ├── helpers.py
│   ├── prompt.txt
│   ├── ReadMe.md
│   └── requirements.txt
├── frontend
│   ├── Challenges.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── minecraft-svgrepo-com.svg
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── api.ts
│   │   ├── App.tsx
│   │   ├── assets
│   │   │   ├── Block.svg
│   │   │   ├── clock.svg
│   │   │   ├── 'Edit Icon.png'
│   │   │   ├── fonts
│   │   │   │   └── minecraft-font
│   │   │   │       ├── info.txt
│   │   │   │       ├── MinecraftBold.otf
│   │   │   │       ├── MinecraftBoldItalic.otf
│   │   │   │       ├── MinecraftItalic.otf
│   │   │   │       └── MinecraftRegular.otf
│   │   │   ├── images.svg
│   │   │   ├── Pickaxe.png
│   │   │   ├── 'Star Icon.png'
│   │   │   ├── wallpaper1.png
│   │   │   ├── wallpaper2.png
│   │   │   └── wallpaper3.png
│   │   ├── components
│   │   │   ├── Header.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskModal.tsx
│   │   │   └── Wallpaper.tsx
│   │   ├── data.json
│   │   ├── index.css
│   │   └── main.tsx
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md
```
## Setup
Follow these steps to get both the backend and the frontend running locally on your system:

### 1. Prerequisites
* Node.js
* Python
* Gemini API Key (obtained from Google AI Studio)

### 2. Backend Setup (Flask)
The backend handles the AI task generation and local JSON storage.

### a. Navigate to the backend folder:
```bash
cd backend
```

### b. Create a virtual environment:
```bash
python -m venv venv
```

### c. Activate the virtual environment:
On Windows:
```bash
.\venv\Scripts\activate
```

On MacOS/Linux:
```bash
source venv/bin/activate
```

### d. Install dependencies:
```bash
pip install -r requirements.txt
```

### e. Configure API Key:
Create a file named .env in the backend folder and add your key:
```bash
GEMINI_API_KEY=your_actual_key_here
```

### f. Run the Flask server:
```bash
python app.py
```
> The backend will run on http://127.0.0.1:5000

### 3. Frontend Setup (React + Tailwind v4)
The frontend provides the Minecraft-themed UI

### a. Navigate to the frontend folder:
```bash
cd ..
cd frontend
```

### b. Install dependencies:
```bash
npm install
```

### c. Run the development server:
```bash
npm run dev
```
> The frontend will run on http://localhost:5173.


## Credits

Created by Fawaz Abdullah Al-Ghamdi

Special thanks for the [Programming Club at KAU](https://github.com/programmingClubKau) for hosting the Full-Stack Bootcamp, where I've learned the basics to discover more in this field and improve myself.

The main [frontend](https://github.com/The-Reaperx/Fullstack-Bootcamp) and [backend](https://github.com/iYasserGh/flask-todo-project-boilerplate) code were developed by [Umair](https://github.com/The-Reaperx) and [Yasser](https://github.com/iYasserGh) respectively, the presenters of the Full-Stack Bootcamp. 