// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { init } from "./utils/initDroneLayer.js"; // Assuming this path is correct relative to App.js
// import './index.css'; // Import the CSS for the TutorApp part

// // Note: The 'Button' import from "@mui/material" in the original App.js was not used in its JSX.
// // The TutorApp uses a standard HTML button with custom styling, so the MUI Button is not included here.

// function App() {
//   // useEffect from the original App component
//   useEffect(() => {
//     // Initialize drone layer or other setup
//     init();
//   }, []);
  

   
//   // State and logic from TutorApp
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const askQuestion = async () => {
//     if (!question.trim()) return;
//     setLoading(true);
//     setResponse('');
//     try {
//       const res = await axios.post('http://localhost:8080/api/tutor/ask', {
//         question
//       });
//       setResponse(res.data.answer);
//     } catch (error) {
//       setResponse('Error: Could not get answer from the AI tutor.');
//       console.error("Error asking tutor:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="App"> {/* Main wrapper from original App.js */}
//       {/* Original content from App.js */}
//       <div className="hero">
//         <h1 className="title">Welcome</h1>
//         <p className="text">
//           I am excited to apply for the Job. As a passionate and results-driven developer, I bring a strong foundation in frontend development, Unity development, Golang, Spring Boot, along with hands-on experience in building efficient and scalable applications.
//           During my tenure as a Product Engineer at Cybernetyx, I worked extensively on C# and Unity, developing interactive applications and optimizing game performance. Additionally, my experience at Coding Samurai as a Frontend Developer Intern allowed me to refine my skills in React.js and Tailwind CSS, building user-friendly interfaces. My diverse background in game development, web technologies, and software engineering enables me to adapt quickly and contribute effectively to dynamic projects.
//           My ability to collaborate in teams, solve complex problems, and deliver high-quality solutions aligns well with your organization's vision. I am eager to leverage my skills to contribute to your team’s success.
//         </p>
//       </div>

//       {/* Integrated TutorApp UI and functionality */}
//       {/* The .app-container class will apply TutorApp's specific layout (flex centering, background) to this section */}
//       <div className="app-container">
//         <div className="card">
//           <h1 className="title">AI Tutor Agent</h1> {/* This title will also be styled by .title in TutorApp.css */}
//           <input
//             type="text"
//             placeholder="Ask a math or physics question..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="input"
//           />
//           <button
//             onClick={askQuestion}
//             disabled={loading}
//             className="button"
//           >
//             {loading ? 'Thinking...' : 'Ask'}
//           </button>
//           {response && (
//             <div className="response">
//               <strong>Answer:</strong> {response}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { init } from "./utils/initDroneLayer.js"; // Ensure path is correct
import './index.css';

function App() {
  useEffect(() => {
    // This initializes the Three.js canvas and appends it to the body.
    // CSS will then style this canvas to be the background.
    init();
  }, []); // Empty dependency array ensures this runs once on mount

  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    // ... (askQuestion logic remains the same as previous versions)
    if (!question.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await axios.post('http://localhost:8080/api/tutor/ask', {
        question
      });
      setResponse(res.data.answer || res.data);
    } catch (error) {
      let errorMessage = 'Error: Could not get answer from the AI tutor.';
      if (error.response) {
        // console.error("Error data:", error.response.data);
        // console.error("Error status:", error.response.status);
        if (error.response.data && typeof error.response.data === 'string') {
          errorMessage += ` Server says: ${error.response.data}`;
        } else if (error.response.data && error.response.data.message) {
          errorMessage += ` Server says: ${error.response.data.message}`;
        } else {
          errorMessage += ` Status: ${error.response.status}`;
        }
      } else if (error.request) {
        // console.error("Error request:", error.request);
        errorMessage += ' No response from server. Check if it is running or if there is a CORS issue.';
      } else {
        // console.error('Error message:', error.message);
        errorMessage += ` ${error.message}`;
      }
      setResponse(errorMessage);
      console.error("Full error asking tutor:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* The canvas for the drone will be created by init() and placed in the background by CSS */}

      <header className="hero-section">
        <div className="hero-content-wrapper">
          <h1 className="hero-main-title">Welcome</h1>
          <p className="hero-main-text">
            I am excited to apply for the Job. As a passionate and results-driven developer, I bring a strong foundation in frontend development, Unity development, Golang, Spring Boot, along with hands-on experience in building efficient and scalable applications.
            During my tenure as a Product Engineer at Cybernetyx, I worked extensively on C# and Unity, developing interactive applications and optimizing game performance. Additionally, my experience at Coding Samurai as a Frontend Developer Intern allowed me to refine my skills in React.js and Tailwind CSS, building user-friendly interfaces. My diverse background in game development, web technologies, and software engineering enables me to adapt quickly and contribute effectively to dynamic projects.
            My ability to collaborate in teams, solve complex problems, and deliver high-quality solutions aligns well with your organization's vision. I am eager to leverage my skills to contribute to your team’s success.
          </p>
        </div>
      </header>

      <main className="tutor-app-section">
        <div className="app-container">
          <div className="card">
            <h1 className="title">AI Tutor Agent</h1>
            <input
              type="text"
              placeholder="Ask a math or physics question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="input"
            />
            <button
              onClick={askQuestion}
              disabled={loading}
              className="button"
            >
              {loading ? (
                <span className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              ) : (
                'Ask'
              )}
            </button>
            {response && (
              <div className="response">
                <strong>Answer:</strong>
                <pre>{response}</pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;