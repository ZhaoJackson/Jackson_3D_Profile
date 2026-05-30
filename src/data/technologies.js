import {
  flask, fastapi, bitbucket, airflow, langchain, ollama, rag, streamlit,
  vercel, retool, chainlit, roboflow, tg, tableau, powerbi, spss, excel,
  anova, rest,
} from "../assets";

/*
  Icon URL strategy
  ─────────────────
  Local imports  → always bundled by Vite, work as <img> and WebGL texture ✓
  jsdelivr CDN   → devicons SVGs cached globally, CORS *, no rate limits ✓
  vectorlogo.zone → stable SVG CDN with CORS * ✓
  api.iconify.design → free icon API, CORS *, hotlink-allowed, no account needed ✓
  cdn.simpleicons.org → brand SVGs, CORS * ✓

  Replaced:
  ✗ raw.githubusercontent.com/devicons → rate-limited, uses same files but via jsdelivr
  ✗ img.icons8.com/color/96/* → hotlink-blocked for production referrers
  ✗ mne.tools SVG → third-party site, no guaranteed CORS
  ✗ raw.githubusercontent.com/scipy → rate-limited GitHub raw
*/

// ── Shorthand helpers ──────────────────────────────────────
const jsd  = (path)  => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
const ico  = (icon, color = "%234db6e4") =>
  `https://api.iconify.design/${icon}.svg?color=${color}`;

const technologies = [
  // ── Programming Languages ────────────────────────────────
  { name: "Python",  icon: jsd("python/python-original.svg") },
  { name: "R",       icon: jsd("r/r-original.svg") },
  { name: "Java",    icon: jsd("java/java-original.svg") },
  { name: "HTML5",   icon: jsd("html5/html5-original.svg") },
  { name: "CSS3",    icon: jsd("css3/css3-original.svg") },

  // ── Web Frameworks ───────────────────────────────────────
  { name: "Flask",   icon: flask },
  { name: "FastAPI", icon: fastapi },

  // ── Databases ────────────────────────────────────────────
  { name: "MySQL",   icon: jsd("mysql/mysql-original.svg") },

  // ── Cloud Platforms ──────────────────────────────────────
  { name: "AWS",     icon: jsd("amazonwebservices/amazonwebservices-original.svg") },
  { name: "Azure",   icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { name: "GCP",     icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },

  // ── DevOps & Tools ───────────────────────────────────────
  { name: "Docker",     icon: jsd("docker/docker-original.svg") },
  { name: "Git",        icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Bitbucket",  icon: bitbucket },
  { name: "Airflow",    icon: airflow },

  // ── AI / ML Frameworks ──────────────────────────────────
  { name: "Hugging Face", icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png" },
  { name: "LangChain",    icon: langchain },
  { name: "Ollama",       icon: ollama },
  { name: "OpenCV",       icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" },
  { name: "TensorFlow",   icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "PyTorch",      icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },

  // ── Development Tools ────────────────────────────────────
  { name: "n8n",       icon: "https://cdn.simpleicons.org/n8n" },
  { name: "REST API",  icon: rest },
  { name: "RAG",       icon: rag },
  { name: "Streamlit", icon: streamlit },
  { name: "Vercel",    icon: vercel },
  { name: "Retool",    icon: retool },
  { name: "Chainlit",  icon: chainlit },
  { name: "Roboflow",  icon: roboflow },
  { name: "Telegram",  icon: tg },

  // ── Data Analytics & Visualisation ──────────────────────
  { name: "Tableau",    icon: tableau },
  { name: "Power BI",   icon: powerbi },
  { name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { name: "SPSS",       icon: spss },
  { name: "Excel",      icon: excel },
  { name: "ANOVA",      icon: anova },

  // ── Neuroscience, EEG & BCI Tools ───────────────────────
  // icons8.com hotlink-blocks production referrers → replaced with Iconify API
  // mne.tools SVG has no guaranteed CORS → replaced with Iconify MDI
  { name: "MNE-Python",                 icon: ico("mdi/head-cog-outline") },
  { name: "EEG Signal Processing",      icon: "https://api.iconify.design/noto/brain.svg" },
  { name: "Brain-Computer Interfaces",  icon: "https://api.iconify.design/noto/robot.svg" },
  { name: "Neuroimaging Data Analysis", icon: ico("mdi/brain") },
  { name: "Time-Series Analysis",       icon: ico("mdi/chart-timeline-variant") },
  { name: "Signal Filtering",           icon: ico("mdi/sine-wave") },
  { name: "ICA / Artifact Rejection",   icon: ico("mdi/tune") },
  { name: "PSD / Band Power",           icon: ico("mdi/chart-bell-curve") },
  { name: "Event-Related Potentials",   icon: ico("mdi/pulse", "%23e74c3c") },

  // scipy raw GitHub URL → replaced with Iconify simple-icons (stable, CORS *)
  { name: "SciPy",       icon: ico("simple-icons/scipy", "%238CAAE6") },
  { name: "NumPy",       icon: jsd("numpy/numpy-original.svg") },
  { name: "Pandas",      icon: jsd("pandas/pandas-original.svg") },
  { name: "Scikit-learn",icon: jsd("scikitlearn/scikitlearn-original.svg") },
  { name: "Matplotlib",  icon: jsd("matplotlib/matplotlib-original.svg") },
];

export { technologies };
