'use client'
import React, { useState, useEffect, useRef } from 'react';
import './Processanimation.css';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ProcessAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Discover',
      description: 'Understanding your goals, audience, and challenges',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Plan',
      description: 'Strategy, wireframes, and technical architecture',
      icon: '📋'
    },
    {
      id: 3,
      title: 'Design',
      description: 'Beautiful UI/UX that converts and engages',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Develop',
      description: 'Clean code with modern technologies',
      icon: '💻'
    },
    {
      id: 5,
      title: 'Test',
      description: 'Quality assurance and optimization',
      icon: '✅'
    },
    {
      id: 6,
      title: 'Launch',
      description: 'Smooth deployment and go-live',
      icon: '🚀'
    }
  ];

  // Initialize visibility and auto-play
  useEffect(() => {
    setIsVisible(true);
    startAutoPlay();

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, []);

  // Start auto-play
  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    autoPlayIntervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
  };

  // Handle step click
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    startAutoPlay(); // Reset auto-play
  };

  // Calculate dot position on circle
  const getDotPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radian = (angle * Math.PI) / 180;
    const x = 200 + 160 * Math.cos(radian);
    const y = 200 + 160 * Math.sin(radian);
    return { x, y };
  };

  // Calculate progress
  const circumference = 1005;
  const progress = ((activeStep + 1) / steps.length) * circumference;
  const progressPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <section className={`process-section ${isVisible ? 'visible' : ''}`}>
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <span className="process-badge">OUR PROCESS</span>
          <h2 className="process-title">End-to-End Development Journey</h2>
          <p className="process-subtitle">
            From initial concept to final launch — we guide you through every step
          </p>
        </div>

        {/* Circular Progress Visualization */}
        <div className="process-circle-container">
          <svg className="progress-ring" viewBox="0 0 400 400">
            {/* Background Circle */}
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="2"
            />
            
            {/* Animated Progress Circle */}
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="#000"
              strokeWidth="3"
              strokeDasharray={`${progress} ${circumference}`}
              strokeLinecap="round"
              className="progress-circle"
              transform="rotate(-90 200 200)"
            />

            {/* Step Dots */}
            <g id="stepDots">
              {steps.map((step, index) => {
                const { x, y } = getDotPosition(index, steps.length);
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                const isActivated = index <= activeStep;

                return (
                  <g key={step.id} data-index={index}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 23 : 20}
                      fill={isActivated ? '#000' : '#fff'}
                      stroke={isActivated ? '#000' : '#ddd'}
                      strokeWidth="2"
                    //   className={`step-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                      onClick={() => handleStepClick(index)}
                      style={{ cursor: 'pointer' }}
                    />
                    <text
                      x={x}
                      y={y + 5}
                      textAnchor="middle"
                      fill={isActivated ? '#fff' : '#999'}
                      fontSize="16"
                      fontWeight="600"
                      style={{ pointerEvents: 'none' }}
                    >
                      {index + 1}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Center Content */}
          <div className="center-content">
            <div className="step-icon" key={`icon-${activeStep}`}>
              {steps[activeStep]?.icon}
            </div>
            <h3 className="step-title" key={`title-${activeStep}`}>
              {steps[activeStep]?.title}
            </h3>
            <p className="step-description" key={`desc-${activeStep}`}>
              {steps[activeStep]?.description}
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProcessAnimation;