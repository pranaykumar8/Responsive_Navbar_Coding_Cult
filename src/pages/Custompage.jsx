import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CustomPage() {
  const { custom } = useParams();
  const [heading, setHeading] = useState(custom || 'New Page');
  const [description, setDescription] = useState('Edit page content...');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-6 rounded shadow w-[90%] max-w-xl text-center">
        {isEditing ? (
          <>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full text-2xl font-bold border-b mb-4"
            />
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{heading}</h1>
            <p className="mt-2">{description}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomPage;
