import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
 {
    name: "Grace",
    quote:
      "Steady/X has bridged the gap between tradition and innovation. Our students are now coding and building solutions confidently!",
    role: "Emily Dawson, Headteacher",
    image:
      "https://plus.unsplash.com/premium_photo-1664267832242-cc73a2fa4903?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Kwame",
    quote:
      "The training for teachers was comprehensive and easy to implement. We saw improvements in engagement right away.",
    role: "Kwame Ofori, Education Consultant",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60",
  },
   {
    name: "Grace",
    quote:
      "Steady/X has bridged the gap between tradition and innovation. Our students are now coding and building solutions confidently!",
    role: "Emily Dawson, Headteacher",
    image:
      "https://plus.unsplash.com/premium_photo-1664267832242-cc73a2fa4903?w=500&auto=format&fit=crop&q=60",
  },  {
    name: "Kwame",
    quote:
      "The training for teachers was comprehensive and easy to implement. We saw improvements in engagement right away.",
    role: "Kwame Ofori, Education Consultant",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60",
  },{
    name: "Grace",
    quote:
      "Steady/X has bridged the gap between tradition and innovation. Our students are now coding and building solutions confidently!",
    role: "Emily Dawson, Headteacher",
    image:
      "https://plus.unsplash.com/premium_photo-1664267832242-cc73a2fa4903?w=500&auto=format&fit=crop&q=60",
  }, {
    name: "Grace",
    quote:
      "Steady/X has bridged the gap between tradition and innovation. Our students are now coding and building solutions confidently!",
    role: "Emily Dawson, Headteacher",
    image:
      "https://plus.unsplash.com/premium_photo-1664267832242-cc73a2fa4903?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Kwame",
    quote:
      "The training for teachers was comprehensive and easy to implement. We saw improvements in engagement right away.",
    role: "Kwame Ofori, Education Consultant",
    image:
      "https://images.unsplash.com/photo-1590080876273-1e9f74a4f8e5?auto=format&fit=crop&w=600&q=80",
  },];

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    checkForScrollPosition();
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => checkForScrollPosition();
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByAmount = (distance) => {
    containerRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-15 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-[#2E3E99] font-bold text-4xl capitalize mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Here’s the value we’ve brought to our learners.
        </h2>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scrollByAmount(-320)}
          disabled={!canScrollLeft}
          aria-label="Scroll Left"
          className={`
            absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#3b82f6] text-white shadow-md transition-opacity
            disabled:opacity-30 disabled:cursor-not-allowed
            hidden sm:flex
          `}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Testimonials container */}
        <div
          ref={containerRef}
          className="
            flex
            overflow-x-auto
            overflow-y-hidden
            space-x-6
            px-2
            sm:space-x-8
            scrollbar-hidden
            snap-x snap-mandatory
            scroll-pl-4
            sm:scroll-pl-8
            md:scroll-pl-16
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center
                w-[280px] sm:w-[300px] md:w-[320px]
                bg-[#3b82f6]
                text-white
                rounded-2xl
                p-6
                shrink-0
                snap-center
              "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <p className="text-xl font-bold mb-2">{testimonial.name}</p>
              <p className="text-sm italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-medium">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollByAmount(320)}
          disabled={!canScrollRight}
          aria-label="Scroll Right"
          className={`
            absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#3b82f6] text-white shadow-md transition-opacity
            disabled:opacity-30 disabled:cursor-not-allowed
            hidden sm:flex
          `}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
