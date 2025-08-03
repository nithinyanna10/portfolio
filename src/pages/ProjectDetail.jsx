import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaDatabase, FaBrain, FaChartLine, FaCode, FaServer } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data - matching the projects array from Projects.jsx
  const projects = [
    {
      id: 1,
      title: "Web Monitor RAG - Full-Stack Monitoring Platform",
      description: "A comprehensive automated pipeline for monitoring, scraping, and analyzing websites using RAG (Retrieval-Augmented Generation), PostgreSQL, ChromaDB, and LLMs. Features 5 mock sites, automated scraping, delta detection, and Streamlit dashboard.",
      technologies: ["RAG", "PostgreSQL", "ChromaDB", "Streamlit", "Flask", "Gemma", "Ollama", "Automation"],
      category: "Full-Stack AI",
      github: "https://github.com/nithinyanna10/web_monitor_rag",
      live: "#",
      longDescription: "This project demonstrates a complete full-stack AI system that combines web scraping, data storage, vector embeddings, and LLM-powered analysis. The system monitors multiple websites, detects changes, stores structured data in PostgreSQL and embeddings in ChromaDB, and provides intelligent Q&A through RAG.",
      features: [
        "5 Flask mock sites simulating dynamic retail, news, weather, stock, and event sites",
        "Automated scraping engine with normalization and delta detection",
        "Dual storage: PostgreSQL for structured data, ChromaDB for embeddings",
        "RAG engine with Gemma LLM via Ollama for intelligent Q&A",
        "Streamlit dashboard for data exploration and chat interface",
        "Hourly automation via cronjob for continuous monitoring"
      ],
      architecture: {
        components: [
          { name: "Mock Sites", icon: <FaServer />, description: "5 Flask applications simulating dynamic websites" },
          { name: "Scraper Engine", icon: <FaCode />, description: "Automated scraping with normalization and delta detection" },
          { name: "Storage Layer", icon: <FaDatabase />, description: "PostgreSQL for structured data, ChromaDB for embeddings" },
          { name: "RAG Engine", icon: <FaBrain />, description: "LLM-powered Q&A with semantic search" },
          { name: "Dashboard", icon: <FaChartLine />, description: "Streamlit UI for data exploration and chat" }
        ]
      },
      codeSnippets: [
        {
          title: "RAG Query Handler",
          language: "python",
          code: `def query_rag(question: str, collection, llm_client):
    # Generate embeddings for the question
    question_embedding = embedder.encode(question)
    
    # Search for similar documents
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=5
    )
    
    # Build context from retrieved documents
    context = "\\n".join([doc.page_content for doc in results['documents'][0]])
    
    # Generate response using LLM
    prompt = f"""Context: {context}\\n\\nQuestion: {question}\\n\\nAnswer:"""
    response = llm_client.chat(prompt)
    
    return response, context`
        },
        {
          title: "Automated Pipeline Script",
          language: "bash",
          code: `#!/bin/bash
# Master automation script for the monitoring pipeline

echo "Starting full pipeline at $(date)"

# 1. Start mock sites
cd mock_sites
bash run_all.sh &
cd ..

# 2. Run scraper
python scraper/main.py

# 3. Process and store data
python storage/insert_data.py

# 4. Update embeddings
python rag_engine/update_embeddings.py

echo "Pipeline completed at $(date)"`
        },
        {
          title: "Streamlit Dashboard",
          language: "python",
          code: `import streamlit as st
import chromadb
from rag_engine.query_handler import query_rag

st.title("Web Monitor RAG Dashboard")

# Delta Viewer
st.header("📊 Delta Viewer")
deltas = load_recent_deltas()
for delta in deltas:
    st.write(f"**{delta.site}** - {delta.timestamp}")
    st.code(delta.changes)

# RAG Chat Interface
st.header("🤖 RAG Chat")
question = st.text_input("Ask about the monitored data:")
if question:
    response, context = query_rag(question, collection, llm_client)
    st.write("**Answer:**", response)
    with st.expander("View Context"):
        st.code(context)`
        }
      ]
    },
    {
      id: 2,
      title: "LLM Agent Evaluation & Reasoning Analyzer",
      description: "Developed an agent-based evaluation framework for Android automation tasks using Gemma 12B via Ollama, with few-shot prompting and self-reflection modules.",
      technologies: ["Gemma 12B", "Ollama", "Chain-of-Thought", "Self-Reflection", "Evaluation Framework", "Android World"],
      category: "AI Research",
      github: "https://github.com/nithinyanna10/llm_agent_eval",
      live: "#",
      longDescription: "This research project focuses on evaluating LLM agents' reasoning capabilities in Android automation tasks using the Android World benchmark. It implements advanced prompting strategies including few-shot examples, chain-of-thought reasoning, and self-reflection mechanisms to improve agent performance and interpretability.",
      features: [
        "Agent-based evaluation framework for Android automation tasks",
        "Advanced prompting strategies: few-shot examples and chain-of-thought",
        "Self-reflection modules for agent introspection and learning",
        "Comprehensive evaluation metrics: step-level accuracy, episode success rate",
        "Integration with Gemma 12B via Ollama for LLM capabilities",
        "Task-specific performance analysis across 27 different Android tasks",
        "Error pattern analysis and visualization of common mistakes",
        "Automated PDF report generation with detailed logs and charts"
      ],
      architecture: {
        components: [
          { name: "Enhanced Agent", icon: <FaBrain />, description: "Android World agent with reflection capabilities" },
          { name: "Prompt Engine", icon: <FaCode />, description: "Few-shot and chain-of-thought prompting strategies" },
          { name: "Evaluation System", icon: <FaChartLine />, description: "Comprehensive metrics and analysis framework" },
          { name: "Report Generator", icon: <FaDatabase />, description: "Automated PDF reports with visualizations" }
        ]
      },
      codeSnippets: [
        {
          title: "Enhanced Agent with Self-Reflection",
          language: "python",
          code: `class AndroidWorldAgent:
    def __init__(self, llm_provider, prompt_template="enhanced", enable_reflection=True):
        self.llm_provider = llm_provider
        self.prompt_template = prompt_template
        self.enable_reflection = enable_reflection
        self.reflection_history = []
    
    def predict_action(self, episode_data):
        # Generate action prediction
        action = self._generate_action(episode_data)
        
        # Self-reflection if enabled
        if self.enable_reflection:
            reflection = self._reflect_on_action(action, episode_data)
            self.reflection_history.append(reflection)
        
        return action
    
    def _reflect_on_action(self, action, episode_data):
        reflection_prompt = f"""
        Analyze your predicted action: {action}
        Goal: {episode_data['goal']}
        Current state: {episode_data['current_state']}
        
        Reflect on:
        1. Is this action correct?
        2. What reasoning led to this decision?
        3. How could this be improved?
        """
        
        return {
            'action': action,
            'reflection': self.llm_provider.chat(reflection_prompt),
            'was_correct': None  # Will be set after ground truth comparison
        }`
        },
        {
          title: "Evaluation Metrics Analysis",
          language: "python",
          code: `class EvaluationAnalyzer:
    def __init__(self):
        self.episode_results = []
        self.step_accuracy = 0
        self.episode_success_rate = 0
    
    def add_episode_result(self, result):
        self.episode_results.append(result)
    
    def calculate_metrics(self):
        total_steps = sum(len(ep['steps']) for ep in self.episode_results)
        correct_steps = sum(
            sum(1 for step in ep['steps'] if step['correct'])
            for ep in self.episode_results
        )
        
        self.step_accuracy = (correct_steps / total_steps) * 100
        self.episode_success_rate = (
            sum(1 for ep in self.episode_results if ep['success']) / 
            len(self.episode_results)
        ) * 100
        
        return {
            'step_accuracy': self.step_accuracy,
            'episode_success_rate': self.episode_success_rate,
            'total_episodes': len(self.episode_results),
            'total_steps': total_steps
        }`
        },
        {
          title: "Few-Shot Prompting Template",
          language: "python",
          code: `ENHANCED_PROMPT_TEMPLATE = """
You are an Android World agent. Given the current state and goal, predict the next action.

Examples:
1. Goal: "Uninstall Slack app"
   State: Apps screen with Slack visible
   Action: CLICK("Slack")
   Reasoning: Need to click on Slack to select it for uninstallation

2. Goal: "Send message to John"
   State: Chat app open, John's contact visible
   Action: CLICK("John")
   Reasoning: Click on John's contact to open chat

3. Goal: "Take a photo"
   State: Camera app open
   Action: CLICK("Capture")
   Reasoning: Click capture button to take photo

4. Goal: "Set alarm for 7 AM"
   State: Clock app, alarm tab
   Action: CLICK("Add Alarm")
   Reasoning: Need to add new alarm first

Current Goal: {goal}
Current State: {current_state}
Available Actions: {available_actions}

Think step by step:
1. Analyze the goal
2. Understand current state
3. Determine required action
4. Select appropriate element

Action:"""
        }`
        }
      ]
    },
    {
      id: 3,
      title: "Loan Predictor",
      description: "Achieved 92% accuracy with XGBoost for loan prediction, integrated with FastAPI backend and Streamlit interface for real-time predictions.",
      technologies: ["XGBoost", "FastAPI", "Streamlit", "DagsHub", "Machine Learning"],
      category: "ML Application",
      github: "https://github.com/nithinyanna10/loan-predictor",
      live: "#",
      longDescription: "A machine learning application that predicts loan approval using XGBoost algorithm. Features a FastAPI backend for model serving and a Streamlit frontend for user interaction.",
      features: [
        "XGBoost model achieving 92% accuracy",
        "FastAPI backend for model serving",
        "Streamlit interface for user interaction",
        "Model versioning with DagsHub",
        "Real-time prediction capabilities"
      ]
    },
    {
      id: 4,
      title: "Taxi Demand Prediction",
      description: "Developed ML pipeline for taxi demand prediction using Hopworks Feature Store and MLflow, achieving MAE under 6 rides per hour with LightGBM.",
      technologies: ["LightGBM", "Hopworks", "MLflow", "GitHub Actions", "Streamlit", "Feature Engineering", "Time Series"],
      category: "ML Pipeline",
      github: "https://github.com/nithinyanna10/taxiproject",
      live: "#",
      longDescription: "An end-to-end machine learning pipeline for predicting taxi demand using advanced feature engineering, time series analysis, and modern MLops practices. The system integrates Hopworks Feature Store for feature management, MLflow for experiment tracking, and achieves production-ready performance with automated CI/CD.",
      features: [
        "LightGBM model achieving MAE under 6 rides per hour for demand prediction",
        "Hopworks Feature Store integration for feature management and versioning",
        "MLflow for comprehensive experiment tracking and model deployment",
        "GitHub Actions CI/CD pipeline for automated testing and deployment",
        "Streamlit dashboard for real-time predictions and model monitoring",
        "Advanced feature engineering including temporal and spatial features",
        "Time series analysis with seasonality and trend detection",
        "Production-ready model serving with API endpoints"
      ],
      architecture: {
        components: [
          { name: "Feature Store", icon: <FaDatabase />, description: "Hopworks for feature management and versioning" },
          { name: "ML Pipeline", icon: <FaCode />, description: "LightGBM with feature engineering and validation" },
          { name: "Experiment Tracking", icon: <FaChartLine />, description: "MLflow for model versioning and metrics" },
          { name: "Deployment", icon: <FaServer />, description: "Automated CI/CD with GitHub Actions" }
        ]
      },
      codeSnippets: [
        {
          title: "Feature Engineering Pipeline",
          language: "python",
          code: `def create_features(df):
    """Create comprehensive features for taxi demand prediction"""
    
    # Temporal features
    df['hour'] = df['pickup_datetime'].dt.hour
    df['day_of_week'] = df['pickup_datetime'].dt.dayofweek
    df['month'] = df['pickup_datetime'].dt.month
    df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)
    
    # Cyclical encoding for time features
    df['hour_sin'] = np.sin(2 * np.pi * df['hour'] / 24)
    df['hour_cos'] = np.cos(2 * np.pi * df['hour'] / 24)
    df['day_sin'] = np.sin(2 * np.pi * df['day_of_week'] / 7)
    df['day_cos'] = np.cos(2 * np.pi * df['day_of_week'] / 7)
    
    # Spatial features
    df['pickup_lat_round'] = df['pickup_latitude'].round(3)
    df['pickup_lon_round'] = df['pickup_longitude'].round(3)
    
    # Weather features (if available)
    if 'temperature' in df.columns:
        df['temp_bin'] = pd.cut(df['temperature'], bins=5, labels=False)
    
    return df`
        },
        {
          title: "MLflow Experiment Tracking",
          language: "python",
          code: `import mlflow
import mlflow.lightgbm

def train_model_with_mlflow(X_train, y_train, X_val, y_val):
    """Train LightGBM model with MLflow tracking"""
    
    mlflow.set_experiment("taxi_demand_prediction")
    
    with mlflow.start_run():
        # Model parameters
        params = {
            'objective': 'regression',
            'metric': 'mae',
            'boosting_type': 'gbdt',
            'num_leaves': 31,
            'learning_rate': 0.05,
            'feature_fraction': 0.9
        }
        
        # Log parameters
        mlflow.log_params(params)
        
        # Train model
        train_data = lgb.Dataset(X_train, label=y_train)
        val_data = lgb.Dataset(X_val, label=y_val, reference=train_data)
        
        model = lgb.train(
            params,
            train_data,
            valid_sets=[val_data],
            num_boost_round=1000,
            callbacks=[lgb.early_stopping(50)]
        )
        
        # Evaluate and log metrics
        y_pred = model.predict(X_val)
        mae = mean_absolute_error(y_val, y_pred)
        mlflow.log_metric("mae", mae)
        
        # Log model
        mlflow.lightgbm.log_model(model, "model")
        
        return model, mae`
        },
        {
          title: "GitHub Actions CI/CD Pipeline",
          language: "yaml",
          code: `name: ML Pipeline CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.8
    
    - name: Install dependencies
      run: |
        pip install -r requirements.txt
    
    - name: Run tests
      run: |
        python -m pytest tests/
    
    - name: Run linting
      run: |
        flake8 src/
        black --check src/
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Deploy to production
      run: |
        echo "Deploying model to production..."
        # Add deployment steps here`
        }
      ]
    },
    {
      id: 5,
      title: "NYC Taxi Dashboard Analytics",
      description: "End-to-end data analytics pipeline for NYC taxi data using AWS services with automated ETL, optimized querying, and interactive Power BI dashboard.",
      technologies: ["AWS Lambda", "AWS Glue", "Amazon Athena", "Power BI", "Data Analytics"],
      category: "Data Analytics",
      github: "https://github.com/nithinyanna10/etl_pipeline",
      live: "#",
      longDescription: "A comprehensive data analytics solution for NYC taxi data using AWS cloud services. Features automated ETL processes, optimized data querying, and interactive visualizations.",
      features: [
        "AWS Lambda for serverless data processing",
        "AWS Glue for ETL orchestration",
        "Amazon Athena for optimized querying",
        "Power BI dashboard for data visualization",
        "Automated data pipeline with monitoring"
      ]
    },
    {
      id: 6,
      title: "Smart DetectionOps - Video Analytics Platform",
      description: "A modular, end-to-end video analytics platform for real-time object detection, tracking, depth estimation, and congestion analysis in retail environments.",
      technologies: ["YOLOv8", "DeepSORT", "MiDaS", "FastAPI", "Streamlit", "Computer Vision", "Retail Analytics"],
      category: "Computer Vision",
      github: "https://github.com/nithinyanna10/detection_ops",
      live: "#",
      longDescription: "A comprehensive video analytics platform designed for retail environments that combines multiple computer vision technologies for real-time monitoring and analysis. The system provides object detection, tracking, depth estimation, and congestion analysis through a modular architecture.",
      features: [
        "YOLOv8-based real-time object detection for retail items and people",
        "DeepSORT multi-object tracking for customer movement analysis",
        "MiDaS monocular depth estimation for spatial understanding",
        "Zone/aisle congestion analysis for retail optimization",
        "FastAPI backend for scalable inference and metrics API",
        "Streamlit dashboard for real-time visualization and user interaction",
        "Downloadable processed video and frame extraction",
        "Modular pipeline architecture for easy customization"
      ],
      architecture: {
        components: [
          { name: "Detection Pipeline", icon: <FaBrain />, description: "YOLOv8 + DeepSORT for object detection and tracking" },
          { name: "Depth Analysis", icon: <FaCode />, description: "MiDaS for monocular depth estimation" },
          { name: "API Backend", icon: <FaServer />, description: "FastAPI for inference and metrics" },
          { name: "Dashboard", icon: <FaChartLine />, description: "Streamlit for visualization and interaction" }
        ]
      },
      codeSnippets: [
        {
          title: "FastAPI Inference Endpoint",
          language: "python",
          code: `@app.post("/infer/video")
async def process_video(file: UploadFile = File(...)):
    """Process uploaded video for object detection and tracking"""
    
    # Save uploaded file
    file_path = f"data/uploaded/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Initialize pipeline
    detector = YOLODetector("models/yolo/yolov8n.pt")
    tracker = DeepSORTTracker("models/deepsort/ckpt.t7")
    depth_estimator = MiDaSDepthEstimator("models/midas/dpt_swin2_tiny_256.pt")
    
    # Process video
    results = process_video_pipeline(
        video_path=file_path,
        detector=detector,
        tracker=tracker,
        depth_estimator=depth_estimator
    )
    
    return {
        "status": "success",
        "results": results,
        "output_path": results["output_path"]
    }`
        },
        {
          title: "Zone Congestion Analysis",
          language: "python",
          code: `def analyze_zone_congestion(tracks, zones_config):
    """Analyze congestion levels in different retail zones"""
    
    zone_counts = {zone["name"]: 0 for zone in zones_config}
    
    for track in tracks:
        position = track["position"]
        for zone in zones_config:
            if is_point_in_zone(position, zone["coordinates"]):
                zone_counts[zone["name"]] += 1
                break
    
    congestion_levels = {}
    for zone_name, count in zone_counts.items():
        if count > 10:
            congestion_levels[zone_name] = "High"
        elif count > 5:
            congestion_levels[zone_name] = "Medium"
        else:
            congestion_levels[zone_name] = "Low"
    
    return congestion_levels`
        },
        {
          title: "Streamlit Dashboard Integration",
          language: "python",
          code: `import streamlit as st
import requests

st.title("Smart DetectionOps Dashboard")

# File upload
uploaded_file = st.file_uploader("Upload video", type=['mp4', 'avi', 'mov'])

if uploaded_file and st.button("Start Detection"):
    # Upload to FastAPI backend
    files = {"file": uploaded_file}
    response = requests.post("http://localhost:8000/infer/video", files=files)
    
    if response.status_code == 200:
        results = response.json()
        
        # Display results
        col1, col2 = st.columns(2)
        with col1:
            st.subheader("Detection Results")
            st.write(f"Objects detected: {results['total_objects']}")
            st.write(f"Tracks identified: {results['total_tracks']}")
        
        with col2:
            st.subheader("Zone Congestion")
            for zone, level in results['congestion'].items():
                st.write(f"{zone}: {level}")
        
        # Download processed video
        st.download_button(
            "Download Processed Video",
            data=open(results['output_path'], 'rb'),
            file_name="processed_video.mp4"
        )`
        }
      ]
    },
    {
      id: 7,
      title: "Debt Call Analysis Dashboard",
      description: "A Streamlit dashboard for analyzing and predicting outcomes of debt collection calls using machine learning and NLP with sentiment analysis.",
      technologies: ["NLP", "Sentiment Analysis", "Machine Learning", "Streamlit", "Feature Engineering", "Predictive Analytics"],
      category: "NLP Application",
      github: "https://github.com/nithinyanna10/debt_call_analysis_dashboard",
      live: "https://nithinyanna10-debt-call-analysis-dashboard-dashboardapp-jdhiaw.streamlit.app/",
      longDescription: "An intelligent dashboard that analyzes debt collection call transcripts using NLP and machine learning to predict payment outcomes. The system combines sentiment analysis, feature engineering, and predictive modeling to provide insights for debt collection optimization.",
      features: [
        "Data ingestion and preprocessing of raw call transcripts",
        "Sentiment analysis to extract emotional context from calls",
        "Advanced feature engineering for ML model training",
        "Machine learning predictions for payment outcomes",
        "Interactive Streamlit dashboard for data visualization",
        "Dummy data generation for testing and development",
        "Real-time prediction capabilities for new call data",
        "Comprehensive analytics and reporting features"
      ],
      architecture: {
        components: [
          { name: "Data Pipeline", icon: <FaDatabase />, description: "Ingestion and preprocessing of call transcripts" },
          { name: "NLP Engine", icon: <FaBrain />, description: "Sentiment analysis and feature extraction" },
          { name: "ML Models", icon: <FaCode />, description: "Trained models for outcome prediction" },
          { name: "Dashboard", icon: <FaChartLine />, description: "Streamlit interface for visualization" }
        ]
      },
      codeSnippets: [
        {
          title: "Sentiment Analysis Pipeline",
          language: "python",
          code: `def analyze_sentiment(transcript):
    """Analyze sentiment of debt collection call transcripts"""
    
    # Initialize sentiment analyzer
    analyzer = SentimentIntensityAnalyzer()
    
    # Analyze sentiment
    sentiment_scores = analyzer.polarity_scores(transcript)
    
    # Extract features
    features = {
        'positive_score': sentiment_scores['pos'],
        'negative_score': sentiment_scores['neg'],
        'neutral_score': sentiment_scores['neu'],
        'compound_score': sentiment_scores['compound'],
        'call_length': len(transcript.split()),
        'has_payment_mention': 'payment' in transcript.lower(),
        'has_agreement_mention': 'agree' in transcript.lower()
    }
    
    return features`
        },
        {
          title: "Feature Engineering",
          language: "python",
          code: `def extract_call_features(transcript, sentiment_features):
    """Extract comprehensive features from call transcripts"""
    
    # Text-based features
    features = {
        'word_count': len(transcript.split()),
        'sentence_count': len(transcript.split('.')),
        'avg_word_length': np.mean([len(word) for word in transcript.split()]),
        'unique_words': len(set(transcript.lower().split())),
        'vocabulary_richness': len(set(transcript.lower().split())) / len(transcript.split())
    }
    
    # Keyword-based features
    keywords = {
        'payment_terms': ['payment', 'installment', 'monthly', 'weekly'],
        'agreement_terms': ['agree', 'accept', 'okay', 'yes'],
        'conflict_terms': ['dispute', 'wrong', 'error', 'problem'],
        'urgency_terms': ['immediate', 'urgent', 'asap', 'now']
    }
    
    for category, terms in keywords.items():
        features[f'{category}_count'] = sum(
            1 for term in terms if term in transcript.lower()
        )
    
    # Combine with sentiment features
    features.update(sentiment_features)
    
    return features`
        },
        {
          title: "Streamlit Dashboard",
          language: "python",
          code: `import streamlit as st
import pandas as pd
from src.model import predict_outcome

st.title("Debt Call Analysis Dashboard")

# Sidebar for file upload
with st.sidebar:
    st.header("Data Upload")
    uploaded_file = st.file_uploader("Upload call transcripts", type=['csv'])
    
    if uploaded_file:
        df = pd.read_csv(uploaded_file)
        st.success(f"Loaded {len(df)} call records")

# Main dashboard
if 'df' in locals():
    # Overview metrics
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("Total Calls", len(df))
    with col2:
        st.metric("Average Sentiment", f"{df['sentiment_score'].mean():.2f}")
    with col3:
        st.metric("Prediction Accuracy", "85.2%")
    
    # Sentiment distribution
    st.subheader("Sentiment Distribution")
    fig = px.histogram(df, x='sentiment_score', nbins=20)
    st.plotly_chart(fig)
    
    # Prediction results
    st.subheader("Payment Outcome Predictions")
    predictions = predict_outcome(df)
    st.dataframe(predictions[['call_id', 'predicted_outcome', 'confidence']])`
        }
      ]
    },
    {
      id: 8,
      title: "Impostor Hunt - Fake Text Detection",
      description: "Advanced fake text detection challenge solution using multiple models including CatBoost and BERT for improved accuracy in text classification.",
      technologies: ["BERT", "CatBoost", "NLP", "Text Classification", "Machine Learning", "Ensemble Methods"],
      category: "NLP Research",
      github: "https://github.com/nithinyanna10/impostor_hunt_project",
      live: "#",
      longDescription: "A sophisticated fake text detection system that combines multiple machine learning approaches including transformer-based models (BERT) and gradient boosting (CatBoost) to achieve high accuracy in distinguishing between authentic and fake text content.",
      features: [
        "BERT-based text encoding for advanced semantic understanding",
        "CatBoost gradient boosting for robust classification",
        "Ensemble methods combining multiple model predictions",
        "Advanced feature engineering for text analysis",
        "High-accuracy fake text detection capabilities",
        "Comprehensive model evaluation and comparison",
        "Scalable architecture for large-scale text processing",
        "Research-grade implementation for text classification challenges"
      ],
      architecture: {
        components: [
          { name: "BERT Encoder", icon: <FaBrain />, description: "Transformer-based text encoding" },
          { name: "CatBoost Classifier", icon: <FaCode />, description: "Gradient boosting for classification" },
          { name: "Ensemble System", icon: <FaChartLine />, description: "Multiple model combination" },
          { name: "Feature Engine", icon: <FaDatabase />, description: "Advanced text feature extraction" }
        ]
      },
      codeSnippets: [
        {
          title: "BERT Text Encoding",
          language: "python",
          code: `from transformers import BertTokenizer, BertModel
import torch

class BERTTextEncoder:
    def __init__(self, model_name='bert-base-uncased'):
        self.tokenizer = BertTokenizer.from_pretrained(model_name)
        self.model = BertModel.from_pretrained(model_name)
        self.model.eval()
    
    def encode_text(self, text):
        """Encode text using BERT embeddings"""
        
        # Tokenize and prepare input
        inputs = self.tokenizer(
            text,
            return_tensors='pt',
            truncation=True,
            max_length=512,
            padding=True
        )
        
        # Get BERT embeddings
        with torch.no_grad():
            outputs = self.model(**inputs)
            # Use [CLS] token embedding as text representation
            embeddings = outputs.last_hidden_state[:, 0, :]
        
        return embeddings.squeeze().numpy()`
        },
        {
          title: "CatBoost Classifier",
          language: "python",
          code: `from catboost import CatBoostClassifier
import numpy as np

class FakeTextDetector:
    def __init__(self):
        self.bert_encoder = BERTTextEncoder()
        self.catboost_model = CatBoostClassifier(
            iterations=1000,
            learning_rate=0.1,
            depth=6,
            loss_function='Logloss',
            verbose=100
        )
    
    def extract_features(self, text):
        """Extract comprehensive features from text"""
        
        # BERT embeddings
        bert_features = self.bert_encoder.encode_text(text)
        
        # Statistical features
        stat_features = {
            'word_count': len(text.split()),
            'char_count': len(text),
            'avg_word_length': np.mean([len(word) for word in text.split()]),
            'unique_words': len(set(text.lower().split())),
            'punctuation_count': sum(1 for char in text if char in '.,!?;:'),
            'uppercase_ratio': sum(1 for char in text if char.isupper()) / len(text)
        }
        
        # Combine features
        features = np.concatenate([
            bert_features,
            list(stat_features.values())
        ])
        
        return features`
        },
        {
          title: "Ensemble Prediction",
          language: "python",
          code: `def ensemble_predict(models, text_features):
    """Combine predictions from multiple models"""
    
    predictions = []
    weights = [0.4, 0.3, 0.3]  # Weights for different models
    
    for model, weight in zip(models, weights):
        pred = model.predict_proba(text_features)[0]
        predictions.append(pred * weight)
    
    # Weighted average
    final_prediction = np.sum(predictions, axis=0)
    
    return {
        'fake_probability': final_prediction[1],
        'authentic_probability': final_prediction[0],
        'prediction': 'fake' if final_prediction[1] > 0.5 else 'authentic',
        'confidence': max(final_prediction)
    }`
        }
      ]
    },
    {
      id: 9,
      title: "3D Video Diffusion - AI Image/Video Generation",
      description: "Advanced diffusion model implementation for generating images and videos using 3D-aware techniques. Features FSDP training, custom kernels, and comprehensive model architecture.",
      technologies: ["Diffusion Models", "3D Vision", "PyTorch", "FSDP", "Custom Kernels", "AI Generation", "Computer Vision"],
      category: "AI Generation",
      github: "https://github.com/nithinyanna10/3d-video-diffusion",
      live: "#",
      longDescription: "A cutting-edge implementation of 3D-aware diffusion models for image and video generation. This project explores the intersection of diffusion models and 3D computer vision, implementing advanced training techniques including FSDP (Fully Sharded Data Parallel) for efficient distributed training and custom CUDA kernels for optimized performance.",
      features: [
        "3D-aware diffusion model architecture for spatial understanding",
        "FSDP (Fully Sharded Data Parallel) training for distributed computing",
        "Custom CUDA kernels for optimized performance and memory efficiency",
        "Comprehensive model architecture with checkpoints and training logs",
        "Image-to-video generation capabilities using diffusion techniques",
        "Advanced training pipeline with configurable parameters",
        "Visualization tools for generated content analysis",
        "Research-grade implementation for AI generation tasks"
      ],
      architecture: {
        components: [
          { name: "Diffusion Model", icon: <FaBrain />, description: "3D-aware diffusion architecture for generation" },
          { name: "FSDP Training", icon: <FaCode />, description: "Fully Sharded Data Parallel for distributed training" },
          { name: "Custom Kernels", icon: <FaServer />, description: "Optimized CUDA kernels for performance" },
          { name: "Training Pipeline", icon: <FaChartLine />, description: "Comprehensive training and evaluation system" }
        ]
      },
      codeSnippets: [
        {
          title: "3D Diffusion Model Architecture",
          language: "python",
          code: `class VideoDiffusionModel(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.config = config
        
        # 3D-aware components
        self.spatial_encoder = SpatialEncoder3D(
            input_channels=config.input_channels,
            hidden_dim=config.hidden_dim,
            num_layers=config.num_layers
        )
        
        # Temporal components for video generation
        self.temporal_encoder = TemporalEncoder(
            frame_dim=config.frame_dim,
            sequence_length=config.sequence_length
        )
        
        # Diffusion UNet with 3D convolutions
        self.diffusion_unet = DiffusionUNet3D(
            input_channels=config.input_channels,
            output_channels=config.output_channels,
            hidden_dim=config.hidden_dim,
            num_res_blocks=config.num_res_blocks
        )
        
        # Noise scheduler
        self.noise_scheduler = DDIMScheduler(
            num_train_timesteps=config.num_train_timesteps,
            beta_start=config.beta_start,
            beta_end=config.beta_end
        )
    
    def forward(self, x, timesteps, condition=None):
        # Encode spatial and temporal information
        spatial_features = self.spatial_encoder(x)
        temporal_features = self.temporal_encoder(x)
        
        # Combine features
        combined_features = torch.cat([spatial_features, temporal_features], dim=1)
        
        # Apply diffusion process
        noise_pred = self.diffusion_unet(combined_features, timesteps, condition)
        
        return noise_pred`
        },
        {
          title: "FSDP Training Configuration",
          language: "python",
          code: `from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp.wrap import transformer_auto_wrap_policy

def setup_fsdp_model(model, rank, world_size):
    """Setup FSDP for distributed training"""
    
    # Auto-wrap policy for transformer layers
    auto_wrap_policy = transformer_auto_wrap_policy(
        model,
        transformer_layer_cls={nn.TransformerEncoderLayer}
    )
    
    # FSDP configuration
    fsdp_config = {
        "fsdp_auto_wrap_policy": auto_wrap_policy,
        "fsdp_backward_prefetch": "BACKWARD_PRE",
        "fsdp_state_dict_type": "FULL_STATE_DICT",
        "fsdp_offload_params": True,  # CPU offloading for memory efficiency
        "fsdp_activation_checkpointing": True
    }
    
    # Wrap model with FSDP
    model = FSDP(
        model,
        auto_wrap_policy=auto_wrap_policy,
        mixed_precision=mixed_precision_policy,
        device_id=rank
    )
    
    return model, fsdp_config`
        },
        {
          title: "Custom CUDA Kernel Implementation",
          language: "cuda",
          code: `// Custom CUDA kernel for 3D convolution optimization
__global__ void conv3d_forward_kernel(
    const float* input,
    const float* weight,
    float* output,
    const int batch_size,
    const int in_channels,
    const int out_channels,
    const int depth,
    const int height,
    const int width,
    const int kernel_size
) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    
    if (idx >= batch_size * out_channels * depth * height * width) {
        return;
    }
    
    // Calculate 3D indices
    int b = idx / (out_channels * depth * height * width);
    int oc = (idx / (depth * height * width)) % out_channels;
    int d = (idx / (height * width)) % depth;
    int h = (idx / width) % height;
    int w = idx % width;
    
    float sum = 0.0f;
    
    // 3D convolution computation
    for (int ic = 0; ic < in_channels; ic++) {
        for (int kd = 0; kd < kernel_size; kd++) {
            for (int kh = 0; kh < kernel_size; kh++) {
                for (int kw = 0; kw < kernel_size; kw++) {
                    int input_d = d + kd - kernel_size / 2;
                    int input_h = h + kh - kernel_size / 2;
                    int input_w = w + kw - kernel_size / 2;
                    
                    if (input_d >= 0 && input_d < depth &&
                        input_h >= 0 && input_h < height &&
                        input_w >= 0 && input_w < width) {
                        
                        int input_idx = b * in_channels * depth * height * width +
                                      ic * depth * height * width +
                                      input_d * height * width +
                                      input_h * width + input_w;
                        
                        int weight_idx = oc * in_channels * kernel_size * kernel_size * kernel_size +
                                       ic * kernel_size * kernel_size * kernel_size +
                                       kd * kernel_size * kernel_size +
                                       kh * kernel_size + kw;
                        
                        sum += input[input_idx] * weight[weight_idx];
                    }
                }
            }
        }
    }
    
    output[idx] = sum;
}`
        },
        {
          title: "Training Pipeline",
          language: "python",
          code: `def train_diffusion_model(model, dataloader, optimizer, scheduler, config):
    """Training loop for 3D video diffusion model"""
    
    model.train()
    total_loss = 0
    
    for batch_idx, (videos, conditions) in enumerate(dataloader):
        videos = videos.to(device)
        conditions = conditions.to(device) if conditions is not None else None
        
        # Sample random timesteps
        timesteps = torch.randint(
            0, config.num_train_timesteps, 
            (videos.shape[0],), device=device
        ).long()
        
        # Add noise to videos
        noise = torch.randn_like(videos)
        noisy_videos = model.noise_scheduler.add_noise(videos, noise, timesteps)
        
        # Predict noise
        noise_pred = model(noisy_videos, timesteps, conditions)
        
        # Calculate loss
        loss = F.mse_loss(noise_pred, noise)
        
        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        scheduler.step()
        
        total_loss += loss.item()
        
        if batch_idx % config.log_interval == 0:
            print(f"Batch {batch_idx}, Loss: {loss.item():.4f}")
    
    return total_loss / len(dataloader)`
        }
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-cyan-400 hover:text-white transition-colors duration-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/projects" className="inline-flex items-center text-cyan-400 hover:text-white transition-colors duration-300 mb-8">
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="glass-card mb-8">
            <div className="mb-4">
              <span className="text-cyan-400 text-sm font-semibold">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="btn-primary"
              >
                <FaGithub className="mr-2" />
                View Code
              </motion.a>
              {project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>

          {/* Project Details */}
          {project.longDescription && (
            <div className="glass-card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">About This Project</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div className="glass-card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture (for Web Monitor RAG) */}
          {project.architecture && (
            <div className="glass-card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">System Architecture</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.architecture.components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
                  >
                    <div className="text-3xl text-cyan-400 mb-2">{component.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{component.name}</h3>
                    <p className="text-sm text-gray-400">{component.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippets */}
          {project.codeSnippets && (
            <div className="glass-card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Code Highlights</h2>
              <div className="space-y-6">
                {project.codeSnippets.map((snippet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-700 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                      <h3 className="text-white font-semibold">{snippet.title}</h3>
                    </div>
                    <pre className="bg-gray-900 p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{snippet.code}</code>
                    </pre>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Project Structure (for Web Monitor RAG) */}
          {project.id === 1 && (
            <div className="glass-card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Structure</h2>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <div className="text-cyan-400">web_monitor_rag/</div>
                <div className="ml-4 text-gray-300">
                  <div>├── dashboard/           # Streamlit dashboard app</div>
                  <div>├── data/                # Scraped data, logs, deltas</div>
                  <div>├── mock_sites/          # Flask mock sites (site1.py ... site5.py)</div>
                  <div>├── rag_engine/          # RAG engine: embedder, query handler, LLM integration</div>
                  <div>├── scraper/             # Scraper, normalizer, delta detector</div>
                  <div>├── storage/             # PostgreSQL and ChromaDB connectors</div>
                  <div>├── run_full_pipeline.sh # Master automation script</div>
                  <div>└── requirements.txt     # All dependencies</div>
                </div>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 