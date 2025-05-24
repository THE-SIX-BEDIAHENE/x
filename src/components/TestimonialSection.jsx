import React from "react";

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
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase">Testimonials</p>
        <h2 className="text-4xl font-bold">
          Here’s the value we’ve brought to our learners.
        </h2>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden space-x-8 px-10 scrollbar-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[300px] bg-[#3b82f6] text-white rounded-2xl p-6 shrink-0"
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
    </section>
  );
};

export default TestimonialSection;
