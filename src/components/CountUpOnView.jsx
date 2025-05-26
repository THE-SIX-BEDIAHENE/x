import { useEffect, useRef, useState } from "react";

const CountUpOnView = ({ target = 10000, duration = 1000, className = "" }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => observer.unobserve(node);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = Math.ceil(target / (duration / 16)); // ~60fps
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 16); // roughly 60 frames per second

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <div
      ref={ref}
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${className}`}
    >
      {count.toLocaleString()}
    </div>
  );
};

export default CountUpOnView;
