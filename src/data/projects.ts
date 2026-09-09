export const projects = [
    {
        name: "Sentinel911 – AI-Powered Call Monitoring System",
        stack: "FastAPI, Next.js, LLMs, Whisper",
        github: "",
        demo: "",
        bullets: [
            "Built a dashboard to analyze 911 call transcripts using LLMs; improved oversight and anomaly detection workflows.",
            "Integrated Whisper ASR for transcription and NLP techniques (classification, sentiment) for rapid triage.",
            "Containerized with Docker and prepared deployment via CI/CD pipelines.",
        ],
    },
    {
        name: "Rental Car System",
        stack: "React.js, Node.js, Express.js, MongoDB, REST APIs",
        github: "",
        demo: "",
        bullets: [
            "Developed responsive full-stack features using React.js and Node.js, integrating RESTful APIs to support vehicle search, rental booking requests, and reservation management workflows.",
            "Implemented backend business logic using Express.js and MongoDB, enabling reliable persistence and management of vehicle, owner, and booking notification data.",
            "Built and integrated RESTful services for car search and filtering, owner authentication, booking requests, notifications, and image uploads, ensuring seamless communication between frontend and backend components.",
        ],
    },
    {
        name: "Emotion Based Music Player",
        stack: "Streamlit, Keras, OpenCV, MediaPipe",
        github: "",
        demo: "",
        bullets: [
            "Developed a full-stack AI application using Streamlit and Keras that automates personalized music discovery by mapping real-time facial expressions to dynamic YouTube search queries with 90%+ accuracy.",
            "Architected a real-time video processing pipeline leveraging Streamlit-WebRTC and MediaPipe Holistic to extract 540+ facial and hand landmarks, enabling low-latency, asynchronous emotion prediction from live browser-based camera feeds.",
            "Engineered a custom data-driven feature extraction system using OpenCV and NumPy to normalize spatial coordinates, reducing high-dimensional video data into efficient vectors to ensure seamless, real-time inference in under seconds.",
        ],
    },
    {
        name: "Ticket Booking System",
        stack: "Node.js, Express.js, MongoDB, React",
        github: "", // add if you have
        demo: "",   // add if you have
        bullets: [
            "Built a full-stack ticket booking application with secure CRUD operations and REST APIs.",
            "Implemented JWT-based authentication, role-based access, and low-latency request handling using Express + MongoDB.",
            "Created a simple, usable React UI supporting real-time booking updates and cross-device experiences.",
        ],
    },
];
