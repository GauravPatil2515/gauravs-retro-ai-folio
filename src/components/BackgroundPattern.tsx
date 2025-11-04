const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/50"></div>
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(26,26,26,0.03) 2px, rgba(26,26,26,0.03) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(26,26,26,0.03) 2px, rgba(26,26,26,0.03) 4px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Tech Keywords - Dense Layout */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 p-8 md:p-16">
        {[
          // ML/AI Terms
          'PyTorch', 'TensorFlow', 'BERT', 'GPT', 'RAG', 'YOLO', 'CNN', 'LSTM', 
          'Transformers', 'Attention', 'NLP', 'Computer Vision', 'MLOps', 'Fine-tuning',
          'Langchain', 'LLM', 'Vector DB', 'Embeddings', 'Scikit-learn', 'Keras',
          'Neural Networks', 'Deep Learning', 'XGBoost', 'Random Forest', 'SVM',
          // Backend Terms
          'Flask', 'FastAPI', 'Django', 'REST API', 'GraphQL', 'gRPC', 'Microservices',
          'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ',
          'SQL', 'NoSQL', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'Linux',
          'Nginx', 'Load Balancing', 'Caching', 'Authentication', 'OAuth', 'JWT'
        ].map((tech, i) => (
          <span
            key={tech}
            className="text-[11px] md:text-xs font-medium text-gray-400/60 select-none transition-all duration-500 hover:text-gray-600 hover:scale-110 hover:font-semibold cursor-default"
            style={{
              animation: `float ${10 + (i % 5) * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;
