# 🌟 AI Tutor Web Application – Math & Physics Agent using Gemini API 🚀

Welcome to the AI Tutor Web App! This is a dual-agent (Math and Physics) educational platform powered by **Google Gemini API** and built using **Spring Boot** for the backend and a modern animated **React + Three.js** frontend.

---Author name : VAISHNAV SINGH

## 📦 Project Structure

📁 demo/
└── Spring Boot Backend (Java)
📁 animatedlandingpage/
└── React Frontend with Three.js



---

## 🔧 How to Open and Run the Project

### 🖥️ Backend (Spring Boot)

1. Clone the repo:
   ```bash
   git clone 
   cd demo

Add your Gemini API key to application.properties:

gemini.api.key=YOUR_API_KEY_HERE


Build and run the backend:

bash
Copy
Edit
./mvnw clean install
./mvnw spring-boot:run

For FRONTEND :

cd animatedlandingpage
cd landingpage
npm install

Start the frontend:

bash
Copy
Edit
npm start



🧩 Deploy Spring Boot Backend
Package the backend:

bash
Copy
Edit
./mvnw clean package
Deploy using:

Heroku: heroku deploy:jar target/demo-0.0.1-SNAPSHOT.jar

Render, Railway, or your VPS.

Make sure to add environment variable:

ini
Copy
Edit
gemini.api.key=your-api-key
🌐 Deploy React Frontend
Build the React app:

bash
Copy
Edit
npm run build
Deploy to:

Vercel, Netlify, or GitHub Pages.

🧠 About the AI Tutor Agents
✏️ Maths Agent
The Math Agent uses Gemini API with a prompt:

text
Copy
Edit
Solve this math problem: <your-question>
✅ 10+ Sample Math Questions:

Solve this math problem: 12 * 7

Solve this math problem: What is the derivative of x^2?

Solve this math problem: 100 divided by 4

Solve this math problem: Find the value of x if 2x + 3 = 9

Solve this math problem: Calculate 25% of 200

Solve this math problem: Integrate x^3

Solve this math problem: What is 10 factorial?

Solve this math problem: Find the area of a circle with radius 5

Solve this math problem: What is the square root of 121?

Solve this math problem: Convert 3/4 to decimal

Solve this math problem: Solve the quadratic equation x^2 - 5x + 6 = 0

⚛️ Physics Agent
The Physics Agent uses Gemini API with a prompt:

text
Copy
Edit
Answer this physics question: <your-question>
✅ 10+ Sample Physics Questions:

Answer this physics question: What is Newton's second law?

Answer this physics question: Define momentum.

Answer this physics question: What is the speed of light?

Answer this physics question: Explain Ohm’s Law.

Answer this physics question: How does gravity work?

Answer this physics question: What is work done in physics?

Answer this physics question: Explain the first law of thermodynamics.

Answer this physics question: How is force calculated?

Answer this physics question: What is kinetic energy?

Answer this physics question: What happens during projectile motion?

Answer this physics question: What is the difference between mass and weight?

🖼️ Visually Appealing Frontend with Three.js
The frontend uses Three.js to build animated, interactive 3D scenes to create an engaging user experience for students. This includes:

Dynamic landing page elements

Particle effects

Smooth animations

Interactive 3D components

All this is integrated directly into the React app using React Three Fiber.

🔑 How to Get and Use Gemini API Key
Go to: https://makersuite.google.com/app

Click your profile > API Keys

Generate a new key

Copy and paste the key into your backend's application.properties:

properties
Copy
Edit
gemini.api.key=YOUR_API_KEY
🔐 Never share your key publicly.

🙌 Contributors
Vaishnav Singh – Full Stack Developer, AI Integrator, Frontend Designer

🧠 Technologies Used
🔙 Java Spring Boot (Backend)

📦 REST API + CORS Config

🔮 Google Gemini API for AI Responses

🌐 React.js + Tailwind CSS (Frontend)

🧩 Three.js (React Three Fiber)

☁️ Vercel / Heroku (Deployment Options)

💬 “Empowering students through AI – one question at a time.”

vbnet
Copy
Edit

Let me know if you want it exported as a `.md` file or want to auto-generate the README in your project folder.





You said:
give all this in one go only


ChatGPT said:
Here is your complete and well-formatted README.md file — ready to be used as-is in your project root:

markdown
Copy
Edit
# 🌟 AI Tutor Web Application – Math & Physics Agent using Gemini API 🚀

Welcome to the AI Tutor Web App! This project features two AI-powered agents (Math & Physics) that respond to academic queries using **Google's Gemini API**. It’s built with a **Spring Boot backend** and a visually stunning **React + Three.js frontend**.

---

## 📦 Project Structure

📁 demo/
└── Spring Boot Backend (Java)
📁 animatedlandingpage/
└── React Frontend (Three.js + Tailwind CSS)

yaml
Copy
Edit

---

## 🔧 How to Open and Run the Project

### 🖥️ Backend (Spring Boot)

1. **Clone the repo**:
   ```bash
   git clone <your-repo-url>
   cd demo
