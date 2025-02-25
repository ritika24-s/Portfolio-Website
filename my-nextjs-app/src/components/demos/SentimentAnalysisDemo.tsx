/*
 * File: src/components/demos/SentimentAnalysisDemo.tsx
 * Purpose: Interactive sentiment analysis demonstration
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Smile, Frown, Meh } from 'lucide-react';

export const SentimentAnalysisDemo = () => {
  const [inputText, setInputText] = useState('');
  const [sentiment, setSentiment] = useState<null | {
    score: number;
    label: 'positive' | 'negative' | 'neutral';
    confidence: number;
  }>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // This function would typically call your backend API
  // For demo purposes, we'll simulate an analysis
  const analyzeSentiment = () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      // Simple word-based sentiment calculation (for demo purposes only)
      const positiveWords = ['good', 'great', 'excellent', 'happy', 'love', 'wonderful', 'best', 'fantastic'];
      const negativeWords = ['bad', 'terrible', 'awful', 'sad', 'hate', 'worst', 'horrible', 'disappointing'];
      
      const words = inputText.toLowerCase().match(/\b(\w+)\b/g) || [];
      
      let score = 0;
      let positiveCount = 0;
      let negativeCount = 0;
      
      words.forEach(word => {
        if (positiveWords.includes(word)) {
          score += 1;
          positiveCount++;
        } else if (negativeWords.includes(word)) {
          score -= 1;
          negativeCount++;
        }
      });
      
      // Normalize score between -1 and 1
      const normalizedScore = words.length > 0 ? score / words.length * 2 : 0;
      
      // Determine sentiment label
      let label: 'positive' | 'negative' | 'neutral' = 'neutral';
      if (normalizedScore > 0.2) label = 'positive';
      else if (normalizedScore < -0.2) label = 'negative';
      
      // Calculate confidence based on proportion of sentiment words
      const sentimentWordCount = positiveCount + negativeCount;
      const confidence = words.length > 0 ? Math.min(sentimentWordCount / words.length * 3, 1) : 0;
      
      setSentiment({
        score: normalizedScore,
        label,
        confidence
      });
      
      setIsAnalyzing(false);
    }, 1500);
  };

  const getSentimentColor = () => {
    if (!sentiment) return 'bg-gray-100 dark:bg-gray-700';
    if (sentiment.label === 'positive') return 'bg-green-100 dark:bg-green-900/30';
    if (sentiment.label === 'negative') return 'bg-red-100 dark:bg-red-900/30';
    return 'bg-blue-100 dark:bg-blue-900/30';
  };

  const getSentimentIcon = () => {
    if (!sentiment) return null;
    if (sentiment.label === 'positive') return <Smile className="w-6 h-6 text-green-500" />;
    if (sentiment.label === 'negative') return <Frown className="w-6 h-6 text-red-500" />;
    return <Meh className="w-6 h-6 text-blue-500" />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
          Sentiment Analysis Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Try out my sentiment analysis model by entering text below
        </p>
      </div>
      
      <div className="p-6">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter some text to analyze (e.g., 'I really enjoyed this product, it's fantastic!')"
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg 
                   dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   resize-none min-h-[150px]"
        />
        
        <div className="mt-4 flex justify-end">
          <motion.button
            onClick={analyzeSentiment}
            disabled={isAnalyzing || !inputText.trim()}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2
                      ${isAnalyzing || !inputText.trim() 
                        ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
            whileHover={isAnalyzing || !inputText.trim() ? {} : { scale: 1.03 }}
            whileTap={isAnalyzing || !inputText.trim() ? {} : { scale: 0.97 }}
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Analyze Sentiment</span>
              </>
            )}
          </motion.button>
        </div>
        
        {sentiment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-6 rounded-lg ${getSentimentColor()}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {getSentimentIcon()}
                <h3 className="text-lg font-semibold ml-2 capitalize">
                  {sentiment.label} Sentiment
                </h3>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Confidence: {Math.round(sentiment.confidence * 100)}%
              </div>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((sentiment.score + 1) / 2) * 100}%` }}
                transition={{ duration: 1 }}
                className={`h-full ${
                  sentiment.label === 'positive' ? 'bg-green-500' :
                  sentiment.label === 'negative' ? 'bg-red-500' :
                  'bg-blue-500'
                }`}
              />
            </div>
            
            <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
              <span>Negative</span>
              <span>Neutral</span>
              <span>Positive</span>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong>Note:</strong> This is a simplified demonstration of sentiment analysis. 
                My actual implementation uses more sophisticated NLP techniques including 
                word embeddings, context analysis, and negation handling.
              </p>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700 p-4 border-t border-gray-200 dark:border-gray-600">
        <h3 className="font-semibold mb-2">About this demo</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This interactive demo showcases a simplified version of the sentiment analysis
          techniques I&apos;ve implemented at Scorebuddy. The production system incorporates
          more advanced features such as contextual understanding, domain adaptation, and
          aspect-based sentiment analysis.
        </p>
      </div>
    </div>
  );
};