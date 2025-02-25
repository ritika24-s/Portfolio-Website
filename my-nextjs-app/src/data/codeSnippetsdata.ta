/*
 * File: src/data/codeSnippetsData.ts
 * Purpose: Sample code snippets showing NLP expertise
 */

export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  category: 'nlp' | 'machine_learning' | 'web_development' | 'data_processing';
  tags: string[];
}

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'nlp-preprocessing',
    title: 'NLP Text Preprocessing Pipeline',
    description: 'A robust preprocessing pipeline for cleaning and normalizing text data before NLP analysis.',
    language: 'python',
    code: `import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from typing import List, Dict, Any

class TextPreprocessor:
    """
    Text preprocessing pipeline for NLP tasks.
    Handles cleaning, normalization, stopword removal, and lemmatization.
    """
    
    def __init__(self, 
                 remove_stopwords: bool = True, 
                 lemmatize: bool = True,
                 custom_stopwords: List[str] = None):
        """
        Initialize the preprocessor with configurable options.
        
        Args:
            remove_stopwords: Whether to remove common stopwords
            lemmatize: Whether to perform lemmatization
            custom_stopwords: Additional domain-specific stopwords
        """
        self.remove_stopwords = remove_stopwords
        self.lemmatize = lemmatize
        
        # Initialize NLTK resources
        nltk.download('stopwords', quiet=True)
        nltk.download('wordnet', quiet=True)
        
        # Setup stopwords
        self.stop_words = set(stopwords.words('english'))
        if custom_stopwords:
            self.stop_words.update(custom_stopwords)
            
        # Setup lemmatizer
        self.lemmatizer = WordNetLemmatizer() if lemmatize else None
    
    def clean_text(self, text: str) -> str:
        """
        Basic text cleaning operations.
        
        Args:
            text: Input text string
            
        Returns:
            Cleaned text
        """
        if not text:
            return ""
        
        # Convert to lowercase
        text = text.lower()
        
        # Remove URLs
        text = re.sub(r'https?://\\S+|www\\.\\S+', '', text)
        
        # Remove emails
        text = re.sub(r'\\S+@\\S+', '', text)
        
        # Remove HTML tags
        text = re.sub(r'<.*?>', '', text)
        
        # Remove special characters and digits
        text = re.sub(r'[^a-zA-Z\\s]', '', text)
        
        # Remove extra whitespace
        text = re.sub(r'\\s+', ' ', text).strip()
        
        return text
    
    def tokenize(self, text: str) -> List[str]:
        """
        Tokenize text and apply additional processing.
        
        Args:
            text: Cleaned text string
            
        Returns:
            List of processed tokens
        """
        if not text:
            return []
        
        # Tokenize
        tokens = text.split()
        
        # Remove stopwords if enabled
        if self.remove_stopwords:
            tokens = [t for t in tokens if t not in self.stop_words]
        
        # Lemmatize if enabled
        if self.lemmatize:
            tokens = [self.lemmatizer.lemmatize(t) for t in tokens]
        
        return tokens
    
    def preprocess(self, text: str) -> Dict[str, Any]:
        """
        Run the full preprocessing pipeline.
        
        Args:
            text: Raw input text
            
        Returns:
            Dictionary with original text, cleaned text, and tokens
        """
        cleaned_text = self.clean_text(text)
        tokens = self.tokenize(cleaned_text)
        
        return {
            'original': text,
            'cleaned': cleaned_text,
            'tokens': tokens,
            'token_count': len(tokens)
        }


# Example usage
if __name__ == "__main__":
    preprocessor = TextPreprocessor(
        custom_stopwords=["customstop1", "customstop2"]
    )
    
    sample_text = "Hello! This is an example text with some @special characters and http://example.com URLs."
    result = preprocessor.preprocess(sample_text)
    
    print(f"Original: {result['original']}")
    print(f"Cleaned: {result['cleaned']}")
    print(f"Tokens: {result['tokens']}")
    print(f"Token count: {result['token_count']}")`,
    category: 'nlp',
    tags: ['Text Processing', 'NLTK', 'Python', 'Data Cleaning']
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis with spaCy',
    description: 'Custom sentiment analysis component for spaCy pipeline to analyze customer support conversations.',
    language: 'python',
    code: `import spacy
from spacy.language import Language
from spacy.tokens import Doc, Span
from typing import List, Dict, Tuple, Optional
import numpy as np

# Custom sentiment analysis component for spaCy
@Language.factory("sentiment_analyzer")
class SentimentAnalyzer:
    """
    Custom spaCy pipeline component for sentiment analysis
    specifically designed for customer support conversations.
    """
    
    def __init__(self, nlp, name):
        self.name = name
        
        # Load lexicon - in production this would come from a file or database
        self.lexicon = {
            "positive": ["thank", "good", "great", "excellent", "help", "resolve", 
                        "appreciate", "satisfied", "happy", "perfect", "wonderful"],
                        
            "negative": ["issue", "problem", "error", "wrong", "bad", "disappointed", 
                        "broken", "difficult", "confusing", "fail", "poor"],
                        
            "neutral": ["ok", "okay", "fine", "average", "normal", "standard", 
                       "typical", "regular", "usual", "common"]
        }
        
        # Set extension attributes for Doc and Span objects
        if not Doc.has_extension("sentiment"):
            Doc.set_extension("sentiment", default=None)
        
        if not Doc.has_extension("sentiment_score"):
            Doc.set_extension("sentiment_score", default=0.0)
            
        if not Span.has_extension("sentiment"):
            Span.set_extension("sentiment", default=None)
            
        if not Span.has_extension("sentiment_score"):
            Span.set_extension("sentiment_score", default=0.0)
    
    def _get_token_sentiment(self, token) -> Tuple[str, float]:
        """
        Get sentiment for a token based on lexicon lookup.
        
        Args:
            token: spaCy token
            
        Returns:
            Tuple of sentiment label and score
        """
        lemma = token.lemma_.lower()
        
        # Check lexicon
        if lemma in self.lexicon["positive"]:
            return ("positive", 1.0)
        elif lemma in self.lexicon["negative"]:
            return ("negative", -1.0)
        elif lemma in self.lexicon["neutral"]:
            return ("neutral", 0.0)
        
        return ("neutral", 0.0)
    
    def _handle_negation(self, doc) -> List[float]:
        """
        Handle negation to adjust sentiment scores.
        
        Args:
            doc: spaCy Doc object
            
        Returns:
            List of adjusted scores
        """
        adjusted_scores = []
        negation_window = 0
        
        for token in doc:
            # Get base sentiment
            sentiment, score = self._get_token_sentiment(token)
            
            # Check for negation words
            if token.dep_ == "neg" or token.lower_ in ["not", "never", "no", "n't"]:
                negation_window = 3  # Affect next 3 tokens
            
            # Apply negation
            if negation_window > 0 and score != 0:
                score = -score  # Reverse the sentiment
                negation_window -= 1
            elif negation_window > 0:
                negation_window -= 1
            
            adjusted_scores.append(score)
        
        return adjusted_scores
    
    def _analyze_sentence_sentiment(self, sent) -> Tuple[str, float]:
        """
        Analyze sentiment for a sentence.
        
        Args:
            sent: spaCy Span representing a sentence
            
        Returns:
            Tuple of sentiment label and score
        """
        # Get adjusted token scores
        token_scores = self._handle_negation(sent)
        
        if not token_scores:
            return ("neutral", 0.0)
        
        # Aggregate scores
        avg_score = np.mean(token_scores)
        
        # Determine sentiment label
        if avg_score > 0.2:
            label = "positive"
        elif avg_score < -0.2:
            label = "negative"
        else:
            label = "neutral"
        
        return (label, avg_score)
    
    def __call__(self, doc):
        """
        Process document and add sentiment annotations.
        
        Args:
            doc: spaCy Doc object
            
        Returns:
            Processed Doc with sentiment annotations
        """
        # Process each sentence
        sentence_scores = []
        for sent in doc.sents:
            sentiment, score = self._analyze_sentence_sentiment(sent)
            sent._.sentiment = sentiment
            sent._.sentiment_score = score
            sentence_scores.append(score)
        
        # Aggregate document sentiment
        if sentence_scores:
            doc_score = np.mean(sentence_scores)
            
            if doc_score > 0.2:
                doc._.sentiment = "positive"
            elif doc_score < -0.2:
                doc._.sentiment = "negative"
            else:
                doc._.sentiment = "neutral"
                
            doc._.sentiment_score = doc_score
        
        return doc


# Example usage
if __name__ == "__main__":
    # Load spaCy and add custom component
    nlp = spacy.load("en_core_web_sm")
    nlp.add_pipe("sentiment_analyzer", last=True)
    
    # Sample text
    text = "I'm not happy with the product. It has many issues, but the customer service was excellent."
    
    # Process text
    doc = nlp(text)
    
    # Output document-level sentiment
    print(f"Overall sentiment: {doc._.sentiment} (score: {doc._.sentiment_score:.2f})")
    
    # Output sentence-level sentiment
    for sent in doc.sents:
        print(f"Sentence: '{sent.text}'")
        print(f"Sentiment: {sent._.sentiment} (score: {sent._.sentiment_score:.2f})")
        print()`,
    category: 'nlp',
    tags: ['Sentiment Analysis', 'spaCy', 'Python', 'NLP Pipeline']
  },
  {
    id: 'ml-pipeline',
    title: 'ML Pipeline for Topic Classification',
    description: 'A scikit-learn pipeline for topic classification of customer support tickets.',
    language: 'python',
    code: `import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import classification_report, f1_score
import joblib
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class TopicClassificationPipeline:
    """
    Machine learning pipeline for multi-label topic classification
    of customer support tickets.
    """
    
    def __init__(self, model_path: str = None):
        """
        Initialize the pipeline.
        
        Args:
            model_path: Path to saved model (for loading existing model)
        """
        self.pipeline = None
        self.labels = None
        self.model_path = model_path
        
        if model_path:
            self.load_model(model_path)
    
    def build_pipeline(self):
        """
        Build the scikit-learn pipeline for text classification.
        """
        logger.info("Building classification pipeline")
        
        # Create pipeline with TF-IDF and SVM classifier
        self.pipeline = Pipeline([
            ('tfidf', TfidfVectorizer(
                min_df=5,
                max_df=0.8,
                ngram_range=(1, 2),
                sublinear_tf=True
            )),
            ('classifier', OneVsRestClassifier(LinearSVC(
                C=1.0,
                class_weight='balanced'
            )))
        ])
        
        return self.pipeline
    
    def train(self, X_train, y_train, optimize: bool = False):
        """
        Train the classification pipeline.
        
        Args:
            X_train: Training text data
            y_train: Training labels (multi-label format)
            optimize: Whether to perform hyperparameter optimization
        """
        if self.pipeline is None:
            self.build_pipeline()
        
        logger.info(f"Training model on {len(X_train)} examples")
        
        if optimize:
            logger.info("Performing hyperparameter optimization")
            param_grid = {
                'tfidf__min_df': [2, 5, 10],
                'tfidf__max_df': [0.7, 0.8, 0.9],
                'tfidf__ngram_range': [(1, 1), (1, 2)],
                'classifier__estimator__C': [0.1, 1.0, 10.0]
            }
            
            grid_search = GridSearchCV(
                self.pipeline,
                param_grid=param_grid,
                cv=3,
                scoring='f1_macro',
                verbose=1,
                n_jobs=-1
            )
            
            grid_search.fit(X_train, y_train)
            self.pipeline = grid_search.best_estimator_
            
            logger.info(f"Best parameters: {grid_search.best_params_}")
            logger.info(f"Best cross-validation score: {grid_search.best_score_:.4f}")
        else:
            self.pipeline.fit(X_train, y_train)
    
    def evaluate(self, X_test, y_test):
        """
        Evaluate the model on test data.
        
        Args:
            X_test: Test text data
            y_test: Test labels
            
        Returns:
            Dictionary with evaluation metrics
        """
        if self.pipeline is None:
            raise ValueError("Model not trained or loaded")
        
        logger.info(f"Evaluating model on {len(X_test)} examples")
        y_pred = self.pipeline.predict(X_test)
        
        # Calculate metrics
        report = classification_report(y_test, y_pred, output_dict=True)
        f1_macro = f1_score(y_test, y_pred, average='macro')
        f1_micro = f1_score(y_test, y_pred, average='micro')
        
        logger.info(f"Macro F1 Score: {f1_macro:.4f}")
        logger.info(f"Micro F1 Score: {f1_micro:.4f}")
        
        return {
            'f1_macro': f1_macro,
            'f1_micro': f1_micro,
            'classification_report': report
        }
    
    def predict(self, texts):
        """
        Predict topics for new texts.
        
        Args:
            texts: List of text strings
            
        Returns:
            Predicted topic labels
        """
        if self.pipeline is None:
            raise ValueError("Model not trained or loaded")
        
        predictions = self.pipeline.predict(texts)
        return predictions
    
    def save_model(self, path: str):
        """
        Save the trained model to disk.
        
        Args:
            path: Output file path
        """
        if self.pipeline is None:
            raise ValueError("No trained model to save")
        
        logger.info(f"Saving model to {path}")
        joblib.dump(self.pipeline, path)
        self.model_path = path
    
    def load_model(self, path: str):
        """
        Load a trained model from disk.
        
        Args:
            path: Model file path
        """
        logger.info(f"Loading model from {path}")
        self.pipeline = joblib.load(path)
        self.model_path = path


# Example usage
if __name__ == "__main__":
    # Sample data (in practice this would come from a database)
    data = [
        {"text": "I can't log into my account", "topics": ["login", "authentication"]},
        {"text": "The app crashes when I try to upload a photo", "topics": ["app", "crash", "upload"]},
        {"text": "How do I reset my password?", "topics": ["password", "reset", "login"]},
        # ... more examples
    ]
    
    # Convert to DataFrame
    df = pd.DataFrame(data)
    
    # Example of preparing multi-label data
    # (simplified - in production would use MultiLabelBinarizer)
    all_topics = set()
    for topics in df['topics']:
        all_topics.update(topics)
    
    all_topics = sorted(list(all_topics))
    
    # Create binary matrix for topics
    y = np.zeros((len(df), len(all_topics)))
    for i, topics in enumerate(df['topics']):
        for topic in topics:
            y[i, all_topics.index(topic)] = 1
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        df['text'], y, test_size=0.2, random_state=42
    )
    
    # Create and train pipeline
    pipeline = TopicClassificationPipeline()
    pipeline.train(X_train, y_train)
    
    # Evaluate
    results = pipeline.evaluate(X_test, y_test)
    print(f"F1 Macro: {results['f1_macro']}")
    
    # Example prediction
    new_texts = ["I forgot my password and can't log in"]
    predictions = pipeline.predict(new_texts)
    
    # Convert predictions back to topic labels
    predicted_topics = []
    for pred in predictions:
        topics = [all_topics[i] for i in np.where(pred == 1)[0]]
        predicted_topics.append(topics)
        
    print(f"Predicted topics: {predicted_topics[0]}")`,
    category: 'machine_learning',
    tags: ['scikit-learn', 'Topic Classification', 'Python', 'ML Pipeline']
  },
  {
    id: 'flask-microservice',
    title: 'Flask Microservice for NLP Processing',
    description: 'A Flask-based microservice for exposing NLP models via a RESTful API.',
    language: 'python',
    code: `from flask import Flask, request, jsonify
import spacy
import logging
import time
import uuid
from functools import wraps
import redis
import json
from typing import Dict, Any, Callable

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)

# Initialize Redis for caching
redis_client = redis.Redis(host='localhost', port=6379, db=0)
CACHE_EXPIRATION = 3600  # 1 hour in seconds

# Load spaCy model
try:
    nlp = spacy.load("en_core_web_lg")
    logger.info("spaCy model loaded successfully")
except Exception as e:
    logger.error(f"Failed to load spaCy model: {e}")
    raise

# ----- Utility Functions -----

def timer(f: Callable) -> Callable:
    """Decorator to time function execution"""
    @wraps(f)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = f(*args, **kwargs)
        duration = time.time() - start_time
        logger.info(f"{f.__name__} executed in {duration:.4f} seconds")
        return result
    return wrapper

def get_cache_key(text: str, operation: str) -> str:
    """Generate cache key for Redis"""
    # Use hash to avoid storing potentially large texts as keys
    import hashlib
    text_hash = hashlib.md5(text.encode()).hexdigest()
    return f"{operation}:{text_hash}"

def get_from_cache(key: str) -> Dict[str, Any]:
    """Get result from cache"""
    cached = redis_client.get(key)
    if cached:
        return json.loads(cached)
    return None

def set_in_cache(key: str, data: Dict[str, Any]) -> None:
    """Store result in cache"""
    redis_client.setex(key, CACHE_EXPIRATION, json.dumps(data))

# ----- NLP Processing Functions -----

@timer
def extract_entities(text: str) -> Dict[str, Any]:
    """Extract named entities from text"""
    doc = nlp(text)
    entities = []
    
    for ent in doc.ents:
        entities.append({
            "text": ent.text,
            "start": ent.start_char,
            "end": ent.end_char,
            "label": ent.label_,
            "description": spacy.explain(ent.label_)
        })
    
    return {"entities": entities}

@timer
def analyze_syntax(text: str) -> Dict[str, Any]:
    """Analyze syntactic structure of text"""
    doc = nlp(text)
    tokens = []
    
    for token in doc:
        tokens.append({
            "text": token.text,
            "lemma": token.lemma_,
            "pos": token.pos_,
            "tag": token.tag_,
            "dep": token.dep_,
            "is_stop": token.is_stop
        })
    
    return {"tokens": tokens}

@timer
def extract_keywords(text: str) -> Dict[str, Any]:
    """Extract key phrases and keywords"""
    doc = nlp(text)
    
    # Filter for nouns and adjectives
    keywords = []
    for chunk in doc.noun_chunks:
        keywords.append({
            "text": chunk.text,
            "root_text": chunk.root.text,
            "root_pos": chunk.root.pos_
        })
    
    # Add important single tokens
    important_tokens = []
    for token in doc:
        if (not token.is_stop and not token.is_punct and 
            token.pos_ in ['NOUN', 'PROPN', 'ADJ'] and
            token.text.lower() not in [k['text'].lower() for k in keywords]):
            important_tokens.append({
                "text": token.text,
                "lemma": token.lemma_,
                "pos": token.pos_
            })
    
    return {
        "noun_phrases": keywords,
        "important_tokens": important_tokens
    }

# ----- API Routes -----

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "model": "en_core_web_lg",
        "version": spacy.__version__
    })

@app.route('/api/entities', methods=['POST'])
def api_entities():
    """Extract named entities from text"""
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    
    data = request.get_json()
    if 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    
    text = data['text']
    
    # Check cache
    cache_key = get_cache_key(text, 'entities')
    cached_result = get_from_cache(cache_key)
    if cached_result:
        logger.info("Returning cached entity result")
        return jsonify(cached_result)
    
    # Process text
    try:
        result = extract_entities(text)
        
        # Add request ID and timestamp
        result['request_id'] = str(uuid.uuid4())
        result['timestamp'] = time.time()
        
        # Cache result
        set_in_cache(cache_key, result)
        
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error processing entities: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/syntax', methods=['POST'])
def api_syntax():
    """Analyze syntactic structure of text"""
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    
    data = request.get_json()
    if 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    
    text = data['text']
    
    # Check cache
    cache_key = get_cache_key(text, 'syntax')
    cached_result = get_from_cache(cache_key)
    if cached_result:
        logger.info("Returning cached syntax result")
        return jsonify(cached_result)
    
    # Process text
    try:
        result = analyze_syntax(text)
        
        # Add request ID and timestamp
        result['request_id'] = str(uuid.uuid4())
        result['timestamp'] = time.time()
        
        # Cache result
        set_in_cache(cache_key, result)
        
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error processing syntax: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/keywords', methods=['POST'])
def api_keywords():
    """Extract key phrases and keywords"""
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    
    data = request.get_json()
    if 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    
    text = data['text']
    
    # Check cache
    cache_key = get_cache_key(text, 'keywords')
    cached_result = get_from_cache(cache_key)
    if cached_result:
        logger.info("Returning cached keywords result")
        return jsonify(cached_result)
    
    # Process text
    try:
        result = extract_keywords(text)
        
        # Add request ID and timestamp
        result['request_id'] = str(uuid.uuid4())
        result['timestamp'] = time.time()
        
        # Cache result
        set_in_cache(cache_key, result)
        
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error processing keywords: {e}")
        return jsonify({"error": str(e)}), 500

# ----- Main Application -----

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)`,
    category: 'web_development',
    tags: ['Flask', 'API', 'Microservices', 'spaCy', 'Redis']
  }
];