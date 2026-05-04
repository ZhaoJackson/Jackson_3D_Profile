import DSI from "../assets/DSI.jpeg";
import UN from "../assets/UN.jpeg";
import NGI from "../assets/NGI.jpeg";
import { hf } from "../assets";

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
      "Fine-tuned pipeline including SFT, DPO, and ORPO with 85% coherence scores and 75% helpfulness ratings, enabling advance patient care through AI.",
    ],
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
  },
  {
    title: "Data Scientist, AI",
    company_name: "United Nations Development Coordination Office",
    icon: UN,
    iconBg: "#009EDB",
    date: "Feb 2025 - Aug 2025",
    link: "https://un-dco.org/",
    points: [
      "Developed a production-ready financial intelligence chatbot using Retrieval-Augmented Generation and GPT-4o/O1, handling funding questions from 162 countries and improving relevance and accuracy scores by 20% via fine-tuning the retrieval pipeline on 500+ auto-generated prompts and human-labeled data.",
      "Engineered 80+ hybrid features for funding and agency prediction across 150 thematic areas, reduced dimensionality to 40 via PCA, and performed model selection (SVM, GBM, LR, RF, KNN, etc.) with Random Search CV and Bayesian tuning, achieving an average of 89% classification accuracy.",
    ],
  },
  {
    title: "Data Scientist, Computer Vision",
    company_name: "NextGen Invent Corp",
    icon: NGI,
    iconBg: "#ffffff",
    date: "Jun 2024 - Dec 2024",
    link: "https://nextgeninvent.com/",
    points: [
      "Deployed 8 object detection models from Roboflow Universe based on deep learning and computer vision techniques (CNN, VGG16, YOLOv5, YOLOv8, etc.), reducing inference time by 25% through optimal model training and selection.",
      "Engineered video processing pipeline via OpenCV for 3K+ video frames and store 10K+ frames in database, improving model performance from 35% to 74.5%, achieving a final 95% object detection accuracy.",
      "Leveraged Llama3 model to build interactive weather forecast dashboard using Streamlit and Plotly, automating data collection from Google Weather API to visualize weather trends with outfit recommendations.",
      "Designed AI-driven Copilot ChatWindow through Chainlit; integrated and tuned prompts for training LLM-Axe to retrieve real-time information API calls based on user queries and Llama3 for contextual responses blog summaries, enhancing model's performance up to a 30% reduction in average response time.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Techlent",
    icon: hf,
    iconBg: "#53bfb0",
    date: "Jun 2023 - Jun 2024",
    link: "https://www.techlent.com/cn",
    points: [
      "Developed and maintained data pipelines using SQL to extract and load supermarket sales data into a PostgreSQL database on AWS.",
      "Defined metrics to measure sales performance and created dashboards and reports in Tableau to visualize daily and monthly sales trends and product ratings by category across different retail stores.",
      "Identified key factors affecting daily and monthly sales, delivering actionable insights to retail managers to optimize stock inventory.",
    ],
  },
];

export { experiences };
