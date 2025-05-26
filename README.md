# 🌟 AI Tutor Web Application – Math & Physics Agent using Gemini API 🚀

Welcome to the **AI Tutor Web App**! This innovative project features two AI-powered agents (Math & Physics) that provide insightful answers to academic queries using **Google's powerful Gemini API**. The application is built with a robust **Spring Boot backend** and a visually stunning, animated **React + Three.js frontend** for an immersive learning experience.

---

## 👨‍💻 Author

**VAISHNAV SINGH**
*(Full Stack Developer | Game Developer | AI Integrator)*
![Screenshot (189)](https://github.com/user-attachments/assets/3d9e171a-f2f3-408d-b512-6173312dd2ff)
![Screenshot (190)](https://github.com/user-attachments/assets/44a07a41-1890-491e-a813-b373eeddac0c)
![Screenshot (191)](https://github.com/user-attachments/assets/da143b95-7ec1-4c64-81e9-acd4d3879731)
![Screenshot (192)](https://github.com/user-attachments/assets/68b0227f-6944-46b2-8a82-b68c8d116b01)
![Screenshot (187)](https://github.com/user-attachments/assets/8f31c27e-ea25-42f3-b308-708cc5dfdfbb)

---![Screenshot (188)](https://github.com/user-attachments/assets/47a02ace-0ed6-4566-b05d-bfc59d25d25a)


## 📦 Project Structure

Our project is neatly organized into backend and frontend components:
Use code with caution.
Markdown
.
├── 📁 demo/ # Spring Boot Backend (Java)
│ ├── src/
│ └── pom.xml
└── 📁 animatedlandingpage/ # React Frontend
├── landingpage/ # Main React app source
│ ├── public/
│ ├── src/
│ └── package.json
└── ... # Other frontend assets if any
---

## 🛠️ Technologies Used

This project leverages a modern and powerful tech stack:

*   **Backend:**
    *   ☕ **Java Spring Boot:** For robust and scalable REST APIs.
    *   🛡️ **Spring Security:** For API protection (including CORS).
    *   🌐 **Spring WebClient:** For efficient, non-blocking calls to the Gemini API.
*   **Frontend:**
    *   ⚛️ **React.js:** For building a dynamic and responsive user interface.
    *   🎨 **Three.js (via React Three Fiber):** For creating captivating 3D animations and interactive elements.
    *   💨 **GSAP (GreenSock Animation Platform):** For sophisticated animations.
    *   💅 **CSS3:** For styling and layout (potentially with Tailwind CSS if you choose to integrate it later).
*   **AI Core:**
    *   🧠 **Google Gemini API:** For advanced AI-powered question answering.
*   **Build & Deployment:**
    *   🛠️ **Maven:** For backend project management and build.
    *   📦 **NPM/Yarn:** For frontend dependency management.
    *   ☁️ **Deployment Options:** Heroku, Render, Railway (Backend) | Vercel, Netlify, GitHub Pages (Frontend).

---

## 🚀 Getting Started: How to Open and Run

Follow these steps to get the AI Tutor up and running on your local machine.

###  prerequisites

*   ✅ **Java Development Kit (JDK)** - Version 17 or later.
*   ✅ **Maven** - For building the Spring Boot backend.
*   ✅ **Node.js & npm/yarn** - For the React frontend.
*   🔑 **Google Gemini API Key** - Get yours from [Google AI Studio (formerly MakerSuite)](https://makersuite.google.com/app).

### 🖥️ Backend Setup (Spring Boot - `demo` folder)

1.  **Navigate to the Backend Directory:**
    ```bash
    cd demo
    ```

2.  **Configure Gemini API Key:**
    Open `src/main/resources/application.properties` and add your Gemini API key:
    ```properties
    gemini.api.key=YOUR_API_KEY_HERE
    ```
    ⚠️ *Never commit your API key to a public repository! Consider using environment variables for production.*

3.  **Build and Run the Backend:**
    Using Maven Wrapper:
    ```bash
    # Clean and install dependencies
    ./mvnw clean install

    # Run the Spring Boot application
    ./mvnw spring-boot:run
    ```
    If you have Maven installed globally:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```
    ✨ The backend will typically start on `http://localhost:8080`.

###  frontend Setup (React + Three.js - `animatedlandingpage/landingpage` folder)

1.  **Navigate to the Frontend Directory:**
    ```bash
    # From the project root
    cd animatedlandingpage/landingpage
    # Or, if you're already in animatedlandingpage:
    # cd landingpage
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or if you use yarn:
    # yarn install
    ```

3.  **Start the Frontend Development Server:**
    ```bash
    npm start
    # or
    # yarn start
    ```
    ✨ The React application will usually open automatically in your browser at `http://localhost:3000`.

---

## 🧠 About the AI Tutor Agents

Our AI Tutor features two specialized agents to assist with your learning:

### 🧮 Maths Agent

The Maths Agent is designed to tackle a wide range of mathematical problems. It uses the Gemini API with a carefully crafted prompt:

```text
Solve this math problem: <your-question>
Use code with caution.
✅ Sample Math Questions:
Solve this math problem: 12 * 7
Solve this math problem: What is the derivative of x^2?
Solve this math problem: 100 divided by 4
Solve this math problem: Find the value of x if 2x + 3 = 9
Solve this math problem: Calculate 25% of 200
Solve this math problem: Integrate x^3 dx
Solve this math problem: What is 10 factorial?
Solve this math problem: Find the area of a circle with radius 5 units.
Solve this math problem: What is the square root of 121?
Solve this math problem: Convert 3/4 to a decimal.
Solve this math problem: Solve the quadratic equation x^2 - 5x + 6 = 0
⚛️ Physics Agent
The Physics Agent provides explanations and answers to physics-related questions, powered by the Gemini API using the prompt:
Answer this physics question: <your-question>
Use code with caution.
Text
✅ Sample Physics Questions:
Answer this physics question: What is Newton's second law of motion?
Answer this physics question: Define momentum and give its SI unit.
Answer this physics question: What is the approximate speed of light in a vacuum?
Answer this physics question: Explain Ohm’s Law with its formula.
Answer this physics question: How does gravity work according to general relativity?
Answer this physics question: What is work done in physics, and how is it calculated?
Answer this physics question: Explain the first law of thermodynamics.
Answer this physics question: How is net force calculated when multiple forces act on an object?
Answer this physics question: What is kinetic energy, and what factors does it depend on?
Answer this physics question: Describe the key characteristics of projectile motion, ignoring air resistance.
Answer this physics question: What is the fundamental difference between mass and weight?
🎨 Frontend Magic: Visually Appealing & Interactive with Three.js
The React frontend is not just functional; it's an experience! Enhanced using Three.js (leveraging React Three Fiber and GSAP), it offers:
✨ Dynamic Landing Page: A captivating animated drone and background elements.
🌌 3D Elements & Particle Effects: Creating depth and visual interest.
🎥 Smooth WebGL Transitions & Animations: For a polished, modern feel.
🌀 Interactive Components: Engaging users as they interact with the AI agents.
This combination aims to make learning more engaging and memorable.
🔑 How to Get and Use a Gemini API Key
Visit Google AI Studio: Go to https://makersuite.google.com/app.
Create or Select a Project.
Get API Key: In your project, click on "Get API key" (or similar, the interface might change).
Generate a New API Key: Follow the prompts to create a new key.
Copy the Key.
Paste into Backend Configuration: Add it to demo/src/main/resources/application.properties as shown in the backend setup.
⚠️ Security Note: Keep your API key confidential. Do not embed it directly in frontend code or commit it to public version control. Use environment variables for deployed applications.
🌐 Deployment Guide
Ready to share your AI Tutor with the world? Here's how:
☁️ Deploying the Spring Boot Backend
Package the Backend:
Navigate to the demo directory and run:
./mvnw clean package -DskipTests
# This creates a JAR file in the target/ directory (e.g., demo-0.0.1-SNAPSHOT.jar)
Use code with caution.
Bash
Choose a Deployment Platform:
Heroku:
heroku deploy:jar target/demo-0.0.1-SNAPSHOT.jar --app YOUR_HEROKU_APP_NAME
Use code with caution.
Bash
Render: Follow Render's guide for deploying a Java application (upload JAR or connect Git repo).
Railway: Similar to Render, deploy via Git or Docker.
AWS Elastic Beanstalk, Google Cloud Run, Azure App Service, VPS: Various options depending on your preference.
Set Environment Variable for API Key:
On your chosen platform, set an environment variable named GEMINI_API_KEY (or match the property name you use in Spring, e.g., gemini.api.key but with underscores for env vars GEMINI_API_KEY) with your actual Gemini API key.
For example, in application.properties you might use ${GEMINI_API_KEY}:
gemini.api.key=${GEMINI_API_KEY:YOUR_FALLBACK_LOCAL_KEY_FOR_DEV}
Use code with caution.
Properties
🌍 Deploying the React Frontend
Build the React App:
Navigate to animatedlandingpage/landingpage and run:
npm run build
# This creates an optimized static build in the build/ directory.
Use code with caution.
Bash
Choose a Deployment Platform for Static Sites:
Vercel: Connect your Git repository (GitHub, GitLab, Bitbucket) and Vercel will auto-build and deploy.
Netlify: Similar to Vercel, drag-and-drop the build folder or connect Git.
GitHub Pages: Configure your repository to serve from the build folder (often via a gh-pages branch).
AWS S3 + CloudFront, Firebase Hosting, etc.
Configure API Endpoint:
Ensure your frontend's API calls (in App.js axios.post) point to your deployed backend URL, not http://localhost:8080. You might use an environment variable for this (e.g., REACT_APP_API_URL).
🙌 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](<your-repo-url>/issues) (if you have one).
📜 License
This project is licensed under the [MIT License](<your-repo-url>/blob/main/LICENSE) - see the LICENSE file for details (you'll need to create this file).
💬 “Empowering students through AI – one question at a time.”
**Next Steps for You:**

1.  **Replace Placeholders:**
    *   `<your-repo-url>` with the actual URL to your GitHub repository.
    *   `YOUR_HEROKU_APP_NAME` if you use Heroku.
2.  **Create a `LICENSE` file:** If you choose the MIT license, you can easily find a template online.
3.  **Tailwind CSS:** You mentioned "Tailwind CSS" in the tech stack, but your provided frontend CSS didn't seem to use it. If you *are* using Tailwind, ensure it's accurately reflected. If not, you can remove it from the "Technologies Used" list.
4.  **Review and Adjust:** Read through it to ensure it perfectly matches your project's current state and your personal style.
