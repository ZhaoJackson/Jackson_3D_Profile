import {
  flask, fastapi, bitbucket, airflow, langchain, ollama, rag, streamlit,
  vercel, retool, chainlit, roboflow, tg, tableau, powerbi, spss, excel,
  anova, sp, eeg, siop, pp,
} from "../assets";

const technologies = [
  // Programming Languages
  { name: "Python",   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "R",        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
  { name: "Java",     icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "HTML5",    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
  { name: "CSS3",     icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },

  // Web Frameworks
  { name: "Flask",   icon: flask },
  { name: "FastAPI", icon: fastapi },

  // Databases
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },

  // Cloud Platforms
  { name: "AWS",   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { name: "GCP",   icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },

  // DevOps & Tools
  { name: "Docker",    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
  { name: "Git",       icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Bitbucket", icon: bitbucket },
  { name: "Airflow",   icon: airflow },

  // AI/ML Frameworks
  { name: "Hugging Face", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png" },
  { name: "LangChain",   icon: langchain },
  { name: "Ollama",      icon: ollama },
  { name: "OpenCV",      icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
  { name: "TensorFlow",  icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "PyTorch",     icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },

  // Development Tools
  { name: "n8n",      icon: "https://n8n.io/favicon.ico" },
  { name: "REST API", icon: "https://restfulapi.net/wp-content/uploads/rest.png" },
  { name: "RAG",      icon: rag },
  { name: "Streamlit", icon: streamlit },
  { name: "Vercel",    icon: vercel },
  { name: "Retool",    icon: retool },
  { name: "Chainlit",  icon: chainlit },
  { name: "Roboflow",  icon: roboflow },
  { name: "Telegram",  icon: tg },

  // Data Analytics & Visualization
  { name: "Tableau",     icon: tableau },
  { name: "Power BI",    icon: powerbi },
  { name: "Databricks",  icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { name: "SPSS",        icon: spss },
  { name: "Excel",       icon: excel },
  { name: "ANOVA",       icon: anova },

  // Psychology Domain
  { name: "Social Psychology",       icon: sp },
  { name: "Cognitive Psychology",    icon: "https://img.icons8.com/color/96/000000/brain.png" },
  { name: "EEG",                     icon: eeg },
  { name: "Evolutionary Psychology", icon: "https://img.icons8.com/color/96/000000/dna-helix.png" },
  { name: "I/O Psychology",          icon: siop },
  { name: "Positive Psychology",     icon: pp },
  { name: "Consumer Psychology",     icon: "https://pbs.twimg.com/profile_images/1625338757804093440/GfUHCd3O_400x400.jpg" },
];

export { technologies };
