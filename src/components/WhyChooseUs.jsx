import React, { useEffect, useState, useRef } from 'react';

const MetricCounter = ({ title, targetValue, isVisible, showPlus = false }) => {
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
    <div className="bg-white rounded-xl border shadow-sm px-7 py-8 hover:shadow-md transition-shadow">
      <p className="text-neutral-500 text-base font-semibold mb-1">{title}</p>
      <h3 className="text-primary-600 text-3xl font-extrabold">
        {title === 'Server Uptime' ? `${count.toFixed(1)}%` : 
         showPlus ? `${count.toLocaleString()}+` : count.toLocaleString()}
      </h3>
    </div>
  );
};

const WhyChooseUs = () => {
  const metrics = [
    { title: 'Completed Projects', value: 5000, showPlus: true },
    { title: 'Counties Served', value: 30 },
    { title: 'Client Satisfaction', value: 98 },
    { title: 'Years of Experience', value: 22 },
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

  // Store the current value of the ref
  const currentRef = ref.current;

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    // Use the stored value in the cleanup
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);
  return (
    <section className="bg-neutral-100 px-4 py-12 font-sans" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary-600 text-3xl md:text-4xl mb-10 text-center font-bold">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {metrics.map((metric, index) => (
            <MetricCounter 
              key={index} 
              title={metric.title} 
              targetValue={metric.value} 
              isVisible={isVisible}
              showPlus={metric.showPlus}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;