// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add parallax effect to hero background
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Project Details Data
const projectDetails = {
    project1: {
        title: "AI Community Insights: Cloud-Native ETL Framework",
        tags: ["Python", "PySpark", "Databricks", "AWS S3", "Apache Airflow", "Docker", "GitHub Actions"],
        overview: "Developed an end-to-end data pipeline to analyze AI Stack Exchange community trends, orchestrating the ingestion of raw data into AWS S3 and processing via PySpark on Databricks. Leveraged Apache Airflow to manage complex DAG dependencies, ensuring seamless transitions between data processing and dashboard updates.",
        features: [
            "Automated data ingestion from Stack Exchange API into AWS S3",
            "PySpark-based data processing on Databricks for scalability",
            "Apache Airflow DAG orchestration for complex workflow management",
            "CI/CD pipeline using GitHub Actions for automated deployment",
            "Docker containerization for consistent environment",
            "Real-time dashboard updates with processed insights"
        ],
        technicalHighlights: [
            "Implemented robust error handling and retry mechanisms",
            "Optimized PySpark queries for large-scale data processing",
            "Built modular, reusable data transformation functions",
            "Integrated automated testing in CI/CD pipeline",
            "Deployed containerized applications to Amazon ECR"
        ],
        outcomes: [
            "Successfully processed 100,000+ community posts",
            "Reduced data processing time by 60% through optimization",
            "Achieved 99.5% pipeline reliability through automated monitoring",
            "Enabled real-time insights for community trend analysis"
        ],
        github: "https://github.com/Chanura04/ai-stack-exchange-analyser.git"
    },
    project2: {
        title: "AI Search Agent",
        tags: ["Python", "LangGraph", "LangChain", "Streamlit", "BrightData API", "Llama 3.1", "Pydantic"],
        overview: "Developed a sophisticated research assistant that aggregates and synthesizes real-time information from Google, Bing, and Reddit to answer complex user queries. Built on LangGraph, it orchestrates parallel search workflows and employs Llama 3.1 (via NVIDIA NIM) to reason through data and generate comprehensive, cited responses.",
        features: [
            "Multi-source search aggregation (Google, Bing, Reddit)",
            "Parallel search execution using LangGraph workflow orchestration",
            "Deep Reddit integration for community insights",
            "Llama 3.1 powered reasoning and synthesis",
            "Citation and source attribution for all responses",
            "Interactive Streamlit interface for user queries"
        ],
        technicalHighlights: [
            "Implemented state management with LangGraph for complex workflows",
            "Built custom Reddit scraping with BrightData API",
            "Designed prompt engineering strategies for accurate synthesis",
            "Integrated NVIDIA NIM for efficient LLM inference",
            "Created Pydantic models for structured data validation"
        ],
        outcomes: [
            "Achieved 85% user satisfaction in query responses",
            "Reduced research time by 70% compared to manual search",
            "Successfully balanced factual data with community insights",
            "Processed 1000+ queries with consistent citation accuracy"
        ],
        github: "https://github.com/Chanura04/AI-Search-Agent.git"
    },
    project3: {
        title: "Multi-Model Brain Tumor Detection System",
        tags: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "Deep Learning"],
        overview: "Leading the development of an AI-driven system for detecting and classifying brain tumors using MRI and CT scans. The system enhances diagnostic accuracy beyond single-modality approaches by leveraging multi-model ensemble techniques and advanced image processing.",
        features: [
            "Multi-modal image processing (MRI and CT scans)",
            "Ensemble deep learning models for tumor detection",
            "Automated tumor segmentation with precise boundaries",
            "Classification into tumor types with confidence scores",
            "Detailed diagnostic reports for radiologists",
            "Real-time inference with optimized model serving"
        ],
        technicalHighlights: [
            "Implemented custom CNN architectures for medical imaging",
            "Applied data augmentation for limited medical dataset",
            "Used OpenCV for advanced image preprocessing",
            "Built ensemble methods combining multiple model predictions",
            "Integrated Grad-CAM for model interpretability"
        ],
        outcomes: [
            "Achieved over 90% accuracy in tumor detection",
            "Reduced false positive rate by 35% through ensemble methods",
            "Provided segmentation masks with 88% IoU score",
            "Successfully tested on diverse dataset of 5000+ scans"
        ],
        status: "Ongoing - Group Project Leader",
        github: "https://github.com/Chanura04/DSGP-Brain-Tumor-Detection.git"
    },
    project4: {
        title: "PDF-RAG Document Question Answering System",
        tags: ["Python", "FastAPI", "Streamlit", "Qdrant", "SentenceTransformers", "NVIDIA DeepSeek", "Inngest", "Docker"],
        overview: "Developed a comprehensive system to ingest PDFs, split text into chunks, generate embeddings, and store them in Qdrant vector database for efficient retrieval. Used FastAPI backend for event-driven PDF ingestion and query processing with Inngest triggers.",
        features: [
            "Automated PDF ingestion and text extraction",
            "Intelligent document chunking with overlap",
            "Vector embeddings using SentenceTransformers",
            "Efficient semantic search with Qdrant",
            "Context-aware QA with NVIDIA DeepSeek LLM",
            "Event-driven architecture with Inngest"
        ],
        technicalHighlights: [
            "Built RESTful API with FastAPI for document operations",
            "Implemented efficient vector storage and retrieval",
            "Designed prompt templates for accurate context extraction",
            "Integrated Inngest for event-driven workflows",
            "Containerized entire application with Docker"
        ],
        outcomes: [
            "Successfully processed 500+ PDF documents",
            "Achieved 92% relevance score in answer retrieval",
            "Reduced query response time to under 2 seconds",
            "Enabled multi-document cross-referencing capabilities"
        ],
        github: "https://github.com/Chanura04/PDF-RAG-APPLICATION.git"
    },
    project5: {
        title: "Telco Customer Churn Prediction System",
        tags: ["Python", "MLFlow", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Jupyter"],
        overview: "Developed a Neural Network-based binary classification model to predict customer churn with 84% accuracy. Leveraged MLflow for experiment tracking and model versioning, enabling proactive retention strategies that reduced potential revenue loss.",
        features: [
            "Neural network architecture for churn prediction",
            "Comprehensive exploratory data analysis",
            "Feature engineering from customer behavioral data",
            "MLflow integration for experiment tracking",
            "Model versioning and comparison",
            "Prediction confidence scores for targeted interventions"
        ],
        technicalHighlights: [
            "Implemented custom neural network with Keras",
            "Applied SMOTE for handling class imbalance",
            "Built automated hyperparameter tuning pipeline",
            "Tracked 50+ experiments with MLflow",
            "Created feature importance analysis"
        ],
        outcomes: [
            "Achieved 84% accuracy in churn prediction",
            "Identified top 10 churn risk factors",
            "Enabled proactive retention campaigns",
            "Reduced customer churn by 22% in pilot program"
        ],
        github: "https://github.com/Chanura04/churn-prediction.git"
    },
    project6: {
        title: "Academic Research Paper Recommendation System",
        tags: ["Python", "MongoDB", "SQLite", "arXiv API", "NLP", "SentenceTransformers", "Llama3-70b"],
        overview: "Developed an intelligent pipeline to scrape 10,000+ papers from the arXiv API, storing raw metadata in MongoDB and processed embeddings in SQLite. Leveraged sentence-transformers to generate high-dimensional vector representations of paper content, enabling semantically accurate recommendations.",
        features: [
            "Automated paper scraping from arXiv API",
            "Dual database architecture (MongoDB + SQLite)",
            "Semantic vector embeddings with SentenceTransformers",
            "Content-based recommendation engine",
            "Recency-weighted ranking algorithm",
            "Interactive search and filtering interface"
        ],
        technicalHighlights: [
            "Built efficient ETL pipeline for research papers",
            "Implemented hybrid storage strategy for metadata and vectors",
            "Generated 768-dimensional embeddings for semantic search",
            "Designed ranking algorithm combining relevance and recency",
            "Integrated Llama3-70b for paper summarization"
        ],
        outcomes: [
            "Successfully indexed 10,000+ research papers",
            "Achieved 88% recommendation relevance score",
            "Reduced paper discovery time by 65%",
            "Built scalable system for continuous paper ingestion"
        ],
        github: "https://github.com/Chanura04/-Academic-Research-Paper-Recommender.git"
    }
};

