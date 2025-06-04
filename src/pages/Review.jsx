import image2 from '../assets/image2.png';

function Review() {
  return (
    <div  className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center"
              style={{ backgroundImage: `url(${image2})` }}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 max-w-md text-center">
          <h1 className="font-bold mb-2 text-3xl">Leave a Review</h1>
          <p className="text-gray-700">
            Share your feedback and help us improve!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
