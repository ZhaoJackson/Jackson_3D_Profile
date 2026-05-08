// Project category tabs
const list = [
  { id: "mentalhealthAI", title: "Mental Health & AI" },
  { id: "llm", title: "Large Language Models" },
  { id: "dataScienceAnalytics", title: "Data Science & Analytics" },
];
// ====== Mental Health & AI Projects ======
const mentalhealthAIProject = [
  {
    name: "PsyChat",
    description:
      "A mental health AI application designed to evaluate and support multi-turn conversations in sensitive psychological contexts. The project focuses on how AI systems respond to personal distress, emotional needs, and therapeutic-style interactions.",
    tags: [
      { name: "Mental Health AI", color: "blue-text-gradient" },
      { name: "Clinical Evaluation", color: "green-text-gradient" },
      { name: "Azure OpenAI", color: "pink-text-gradient" },
      { name: "Multi-Turn Chat", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-Requests-Library-Tutorial_Watermarked.3c9dfdc7b014.jpg",
    source_link: "https://psychatbot.streamlit.app/",
    source_code_link: "https://github.com/ZhaoJackson/PsyChat",
  },
  {
    name: "J . A . R . V . I . S",
    description:
      "A personal AI assistant exploring emotion-aware support through mood analysis, music recommendation, philosophical reflection, and conversational interaction. The project connects AI agents with daily mental wellness and affective computing ideas.",
    tags: [
      { name: "Emotion AI", color: "blue-text-gradient" },
      { name: "Ollama", color: "green-text-gradient" },
      { name: "Spotify", color: "pink-text-gradient" },
      { name: "Telegram", color: "orange-text-gradient" },
      { name: "Affective Computing", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Modern-Web-Automation-With-Python-and-Selenium_Watermarked.08e8e08b976d.jpg",
    source_code_link: "https://github.com/ZhaoJackson/J.A.R.V.I.S",
  },
  {
    name: "MBTI Personality Analysis",
    description:
      "A machine-learning project analyzing personality-related patterns and mental health indicators. The project uses predictive modeling and tuning methods to explore how psychological profiles may support personalized mental health insights.",
    tags: [
      { name: "Personality Analysis", color: "blue-text-gradient" },
      { name: "Random Forest", color: "green-text-gradient" },
      { name: "Bayesian Tuning", color: "pink-text-gradient" },
      { name: "Mental Health", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/code_quality_img.73eae557a204.jpg",
    source_code_link: "https://github.com/ZhaoJackson/MBTI_Mental_Health",
  },
];

// ====== Large Language Model Projects ======
const llmProject = [
  {
    name: "United Nations Funding Intelligence Chatbot",
    description:
      "An LLM-powered analytics platform for exploring UN Joint Work Plans and funding data. The system combines structured data analysis, prompt-based reasoning, and chatbot assistance to help users understand financial alignment and development priorities.",
    tags: [
      { name: "LLM", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "OpenAI 4o / o1", color: "pink-text-gradient" },
      { name: "Prompt Engineering", color: "purple-text-gradient" },
      { name: "UN Data", color: "orange-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Monthly-Python-News_Blue_Watermarked.f56ede474cc7.jpg",
    source_link: "https://united-nations-legacy.streamlit.app/",
    source_code_link:
      "https://github.com/ZhaoJackson/United_Nations_Financial_Intelligence_Platform",
  },
  {
    name: "News Summary Generation",
    description:
      "An LLM-based news summarization workflow that retrieves web information and generates concise summaries. The project focuses on turning long-form or fast-moving information into readable, structured outputs.",
    tags: [
      { name: "LLM", color: "blue-text-gradient" },
      { name: "Chainlit", color: "green-text-gradient" },
      { name: "Llama3", color: "pink-text-gradient" },
      { name: "News Summarization", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-3.14-1-Preview-Template-Strings_Watermarked.1071657a0531.jpg",
    source_code_link: "https://github.com/ZhaoJackson/News_Operator",
  },
  {
    name: "Weather Forecast App",
    description:
      "An AI-agent weather assistant that combines forecast data with Llama3-based outfit recommendations. The project demonstrates how LLMs can be connected with external data sources to generate useful everyday guidance.",
    tags: [
      { name: "Llama3", color: "blue-text-gradient" },
      { name: "AI Agent", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "Plotly", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Factory-Method-Pattern-in-Python_Watermarked.6516a91d4d41.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Personal_Weather_Report",
  },
];

// ====== Data Science & Analytics Projects ======
const dataScienceAnalyticsProject = [
  {
    name: "Survey Panel Analytics",
    description:
      "An interactive survey analytics dashboard with quality-control and demographic monitoring features. Built to support survey research, respondent profiling, and business intelligence across large-scale panel data.",
    tags: [
      { name: "R Shiny", color: "blue-text-gradient" },
      { name: "Survey Analytics", color: "green-text-gradient" },
      { name: "Quality Control", color: "pink-text-gradient" },
      { name: "Business Intelligence", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Python-Print-Function_Watermarked.26066d64ad82.jpg",
    source_link: "https://jacksonzzc.shinyapps.io/verasight-panel-insights/",
    source_code_link: "https://github.com/ZhaoJackson/Survey_Panel_Analytics",
  },
  {
    name: "Weakly Supervised Learning with Image Classification",
    description:
      "A computer vision project focused on image classification under noisy-label conditions. The project explores how models can learn from imperfect annotations and improve classification robustness.",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "CIFAR-10", color: "green-text-gradient" },
      { name: "Noisy Labels", color: "pink-text-gradient" },
      { name: "Image Classification", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Control-Flow-Structures-in-Python_Watermarked-2.333650ffaf49.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Image-classification-Project",
  },
  {
    name: "National Disaster Support Assistant",
    description:
      "A disaster information dashboard and support assistant for emergency-response scenarios. The project organizes disaster-related information and provides user-facing guidance through an interactive Shiny interface.",
    tags: [
      { name: "R Shiny", color: "blue-text-gradient" },
      { name: "Disaster Analytics", color: "green-text-gradient" },
      { name: "Information Retrieval", color: "pink-text-gradient" },
      { name: "Public Support", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Polars-LazyFrame_Watermarked.4a66e20e0eaf.jpg",
    source_link: "https://jacksonzzc.shinyapps.io/r_shiny_disaster_dashboard/",
    source_code_link:
      "https://github.com/ZhaoJackson/National_Disaster_Support_Assistant",
  },
  {
    name: "Algorithm Bias Mitigation Strategies",
    description:
      "A fairness-focused machine-learning project evaluating bias mitigation strategies such as preferential sampling and local massaging. The project connects model performance with fairness-aware evaluation.",
    tags: [
      { name: "Fairness", color: "blue-text-gradient" },
      { name: "Bias Mitigation", color: "green-text-gradient" },
      { name: "COMPAS", color: "pink-text-gradient" },
      { name: "Machine Learning", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Set-Up-a-pyproject.toml-File-for-Your-Python-Project_Watermarked.51dc34160c1d.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Algorithm_Bias_Mitigation",
  },
  {
    name: "Recycle Object Detection",
    description:
      "A computer vision pipeline for detecting recycling and waste objects in videos. The project benchmarks object-detection models and applies tools such as Roboflow, OpenCV, MoviePy, and YOLOv8.",
    tags: [
      { name: "Object Detection", color: "blue-text-gradient" },
      { name: "Roboflow", color: "green-text-gradient" },
      { name: "OpenCV", color: "purple-text-gradient" },
      { name: "YOLOv8", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Missing-Data-in-Polars_Watermarked.2f1923ed31ad.jpg",
    source_code_link:
      "https://github.com/ZhaoJackson/Recycling_Object_Detection_Pipeline",
  },
  {
    name: "Air Gesture Plane Game",
    description:
      "A gesture-controlled computer vision game using real-time hand tracking. The project applies MediaPipe and OpenCV to translate body movement into interactive game control.",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "MediaPipe", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "Gesture Control", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Control-Flow-Structures-in-Python_Watermarked-2.333650ffaf49.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Air_Gesture_Plane_Game",
  },
];
export { list, mentalhealthAIProject, llmProject, dataScienceAnalyticsProject };