Add your Gemini API key to src/main/resources/application.properties:

properties
Copy
Edit
gemini.api.key=YOUR_API_KEY_HERE
Build and run the backend:

bash
Copy
Edit
./mvnw clean install
./mvnw spring-boot:run
By default, the backend runs at http://localhost:8080

🌐 Frontend (React + Three.js)
Navigate to the frontend:

bash
Copy
Edit
cd animatedlandingpage
cd landingpage
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000

📡 Full Deployment Process
🚀 Deploy Spring Boot Backend
Package the backend:

bash
Copy
Edit
./mvnw clean package
Deploy to your preferred platform (Render, Railway, Heroku, AWS, etc.)

Upload the JAR: target/demo-0.0.1-SNAPSHOT.jar

Set environment variable:

ini
Copy
Edit
gemini.api.key=your-api-key
🌐 Deploy React Frontend
Build the frontend:

bash
Copy
Edit
npm run build
Deploy to platforms like:

Vercel

Netlify

GitHub Pages

🤖 About the AI Tutor Agents
🧮 Maths Agent
Uses the Gemini API to interpret and solve math questions. It is triggered with the prompt:

text
Copy
Edit
Solve this math problem: <your-question>
✅ 10+ Example Math Questions
Solve this math problem: 12 * 7

Solve this math problem: What is the derivative of x²?

Solve this math problem: 100 divided by 4

Solve this math problem: Find the value of x if 2x + 3 = 9

Solve this math problem: Calculate 25% of 200

Solve this math problem: Integrate x³

Solve this math problem: What is 10 factorial?

Solve this math problem: Find the area of a circle with radius 5

Solve this math problem: What is the square root of 121?

Solve this math problem: Convert 3/4 to decimal

Solve this math problem: Solve the quadratic equation x² - 5x + 6 = 0

⚛️ Physics Agent
Uses the Gemini API with a prompt to answer physics-based questions:

text
Copy
Edit
Answer this physics question: <your-question>
✅ 10+ Example Physics Questions
Answer this physics question: What is Newton's second law?

Answer this physics question: Define momentum.

Answer this physics question: What is the speed of light?

Answer this physics question: Explain Ohm’s Law.

Answer this physics question: How does gravity work?

Answer this physics question: What is work done in physics?

Answer this physics question: Explain the first law of thermodynamics.

Answer this physics question: How is force calculated?

Answer this physics question: What is kinetic energy?

Answer this physics question: What happens during projectile motion?

Answer this physics question: What is the difference between mass and weight?

🎨 Frontend with Three.js – Visually Appealing & Interactive
The React frontend is enhanced using Three.js via React Three Fiber. It offers:

✨ Animated particle backgrounds

🌌 3D elements on the landing page

🎥 Smooth WebGL transitions and effects

🌀 Fully responsive and dynamic interactions

This creates an engaging and immersive experience for users interacting with the AI agents.

🔑 How to Fetch and Use Gemini API Key
Go to https://makersuite.google.com/app

Click your profile icon (top-right corner) and choose API Keys

Generate a new API key

Copy the key and paste it in your backend:

properties
Copy
Edit
gemini.api.key=YOUR_API_KEY
⚠️ Do not expose your API key in frontend or public repositories.

👨‍💻 Author
Vaishnav Singh
🔧 Full Stack Developer | 🎮 Game Developer | 🧠 AI Integrator

🛠️ Tech Stack
Spring Boot – Backend REST APIs

React.js – Frontend UI

Tailwind CSS – Modern styling

Three.js / React Three Fiber – Interactive 3D experience

Google Gemini API – AI-powered tutoring

WebClient (Spring) – Handles Gemini API calls

Vercel / Netlify / Railway – Deployment solutions

✨ “Empowering students through AI – one question at a time.” ✨




