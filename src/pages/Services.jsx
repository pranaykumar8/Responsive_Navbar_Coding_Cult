import { useState } from 'react';

function Services() {
  const [heading, setHeading] = useState("Services");
  const [services, setServices] = useState([
    "Resume building",
    "Interview preparation",
    "1:1 Career counselling",
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleServiceChange = (index, value) => {
    const updatedServices = [...services];
    updatedServices[index] = value;
    setServices(updatedServices);
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gray-800">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        {isEditing ? (
          <>
            <input
              type="text"
              className="text-2xl font-bold mb-4 w-full bg-transparent text-center border-b border-gray-300 focus:outline-none focus:border-blue-500"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mt-4">
              {services.map((service, index) => (
                <li key={index}>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-500"
                    value={service}
                    onChange={(e) => handleServiceChange(index, e.target.value)}
                  />
                </li>
              ))}
            </ul>
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
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-left">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
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

export default Services;