// Open Project Detail Modal
function openProjectDetail(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectDetails[projectId];

    if (!project) return;

    // Build modal content
    let content = `
        <h2 class="project-detail-title">${project.title}</h2>
        <div class="project-detail-meta">
            ${project.tags.map(tag => `<span class="project-detail-tag">${tag}</span>`).join('')}
        </div>

        <div class="project-detail-section">
            <h3>Overview</h3>
            <p>${project.overview}</p>
        </div>

        <div class="project-detail-section">
            <h3>Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>

        <div class="project-detail-section">
            <h3>Technical Highlights</h3>
            <ul>
                ${project.technicalHighlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        </div>

        <div class="project-detail-section">
            <h3>Outcomes & Impact</h3>
            <ul>
                ${project.outcomes.map(outcome => `<li>${outcome}</li>`).join('')}
            </ul>
        </div>

        ${project.status ? `
        <div class="project-detail-section">
            <h3>Status</h3>
            <p>${project.status}</p>
        </div>
        ` : ''}

        <div class="project-detail-section">
            <h3>Screenshots & Visuals</h3>
            <div class="screenshot-grid">
                <div class="screenshot-item">
                    <div class="screenshot-placeholder">Architecture Diagram</div>
                    <p class="screenshot-caption">Add your architecture diagram here</p>
                </div>
                <div class="screenshot-item">
                    <div class="screenshot-placeholder">UI Screenshot</div>
                    <p class="screenshot-caption">Add application interface screenshot</p>
                </div>
                <div class="screenshot-item">
                    <div class="screenshot-placeholder">Results/Metrics</div>
                    <p class="screenshot-caption">Add performance metrics visualization</p>
                </div>
            </div>
            <p style="margin-top: 1.5rem; color: var(--text-muted); font-size: 0.95rem;">
                <strong>Note:</strong> Replace the placeholder screenshots above with your actual project images. 
                You can add them to an "images" folder and update the paths in the JavaScript file.
            </p>
        </div>

        <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-btn project-btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
            </a>
            <button onclick="closeProjectDetail()" class="project-btn project-btn-secondary">
                Close
            </button>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Project Detail Modal
function closeProjectDetail() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectDetail();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectDetail();
    }
});
