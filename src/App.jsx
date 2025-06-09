// import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Promo from './pages/Promo';
// import Review from './pages/Review';
// import Services from './pages/Services';
// import Testimonials from './pages/Testimonials';
// import CustomPage from './pages/CustomPage'; // 👈 Add this


// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/promo" element={<Promo />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/:pageName" element={<CustomPage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/review" element={<Review />} />
//       </Routes>
//     </Layout>
//   );
// }

// export default App;

// import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import CustomPage from './pages/CustomPage'; // ✅ Import
// import Home from './pages/Home';
// import Promo from './pages/Promo';
// import Review from './pages/Review';
// import Services from './pages/Services';
// import Testimonials from './pages/Testimonials';

// // For demo: put dynamic page names in a list
// const dynamicPages = ['JobPortal', 'Career', 'Feedback']; // Later you can make this dynamic too

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/promo" element={<Promo />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/review" element={<Review />} />
// <Route path="/something" element={<CustomPage />} />
//         {/* 👇 Add route for dynamic pages */}
//         {dynamicPages.map((page) => (
//           <Route
//             key={page}
//             path={`/${page.toLowerCase()}`}
//             element={<CustomPage />}
//           />
//         ))}
//       </Routes>
//     </Layout>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomPage from './pages/CustomPage'; // ✅ Make sure this exists
import Home from './pages/Home';
import Promo from './pages/Promo';
import Review from './pages/Review';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />

        {/* ✅ Catch-all for any custom added route */}
        <Route path=":custom" element={<CustomPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
