import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,xneuronz,holopin,nyu,bits,logo,
    flask,fastapi,bitbucket,airflow,langchain,ollama,rag,streamlit,
    vercel,retool,chainlit,roboflow,tg,tableau,powerbi,spss,excel,
    anova,sp,eeg,siop,pp,
  } from "../assets";

  import udemy from "../assets/udemy.jpg"
  import DSI from "../assets/DSI.jpeg"
  import UN from "../assets/UN.jpeg"
  import NGI from "../assets/NGI.jpeg"
    
  const profiles = [
    {
      link: "https://drive.google.com/file/d/1P672kj6AFx5DL31GDpr3qi3Gsgt3ZhNW/view?usp=sharing",
      icon: udemy,
    }
  ];

  const research = [
    {
      title: 'Published Research Paper : "COVID-19 is Not All Bad News: Negative and Surprisingly Positive Reports from College STEM Students and Implications for STEM Instruction" (2023). Student Research. 55, Scholarly and Creative Work from DePauw University."',
      link: "https://scholarship.depauw.edu/studentresearchother/55/"
    },
    {
      title: 'Research Paper under Review : "Evaluating Trust and Inclusivity: A Machine-Driven Benchmark for Large Language Model Chatbots in LGBTQ+ Suicide Prevention, AI & Society, Springer 2025. "',
    },
    {
      title: 'On going Research work : "Don’t Treat AI Chatbots like a Google Search: An Introduction to Prompt Engineering for Social Workers"....  "',
    },
    {
      title: 'On going Research work : "Health Equity and Technology: Integrating Critical Consciousness Theory with Artificial Intelligence (AI) Development and Implementation"...  "',
    },
    {
      title: 'On going Research work : "Benchmarking AI Text Generation for Equity in Social Work: A Framework for Ethical and Inclusive Evaluation" ....  "',
    },
    {
      title: 'On going Research work : "A Scoping Review on the Application of Artificial Intelligence (AI) and Large Language Models (LLMs) in LGBTQ+ Health: Implications for Social Work Practice and Research" ....  "',
    },
    {
      title: 'On going Research work : "Evaluating Large Language Models for Project Communication and Report Generation in Engineering Management" ....  "',
    }
  ]
  
  // All technologies combined for random selection
  const technologies = [
    // Programming Languages
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "R",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    
    // Web Frameworks
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    
    // Databases
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    
    // Cloud Platforms
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    },
    {
      name: "GCP",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    },
    
    // DevOps & Tools
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Bitbucket",
      icon: bitbucket,
    },
    {
      name: "Airflow",
      icon: airflow,
    },
    
    // AI/ML Frameworks
    {
      name: "Hugging Face",
      icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png",
    },
    {
      name: "LangChain",
      icon: langchain,
    },
    {
      name: "Ollama",
      icon: ollama,
    },
    {
      name: "OpenCV",
      icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    },
    {
      name: "PyTorch",
      icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    },
    
    // Development Tools
    {
      name: "n8n",
      icon: "https://n8n.io/favicon.ico",
    },
    {
      name: "REST API",
      icon: "https://restfulapi.net/wp-content/uploads/rest.png",
    },
    {
      name: "RAG",
      icon: rag,
    },
    {
      name: "Streamlit",
      icon: streamlit,
    },
    {
      name: "Vercel",
      icon: vercel,
    },
    {
      name: "Retool",
      icon: retool,
    },
    {
      name: "Chainlit",
      icon: chainlit,
    },
    {
      name: "Roboflow",
      icon: roboflow,
    },
    {
      name: "Telegram",
      icon: tg,
    },
    
    // Data Analytics & Visualization
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "Databricks",
      icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
    },
    {
      name: "SPSS",
      icon: spss,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "ANOVA",
      icon: anova,
    },
    
    // Psychology Domain
    {
      name: "Social Psychology",
      icon: sp,
    },
    {
      name: "Cognitive Psychology",
      icon: "https://img.icons8.com/color/96/000000/brain.png",
    },
    {
      name: "EEG",
      icon: eeg,
    },
    {
      name: "Evolutionary Psychology",
      icon: "https://img.icons8.com/color/96/000000/dna-helix.png",
    },
    {
      name: "I/O Psychology",
      icon: siop,
    },
    {
      name: "Positive Psychology",
      icon: pp,
    },
    {
      name: "Consumer Psychology",
      icon: "https://pbs.twimg.com/profile_images/1625338757804093440/GfUHCd3O_400x400.jpg",
    },
  ];

