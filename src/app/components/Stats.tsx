"use client";

import { useEffect, useState, useMemo } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Stats() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [counters, setCounters] = useState({
    professionals: 0,
    dataCenters: 0,
    devices: 0,
    applications: 0,
    workplaces: 0,
    totalSteps: 0
  });

  const targetValues = useMemo(() => ({
    professionals: 190,
    dataCenters: 2,
    devices: 6000,
    applications: 1000,
    workplaces: 1
  }), []);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
    }
  }, [isVisible, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const totalDuration = 5000; // 5 seconds total
    const interval = 50; // 50ms per update (20 updates per second)
    const totalSteps = totalDuration / interval; // 100 total steps

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targetValues).forEach(key => {
          const target = targetValues[key as keyof typeof targetValues];
          const current = prev[key as keyof typeof prev];
          
          if (current < target) {
            // Calculate how much to increment to reach target in remaining steps
            const remainingSteps = totalSteps - (prev.totalSteps || 0);
            const remaining = target - current;
            const increment = Math.max(1, Math.ceil(remaining / remainingSteps));
            newCounters[key as keyof typeof newCounters] = Math.min(current + increment, target);
            allComplete = false;
          }
        });

        // Track total steps
        newCounters.totalSteps = (prev.totalSteps || 0) + 1;

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [hasStarted, targetValues]);

  const stats = [
    {
      value: counters.professionals,
      suffix: "",
      description: "Professionals and counting"
    },
    {
      value: counters.dataCenters,
      suffix: "+ GW",
      description: "of Data Centers Built"
    },
    {
      value: counters.devices,
      suffix: "+",
      description: "Monitored & Protected Devices"
    },
    {
      value: counters.applications,
      suffix: "+",
      description: "Applications Migrated in 2025"
    },
    {
      value: counters.workplaces,
      suffix: "M sq. ft.",
      description: "Workplaces Transformed in 2025"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-10 overflow-hidden relative"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-start relative">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
          
          {/* Divider Lines - positioned relative to grid container */}
          {stats.map((_, index) => (
            index < stats.length - 1 && (
              <div 
                key={`line-${index}`}
                className="hidden lg:block absolute w-1 h-32 bg-[#00D1FF] opacity-60"
                style={{
                  left: `${((index + 1) * 20) - 0.5}%`,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for individual stat cards with their own animations
function StatCard({ stat, index, isVisible }: { stat: { value: number, suffix: string, description: string }, index: number, isVisible: boolean }) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Stagger the stat animations
      setTimeout(() => setIsCardVisible(true), index * 150);
    } else {
      setIsCardVisible(false);
    }
  }, [isVisible, index]);

  return (
    <div 
      className={`text-center transition-all duration-2000 ease-out ${
        isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Metric Value */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#008AD4] mb-2 md:mb-3">
        {stat.value.toLocaleString()}{stat.suffix}
      </div>
      
      {/* Description */}
      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 leading-relaxed px-1 sm:px-2">
        {stat.description}
      </div>
    </div>
  );
}
