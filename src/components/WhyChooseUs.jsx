import React, { useEffect, useState, useRef } from 'react';

const MetricCounter = ({ title, targetValue, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Duration of the count in milliseconds
      const incrementAmount = targetValue / (duration / 100); // Increment every 100 ms
      let currentCount = 0;

      const interval = setInterval(() => {
        if (currentCount < targetValue) {
          currentCount += incrementAmount;
          // Ensure the count does not exceed the target value
          if (currentCount > targetValue) {
            currentCount = targetValue;
          }
          setCount(Math.floor(currentCount)); // Use Math.floor to avoid decimal counts
        } else {
          clearInterval(interval);
        }
      }, 100); // Update every 100 ms

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isVisible, targetValue]);

  return (
    <div className="bg-white rounded-xl border px-7 py-8">
      <p className="text-gray-400 text-base font-semibold mb-1">{title}</p>
      <h3 className="text-blue-600 text-3xl font-extrabold">
        {title === 'Server Uptime' ? `${count.toFixed(1)}%` : count}
      </h3>
    </div>
  );
};

const WhyChooseUs = () => {
  const metrics = [
    { title: 'Total free services', value: 54000 },
    { title: 'Revenue a month', value: 80000 },
    { title: 'Engagement', value: 100000 },
    { title: 'Server Uptime', value: 99.9 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 px-4 py-12 font-sans" ref={ref}>
      <div className="">
        <h2 className="text-gray-800 text-4xl max-sm:text-2xl font-extrabold mb-8">
          Application Metrics
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {metrics.map((metric, index) => (
            <MetricCounter 
              key={index} 
              title={metric.title} 
              targetValue={metric.value} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;