// ====== Category list  ======
  const list = [
    { 
      id: "mentalhealthAI", 
      title: "Mental Health & AI" 
    },
    { 
      id: "llm",         
      title: "Large Language Models" 
    },
    { 
      id: "dataScienceAnalytics",     
      title: "Data Science & Analytics" 
    },
  ];

// ====== Assistants & Chatbots ======
  const mentalhealthAIProject = [
    {
      name: "Machine-Driven Evaluation Framework for Suicide Prevention",
      description: 
        "AI chatbot evaluation benchmark for mental health and suicide prevention with rule-based ethical alignment, inclusivity scoring, and sentiment analysis.",
      tags: [
        { 
          name: "AI Ethics", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Single-Turn Evaluation", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Algorithmic Benchmarking", 
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Multiple-Inheritance-and-Mixins_Watermarked.1cfef28a6113.jpg",
      source_code_link: "https://github.com/ZhaoJackson/Text-Reference-AIChatbot",
    },
    {
      name: "Web-Based Evaluation Product against AI Responses",
      description: 
        "AI evaluation tool with suicidal prevention with automatic database for reinforcement learning with ethical alignment, inclusivity, complexity, and sentiment.",
      tags: [
        { 
          name: "Drupal Framework", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Suicide Prevention", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Reinforcement Learning", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/A-Complete-Walkthrough-of-Pythons-Asyncio_Watermarked.5b6b9a01fdc9.jpg",
      source_link: "http://crmforrealty.com/",
      source_code_link: "https://github.com/ZhaoJackson/AI_Response_Evaluation_Benchmark",
    },
    {
      name: "J . A . R . V . I . S",
      description: 
        "AI-powered mental health assistant integrating Telegram, Spotify, and Ollama for therapeutic support through emotion analysis, philosophical wisdom, and music therapy",
      tags: [
        { 
          name: "Ollama", 
          color: "green-text-gradient"
        }, 
        { 
          name: "Spotify", 
          color: "pink-text-gradient" 
        },
        {
          name: "Telegram",
          color: "orange-text-gradient" 
        },
        {
          name: "Music Therapy",
          color: "red-text-gradient" 
        },
        {
          name: "Philosophical Wisdom",
          color: "green-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Modern-Web-Automation-With-Python-and-Selenium_Watermarked.08e8e08b976d.jpg",
      source_code_link: "https://github.com/ZhaoJackson/J.A.R.V.I.S",
    },
    {
      name: "Huaman VS AI Game",
      description: 
        "Interactive Turing Test Game: Can you tell which response is from a human and which is from AI? A gamified mental health awareness tool that challenges users to distinguish between human and AI-generated responses to mental health prompts.",
      tags: [
        { 
          name: "Turing Test", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Vercel", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/MySQL-and-Python_Watermarked.4353d1d57493.jpg",
      source_link: "https://turing-app.vercel.app/",
      source_code_link: "https://github.com/ZhaoJackson/Human_VS_AI_Game",
    },
    {
      name: "MBTI Personality Analysis",
      description: 
        "MBTI mental health analysis with ML and Bayesian tuning for personalized treatment recommendations.",
      tags: [
        { 
          name: "Random Forest", 
          color: "blue-text-gradient" 
        }, 
        {
          name: "Bayesian Tuning",
          color: "green-text-gradient" 
        },
        {
          name: "mbti",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/code_quality_img.73eae557a204.jpg",
      source_code_link: "https://github.com/ZhaoJackson/MBTI_Mental_Health",
    },
  ];

// ====== Large Language Models ======
  const llmProject = [
    {
      name: "United Nations Funding Intelligence Chatbot",
      description:
        "A comprehensive AI-powered analytics platform for UN JointWork Plans financial data analysis, featuring predictive modeling, anomaly detection, and intelligent chatbot assistance",
      tags: [
        { 
          name: "streamlit", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "prompt engineering", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "modeling", 
          color: "pink-text-gradient" 
        },
        {
          name: "OpenAI 4o & O1",
          color: "purple-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Monthly-Python-News_Blue_Watermarked.f56ede474cc7.jpg",
      source_link: "https://united-nations-legacy.streamlit.app/",
      source_code_link: "https://github.com/ZhaoJackson/United_Nations_Financial_Intelligence_Platform",
    },
    {
      name: "PsyChat",
      description: 
        "Clinical trial application for benchmark evaluation of AI responses in multi-turn conversations. Guides users to understand AI interaction patterns and resolve personal mental health issues through therapeutic AI assistance.",
      tags: [
        { 
          name: "Clinical Trial", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Azure OpenAI",
          color: "pink-text-gradient" 
        },
        { 
          name: "Multi-Turn Conversations", 
          color: "purple-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-Requests-Library-Tutorial_Watermarked.3c9dfdc7b014.jpg",
      source_link: "https://psychatbot.streamlit.app/",
      source_code_link: "https://github.com/ZhaoJackson/PsyChat",
    },
    {
      name: "News Summary Generation",
      description:
        "A comprehensive AI-powered analytics platform for UN JointWork Plans financial data analysis, featuring predictive modeling, anomaly detection, and intelligent chatbot assistance",
      tags: [
        { 
          name: "streamlit", 
          color: "blue-text-gradient" 
        }, 
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-3.14-1-Preview-Template-Strings_Watermarked.1071657a0531.jpg",
      source_code_link: "https://github.com/ZhaoJackson/News_Operator",
    },
    {
      name: "Weather Forecast APP",
      description: "A Streamlit app that provides weather forecasts and AI-powered outfit recommendations using Llama3. Features 3-day weather forecasts, interactive dashboards, and intelligent clothing suggestions.",
      tags: [
        { 
          name: "plotly", 
          color: "blue-text-gradient" 
        }, 
        {
          name: "streamlit",
          color: "green-text-gradient" 
        },
        {
          name: "ai-agent",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Factory-Method-Pattern-in-Python_Watermarked.6516a91d4d41.jpg",
      source_code_link: "https://github.com/ZhaoJackson/Personal_Weather_Report",
    },
  ];

// ====== UN, SDG & Analytics ======
  const dataScienceAnalyticsProject = [
    {
      name: "Survey Panel Analytics",
      description:
        "Interactive survey panel analytics dashboard with automated quality control pipeline. Built with R Shiny for demographic analysis, response density modeling, and real-time quality monitoring across 100+ survey projects.",
      tags: [
        { 
          name: "airflow", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Shiny", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "panel analysis", 
          color: "pink-text-gradient" 
        },
        {
          name: "Business Intelligence",
          color: "purple-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Python-Print-Function_Watermarked.26066d64ad82.jpg",
      source_link: "https://jacksonzzc.shinyapps.io/verasight-panel-insights/",
      source_code_link: "https://github.com/ZhaoJackson/Survey_Panel_Analytics",
    },
    {
      name: "Weakly Supervised Learning with Imaging Classification",
      description: "Weak supervised learning on image classification with noisy labels.",
      tags: [
        { 
          name: "cifar-10", 
          color: "blue-text-gradient" 
        }, 
        {
          name: "noisy labels",
          color: "green-text-gradient" 
        },
        {
          name: "image classification",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Control-Flow-Structures-in-Python_Watermarked-2.333650ffaf49.jpg",
      source_code_link: "https://github.com/ZhaoJackson/Image-classification-Project",
    },
    {
      name: "National Disaster Support Assistant",
      description:
        "A FEMA Disaster Support Assistant with disaster information retrieval and response guidance for disaster scenario simulation and user interaction.",
      tags: [
        { 
          name: "Shiny", 
          color: "blue-text-gradient" 
        }, 
        {
          name: "Disaster Information Retrieval",
          color: "green-text-gradient" 
        },
        {
          name: "Disaster Response Guidance",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Polars-LazyFrame_Watermarked.4a66e20e0eaf.jpg",
      source_link: "https://jacksonzzc.shinyapps.io/r_shiny_disaster_dashboard/",
      source_code_link: "https://github.com/ZhaoJackson/National_Disaster_Support_Assistant",
    },
    {
      name: "Algorithm Bias Mitigation Strategies",
      description: "ML-based feature selection + conditional discrimination mitigation with unified evaluation and outputs.",
      tags: [
        { 
          name: "preferential sampling", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "local massaging", 
          color: "green-text-gradient" 
        },
        {
          name: "compas score",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Set-Up-a-pyproject.toml-File-for-Your-Python-Project_Watermarked.51dc34160c1d.jpg",
      source_code_link: "https://github.com/ZhaoJackson/Algorithm_Bias_Mitigation",
    },
    {
      name: "Recycle Object Detection",
      description: "Benchmarking and deploying computer vision models for object detection on recycling and waste videos using Roboflow API, OpenCV, and MoviePy.",
      tags: [
        { 
          name: "computer vision", 
          color: "blue-text-gradient" 
        }, 
        {
          name: "roboflow",
          color: "green-text-gradient" 
        },
        {
          name: "openCV",
          color: "purple-text-gradient" 
        },
        {
          name: "yolov8",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-to-Work-with-Missing-Data-in-Polars_Watermarked.2f1923ed31ad.jpg",
      source_code_link: "https://github.com/ZhaoJackson/Recycling_Object_Detection_Pipeline",
    },
  ];


  const experiences = [
    {
      title: "Machine Learning Engineer",
      company_name: "NYU Langone Health",
      icon: "https://pbs.twimg.com/profile_images/1675847757850988544/qDE0W0XQ_400x400.jpg",
      iconBg: "#57068C",
      date: "August 2025 - Current",
      link: "https://med.nyu.edu/departments-institutes/child-adolescent-psychiatry/",
      points: [
        "Designed mental health AI pipeline by training 50,000+ therapeutic conversations in Hugging Face Hub on dual evaluation framework (traditional + AI-judge metrics).",
        "Fine-tuned pipeline including SFT, DPO, and ORPO with 85% coherence scores and 75% helpfulness ratings, enabling advance patient care through AI."
      ],
      link: "https://med.nyu.edu/departments-institutes/child-adolescent-psychiatry/",
    },
    {
      title: "Algorithm Engineer",
      company_name: "The Data Science Institute at Columbia University",
      icon: DSI,
      iconBg: "#00336c",
      date: "Jun 2024 - Current",
      link: "https://datascience.columbia.edu/",
      points: [
        "Utilized and fine-tuned BERT model in TensorFlow for sentiment analysis, alongside custom algorithms (synonym replacement, N-grams permutations, etc.), achieving 89.2% accuracy in identifying nuanced sentiment differences.",
        "Engineered data workflows on GCP, incorporating Google Cloud Databases to optimize data retrieval and management; developed data pipeline on 10K+ social work reference texts, comparing textual data via machine-driven evaluation algorithms (BLEU, ROUGE, METEOR, etc.), assessing precision and accuracy among LGBTQ+ communities.",
        "Enhanced NLP algorithms (VADER, TextBlob, BERT, LSTM, Naive Bayes Classifier, GPT-3.5, etc.) with real-time processing via REST API integrations, utilizing Google Cloud Natural Language API for outcome cross-checking.",
        "Delivered AI insights by transforming complex reference texts into structured data, driving informed decision-making processes in prompt modifications and ensuring AI output (GPT-4, Claude) provide accurate, ethical, and inclusive social work guidance.",
      ],
      link: "https://datascience.columbia.edu/",
    },
    {
      title: "Data Scientist, AI",
      company_name: "United Nations Development Coordination Office",
      icon: UN,
      iconBg: "#009EDB",
      date: "Feb 2025 - Aug 2025",
      link: "",
      points: [
        "Developed a production-ready financial intelligence chatbot using Retrieval-Augmented Generation and GPT-4o/O1, handling funding questions from 162countries and improving relevance and accuracy scores by 20% via fine-tuning the retrieval pipeline on 500+ auto-generated prompts and human-labeled data.",
        "Engineered 80+ hybrid features for funding and agency prediction across 150 thematic areas, reduced dimensionality to 40 via PCA, and performed model selection (SVM, GBM, LR, RF, KNN, etc.) with Random Search CV and Bayesian tuning, achieving an average of 89% classification accuracy.",
      ],
      link: "https://un-dco.org/",
    },
    {
      title: "Data Scientist, Computer Vision",
      company_name: "NextGen Invent Corp",
      icon: NGI,
      iconBg: "#ffffff",
      date: "Jun 2024 - Dec 2024",
      link: "https://www.sentientlabs.tech",
      points: [
        "Deployed 8 object detection models from Roboﬂow Universe based on deep learning and computer vision techniques (CNN, VGG16, YOLOv5, YOLOv8, etc.), reducing inference time by 25% through optimal model training and selection.",
        "Engineered video processing pipeline via OpenCV for 3K+ video frames and store 10K+ frames in database, improving model performance from 35% to 74.5%, achieving a ﬁnal 95% object detection accuracy.",
        "Leveraged Llama3 model to build interactive weather forecast dashboard using Streamlit and Plotly, automating data collection from Google Weather API to visualize weather trends with outﬁt recommendations",
        "Designed AI-driven Copilot ChatWindow through Chainlit; integrated and tuned prompts for training LLM-Axe to retrieve real-time information API calls based on user queries and Llama3 for contextual responses blog summaries, enhancing model’s performance up to a 30% reduction in average response time",
      ],
      link: "https://nextgeninvent.com/",
    },
    {
      title: "Data Scientist",
      company_name: "Techlent",
      icon: hf,
      iconBg: "#53bfb0",
      date: "Jun 2023 - Jun 2024",
      link: "",
      points: [
        "Developed and maintained data pipelines using SQL to extract and load supermarket sales data into a PostgreSQL database on AWS.",
        "Defined metrics to measure sales performance and created dashboards and reports in Tableau to visualize daily and monthly sales trends and product ratings by category across different retail stores.",
        "Identified key factors affecting daily and monthly sales, delivering actionable insights to retail managers to optimize stock inventory.",
      ],      
      link: "https://www.techlent.com/cn",
    },
  ];
  
  const educations = [
    {
      degree: "Master of Arts",
      branch:
        "Quantitative Methods in the Social Sciences",
      //marks:
      // "GPA : 4.08 / 4.0"
      name: "Columbia University",
      year: "2023 - 2025",
      image: nyu,
    },
    {
      degree:
        "Bachelor of Arts",
      branch : "Psychology & Mathematics",
      // marks:
      // "GPA : 3.72 / 4.0",
      name: "DePauw University",
      year: "2018 - 2023",
      image: bits,
    },
  ];

  const about = {
    name: "Jackson Zhao",
    title: "Data Scientist | AI & Mental Health Researcher",
    description1:
      "I'm Jackson Zhao, a data scientist and AI researcher passionate about building innovative technologies that create meaningful social impact.",
    description2:
      "My passion is deeply rooted in mental health care 💙. I’ve developed machine-driven benchmarks to evaluate suicide prevention chatbots, fine-tuned language models for ethical alignment, and built pipelines that translate complex social data into actionable insights for decision-making.",
    description3:
      "I speak fluent Python 🐍 (plus R, SQL, and cloud platforms like GCP, AWS, and Azure), and enjoy experimenting with frameworks such as TensorFlow, PyTorch, and Hugging Face 🤖. I’m especially drawn to large language models, generative AI, and responsible AI design.",
    description4:
      "My goal is to be a solid bridge between mental health and AI, ensuring that technology not only scales but also heals. If you’re excited about reimagining mental health with AI—whether through inclusive chatbots, predictive analytics, or responsible data science—let’s connect and build something impactful together! 🚀",
  };
  
  
  export { 
    list, 
    profiles, 
    technologies, 
    experiences, 
    educations, 
    research, 
    about,
    mentalhealthAIProject,
    llmProject,
    dataScienceAnalyticsProject
  };
