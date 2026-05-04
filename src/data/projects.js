// Project category tabs
const list = [
  { id: "mentalhealthAI", title: "Mental Health & AI" },
  { id: "llm", title: "Large Language Models" },
  { id: "dataScienceAnalytics", title: "Data Science & Analytics" },
];

// ====== Mental Health & AI Projects ======
const mentalhealthAIProject = [
  {
    name: "Machine-Driven Evaluation Framework for Suicide Prevention",
    description:
      "AI chatbot evaluation benchmark for mental health and suicide prevention with rule-based ethical alignment, inclusivity scoring, and sentiment analysis.",
    tags: [
      { name: "AI Ethics", color: "blue-text-gradient" },
      { name: "Single-Turn Evaluation", color: "green-text-gradient" },
      { name: "Algorithmic Benchmarking", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Multiple-Inheritance-and-Mixins_Watermarked.1cfef28a6113.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Text-Reference-AIChatbot",
  },
  {
    name: "Web-Based Evaluation Product against AI Responses",
    description:
      "AI evaluation tool with suicidal prevention with automatic database for reinforcement learning with ethical alignment, inclusivity, complexity, and sentiment.",
    tags: [
      { name: "Drupal Framework", color: "blue-text-gradient" },
      { name: "Suicide Prevention", color: "green-text-gradient" },
      { name: "Reinforcement Learning", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/A-Complete-Walkthrough-of-Pythons-Asyncio_Watermarked.5b6b9a01fdc9.jpg",
    source_link: "http://crmforrealty.com/",
    source_code_link: "https://github.com/ZhaoJackson/AI_Response_Evaluation_Benchmark",
  },
  {
    name: "J . A . R . V . I . S",
    description:
      "AI-powered mental health assistant integrating Telegram, Spotify, and Ollama for therapeutic support through emotion analysis, philosophical wisdom, and music therapy.",
    tags: [
      { name: "Ollama", color: "green-text-gradient" },
      { name: "Spotify", color: "pink-text-gradient" },
      { name: "Telegram", color: "orange-text-gradient" },
      { name: "Music Therapy", color: "red-text-gradient" },
      { name: "Philosophical Wisdom", color: "green-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Modern-Web-Automation-With-Python-and-Selenium_Watermarked.08e8e08b976d.jpg",
    source_code_link: "https://github.com/ZhaoJackson/J.A.R.V.I.S",
  },
  {
    name: "Human VS AI Game",
    description:
      "Interactive Turing Test Game: Can you tell which response is from a human and which is from AI? A gamified mental health awareness tool that challenges users to distinguish between human and AI-generated responses to mental health prompts.",
    tags: [
      { name: "Turing Test", color: "blue-text-gradient" },
      { name: "Vercel", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/MySQL-and-Python_Watermarked.4353d1d57493.jpg",
    source_link: "https://turing-app.vercel.app/",
    source_code_link: "https://github.com/ZhaoJackson/Human_VS_AI_Game",
  },
  {
    name: "MBTI Personality Analysis",
    description:
      "MBTI mental health analysis with ML and Bayesian tuning for personalized treatment recommendations.",
    tags: [
      { name: "Random Forest", color: "blue-text-gradient" },
      { name: "Bayesian Tuning", color: "green-text-gradient" },
      { name: "mbti", color: "pink-text-gradient" },
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
      "A comprehensive AI-powered analytics platform for UN JointWork Plans financial data analysis, featuring predictive modeling, anomaly detection, and intelligent chatbot assistance.",
    tags: [
      { name: "streamlit", color: "blue-text-gradient" },
      { name: "prompt engineering", color: "green-text-gradient" },
      { name: "modeling", color: "pink-text-gradient" },
      { name: "OpenAI 4o & O1", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Monthly-Python-News_Blue_Watermarked.f56ede474cc7.jpg",
    source_link: "https://united-nations-legacy.streamlit.app/",
    source_code_link: "https://github.com/ZhaoJackson/United_Nations_Financial_Intelligence_Platform",
  },
  {
    name: "PsyChat",
    description:
      "Clinical trial application for benchmark evaluation of AI responses in multi-turn conversations. Guides users to understand AI interaction patterns and resolve personal mental health issues through therapeutic AI assistance.",
    tags: [
      { name: "Clinical Trial", color: "blue-text-gradient" },
      { name: "Azure OpenAI", color: "pink-text-gradient" },
      { name: "Multi-Turn Conversations", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-Requests-Library-Tutorial_Watermarked.3c9dfdc7b014.jpg",
    source_link: "https://psychatbot.streamlit.app/",
    source_code_link: "https://github.com/ZhaoJackson/PsyChat",
  },
  {
    name: "News Summary Generation",
    description:
      "An AI-powered news summarization pipeline using LLMs to distill articles into concise summaries, featuring multi-source ingestion and automated content delivery.",
    tags: [{ name: "streamlit", color: "blue-text-gradient" }],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-3.14-1-Preview-Template-Strings_Watermarked.1071657a0531.jpg",
    source_code_link: "https://github.com/ZhaoJackson/News_Operator",
  },
  {
    name: "Weather Forecast App",
    description:
      "A Streamlit app that provides weather forecasts and AI-powered outfit recommendations using Llama3. Features 3-day weather forecasts, interactive dashboards, and intelligent clothing suggestions.",
    tags: [
      { name: "plotly", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "ai-agent", color: "pink-text-gradient" },
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
      "Interactive survey panel analytics dashboard with automated quality control pipeline. Built with R Shiny for demographic analysis, response density modeling, and real-time quality monitoring across 100+ survey projects.",
    tags: [
      { name: "airflow", color: "blue-text-gradient" },
      { name: "Shiny", color: "green-text-gradient" },
      { name: "panel analysis", color: "pink-text-gradient" },
      { name: "Business Intelligence", color: "purple-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Python-Print-Function_Watermarked.26066d64ad82.jpg",
    source_link: "https://jacksonzzc.shinyapps.io/verasight-panel-insights/",
    source_code_link: "https://github.com/ZhaoJackson/Survey_Panel_Analytics",
  },
  {
    name: "Weakly Supervised Learning with Imaging Classification",
    description:
      "Weak supervised learning on image classification with noisy labels.",
    tags: [
      { name: "cifar-10", color: "blue-text-gradient" },
      { name: "noisy labels", color: "green-text-gradient" },
      { name: "image classification", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Control-Flow-Structures-in-Python_Watermarked-2.333650ffaf49.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Image-classification-Project",
  },
  {
    name: "National Disaster Support Assistant",
    description:
      "A FEMA Disaster Support Assistant with disaster information retrieval and response guidance for disaster scenario simulation and user interaction.",
    tags: [
      { name: "Shiny", color: "blue-text-gradient" },
      { name: "Disaster Information Retrieval", color: "green-text-gradient" },
      { name: "Disaster Response Guidance", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Polars-LazyFrame_Watermarked.4a66e20e0eaf.jpg",
    source_link: "https://jacksonzzc.shinyapps.io/r_shiny_disaster_dashboard/",
    source_code_link: "https://github.com/ZhaoJackson/National_Disaster_Support_Assistant",
  },
  {
    name: "Algorithm Bias Mitigation Strategies",
    description:
      "ML-based feature selection + conditional discrimination mitigation with unified evaluation and outputs.",
    tags: [
      { name: "preferential sampling", color: "blue-text-gradient" },
      { name: "local massaging", color: "green-text-gradient" },
      { name: "compas score", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Set-Up-a-pyproject.toml-File-for-Your-Python-Project_Watermarked.51dc34160c1d.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Algorithm_Bias_Mitigation",
  },
  {
    name: "Recycle Object Detection",
    description:
      "Benchmarking and deploying computer vision models for object detection on recycling and waste videos using Roboflow API, OpenCV, and MoviePy.",
    tags: [
      { name: "computer vision", color: "blue-text-gradient" },
      { name: "roboflow", color: "green-text-gradient" },
      { name: "openCV", color: "purple-text-gradient" },
      { name: "yolov8", color: "pink-text-gradient" },
    ],
    image:
      "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Missing-Data-in-Polars_Watermarked.2f1923ed31ad.jpg",
    source_code_link: "https://github.com/ZhaoJackson/Recycling_Object_Detection_Pipeline",
  },
];

export { list, mentalhealthAIProject, llmProject, dataScienceAnalyticsProject };
