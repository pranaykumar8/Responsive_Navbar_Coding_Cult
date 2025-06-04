import { useState } from 'react';
//import image from '../assets/image.png';

function Custompage() {
  const [heading, setHeading] = useState(" ");
  const [description, setDescription] = useState(
    "  "
  );
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center bg-gray-800"
      //style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 max-w-md text-center">
          {isEditing ? (
            <>
              <input
                type="text"
                className="font-bold mb-2 text-3xl w-full bg-transparent text-center border-b border-gray-300 focus:outline-none focus:border-blue-500"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <textarea
                className="text-gray-700 w-full mt-4 bg-transparent border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
              <h1 className="font-bold mb-2 text-3xl">{heading}</h1>
              <p className="text-gray-700">{description}</p>
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
    </div>
  );
}

export default Custompage;
