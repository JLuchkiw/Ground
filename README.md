# Ground 🐋

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-0.159.1-009688?logo=fastapi&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-blue)
![Status](https://img.shields.io/badge/Status-In_Development-yellow)

**A grounding companion designed to make moments of overwhelm a little more manageable.**

Ground is an evolving full-stack application built around the **5-4-3-2-1 sensory grounding technique**, which encourages users to reconnect with their immediate surroundings through sight, touch, hearing, smell, and taste.

The project began as a Python console application and has expanded into a React frontend supported by a FastAPI backend.

Ground serves as both a practical grounding tool and a software engineering portfolio project, demonstrating iterative development, component-based design, API integration, and full-stack architecture.

## Project Goals

Ground aims to:

- Provide a straightforward, approachable grounding experience.
- Make grounding exercises accessible through a browser-based interface.
- Maintain a clear separation between frontend presentation and backend services.
- Support incremental improvements to accessibility, reliability, and user experience.
- Demonstrate the evolution of a software project from a console prototype to a full-stack application.

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, JavaScript, Vite 7 |
| Styling | Tailwind CSS 3, CSS |
| Backend | Python, FastAPI, Uvicorn |
| API | REST endpoints, JSON |
| Development | Git, GitHub, VS Code, npm, Python virtual environments |

## Current Features

### Python Console Prototype

The original Python implementation established the project's grounding exercise concept and provided a foundation for subsequent development.

### React Frontend

The web application uses a component-based architecture with dedicated files for different parts of the grounding experience.

Current frontend components include:

- `SafetyCheck.jsx`
- `GroundingExercise.jsx`
- `GroundingSteps.jsx`
- `CrisisSupport.jsx`
- `Summary.jsx`

Grounding prompt data is also organized separately in `GroundingPrompts.js`.

### FastAPI Backend

The backend provides endpoints for checking application availability and retrieving structured grounding prompts.

| Endpoint | Description |
|---|---|
| `GET /api/health` | Checks backend availability |
| `GET /api/exercise` | Returns structured grounding exercise prompts |
| `GET /docs` | Provides interactive API documentation |

### Frontend–Backend Integration

The frontend and backend can run together in a local development environment, providing a foundation for continued API integration and application development.

## Project Structure

```text
Ground/
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── docs/
│   └── pseudocode.md
│
├── mvp_console/
│   ├── __init__.py
│   └── grounding_companion.py
│
├── web_app/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── CrisisSupport.jsx
│   │   │   ├── GroundingExercise.jsx
│   │   │   ├── GroundingSteps.jsx
│   │   │   ├── SafetyCheck.jsx
│   │   │   └── Summary.jsx
│   │   ├── data/
│   │   │   └── GroundingPrompts.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
├── LICENSE
└── README.md
```

**Note:** Generated dependencies, virtual environments, and temporary files are excluded from the structure above. These include `backend/.venv/`, Python cache directories, and `web_app/node_modules/`, which should not be committed to version control.

## Getting Started

### Prerequisites

To run Ground locally, you'll need:

- Python 3
- Node.js 20.19+ or 22.12+ (with npm)
- Git

Node.js 24 is also compatible with the project's Vite 7 setup.

### 1. Clone the Repository

```bash
git clone https://github.com/JLuchkiw/Ground.git
cd Ground
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate the environment.

**Windows PowerShell:**

```powershell
.\.venv\Scripts\Activate.ps1
```

**macOS/Linux:**

```bash
source .venv/bin/activate
```

Install the backend dependencies:

```bash
python -m pip install -r requirements.txt
```

Start the FastAPI development server:

```bash
python -m uvicorn main:app --reload
```

The backend will normally be available at:

`http://127.0.0.1:8000`

You can verify the backend by visiting:

- `http://127.0.0.1:8000/api/health`
- `http://127.0.0.1:8000/api/exercise`
- `http://127.0.0.1:8000/docs`

Leave the backend terminal running.

### 3. Set Up the Frontend

Open a second terminal at the repository root.

Navigate to the frontend directory:

```bash
cd web_app
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display a local development URL, typically:

`http://localhost:5173`

Open that address in your browser.

For the integrated application, keep both the frontend and backend development servers running.

### 4. Run the Original Python Prototype (Optional)

The original console prototype can run independently.

From the repository root:

```bash
python mvp_console/grounding_companion.py
```

This version demonstrates the initial implementation of Ground's exercise flow.

## Development Roadmap

Ground is being developed incrementally. The roadmap reflects completed foundational work and planned improvements rather than presenting future features as already implemented.

### Phase 1 — Python MVP

- [x] Establish the initial grounding companion concept.
- [x] Implement a Python console-based prototype.
- [x] Document the initial program logic and development approach.
- [x] Establish GitHub version control.

### Phase 2 — React Frontend

- [x] Create a React application using Vite.
- [x] Introduce a component-based frontend structure.
- [x] Configure Tailwind CSS.
- [x] Organize grounding prompts into a dedicated data module.
- [x] Create components for the grounding exercise and supporting interface.
- [ ] Continue refining responsive layouts and accessibility.
- [ ] Improve keyboard navigation and screen-reader support.

### Phase 3 — FastAPI Backend

- [x] Establish a Python FastAPI backend.
- [x] Implement a health-check endpoint.
- [x] Implement an endpoint for grounding exercise prompts.
- [x] Configure CORS for local development.
- [x] Run the React frontend and FastAPI backend together.
- [x] Simplify and document backend dependencies.
- [ ] Complete and refine frontend consumption of API-provided exercise data.
- [ ] Improve loading states and API error handling.

### Phase 4 — Testing and Reliability

- [ ] Add backend unit and API tests.
- [ ] Add frontend component tests.
- [ ] Test the complete grounding exercise workflow.
- [ ] Validate accessibility across common interaction methods.
- [ ] Introduce automated checks through CI/CD.
- [ ] Improve error handling and application resilience.

### Phase 5 — Persistence and Expanded Functionality

- [ ] Evaluate whether user preferences or exercise progress should be stored.
- [ ] Design an appropriate persistence layer if needed.
- [ ] Explore configurable exercise preferences.
- [ ] Evaluate additional grounding techniques and supporting features.
- [ ] Continue refining the experience based on usability testing.

### Phase 6 — Deployment and Portfolio Readiness

- [ ] Prepare production configuration.
- [ ] Select an appropriate hosting strategy.
- [ ] Deploy the frontend and backend.
- [ ] Verify production API connectivity.
- [ ] Add screenshots or a demonstration of the application.
- [ ] Document architecture decisions, testing, and deployment.
- [ ] Continue maintaining the project through incremental releases.

## Engineering Approach

Ground follows an iterative development process, with each implementation building on lessons learned from the previous stage.

The initial Python prototype established the grounding exercise's basic interaction flow. React introduced reusable interface components and browser-based interaction, while FastAPI established a separate backend service and REST API.

Future development will focus on:

- **Accessibility:** Designing for different interaction needs and abilities.
- **Maintainability:** Keeping code modular, understandable, and testable.
- **Reliability:** Improving error handling and introducing automated tests.
- **User experience:** Keeping the exercise approachable without unnecessary complexity.
- **Incremental delivery:** Building and validating improvements in manageable stages.

## Disclaimer

Ground is intended as a self-guided grounding tool. It is not a substitute for professional mental health care, diagnosis, treatment, or emergency services.

## License

Ground is licensed under the Apache License 2.0 License © 2025 Ellie Luchkiw. See the [LICENSE](LICENSE) file for details.