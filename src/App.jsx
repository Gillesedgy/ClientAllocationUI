import { Route, Routes, Router } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import ClientList from "./Components/Clients/ClientList";
import Banner from "./Components/Home/Banner";
import Employees from "./Components/Employees/Employees";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar /> {/* <Router>
       
        <section>
          <Banner />
        </section>
        <section>
          <ClientList />
        </section> */}
      <Routes>
        {/* <Route path="/" element={<Banner />} /> */}
        <Route path="/clients" element={<ClientList />} />
        <Route path="/employees" element={<Employees />} />

        {/* Add more routes here */}
      </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import NavBar from "./Components/Navigation/NavBar/";
// import Main from "./Components/Home/Main";
// import About from "./Components/About/About";
// import ClientList from "./Components/Clients/ClientList";
// import Contact from "./Components/Contact/Contact";
// import Contracts from "./Components/Contracts/Contracts";
// import Employees from "./Components/Employees/Employees";
// import RateCard from "./Components/RateCard/RateCard";

// function App() {
//   return (
//     <div className=" App">
//       <Router>
//         <div className="sticky top-0 z-50">
//           {" "}
//           <NavBar />
//         </div>
//         <section id="home">
//           <Main />
//         </section>
//         <section id="employees">
//           <Employees />
//         </section>
//         <section id="rating">
//           <RateCard />
//         </section>
//         <section id="clients">
//           <ClientList />
//         </section>
//         {/* <section id="projects">
//           <ProjectsPage />
//         </section> */}
//         <section id="contracts">
//           <Contracts />
//         </section>

//         {/* Contact AKA FOOTER */}
//         <section id="about">
//           <About />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>

//         {/* Single Page Navigation */}
//         <Routes>
//           <Route path="/clients" element={<ClientList />} />
//           {/* <Route path="/client/:id" element={<ClientDetail />} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
