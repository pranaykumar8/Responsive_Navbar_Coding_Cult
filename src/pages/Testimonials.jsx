import { useState } from 'react';

function Testimonials() {
  const [heading, setHeading] = useState("Testimonials");
  const [testimonial, setTestimonial] = useState(
    `"Thanks to this platform, I landed my dream job!" – Pranay Kumar, Software Engineer`
  );
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gray-800">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 max-w-xl w-full text-center">
        {isEditing ? (
          <>
            <input
              type="text"
              className="text-2xl font-bold mb-4 w-full bg-transparent text-center border-b border-gray-300 focus:outline-none focus:border-blue-500"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <textarea
              className="italic border-l-4 pl-4 border-blue-500 text-gray-700 w-full bg-transparent border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              rows={4}
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">{heading}</h1>
            <blockquote className="italic border-l-4 pl-4 border-blue-500 text-gray-700">
              {testimonial}
            </blockquote>
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
