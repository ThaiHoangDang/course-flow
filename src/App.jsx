import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/common/Homepage";
import Course from "./pages/common/Course";
import CoursesList from "./pages/common/CoursesList";
import Login from "./pages/common/Login";
import SignUp from "./pages/common/SignUp";
import NotFound from "./pages/common/NotFound";
import Profile from "./pages/common/Profile";
import Enrolment from "./pages/students/Enrolment";
import GradeCalculator from "./pages/students/GradeCalculator";
import Program from "./pages/admins/Program";
import ProgramsList from "./pages/admins/ProgramsList";
import { ProtectedAdminRoute, ProtectedStudentRoute } from "./firebase/authentication";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public pages */}
          <Route exact path="/" element={<Homepage />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/courses-list" element={<CoursesList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          {/* student pages */}
          <Route element={<ProtectedStudentRoute />}>
            <Route path="/enrolment" element={<Enrolment />} />
            <Route path="/grade-calculator" element={<GradeCalculator />} />
          </Route>
          {/* admin pages */}
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/programs-list" element={<ProgramsList />} />
            <Route path="/program" element={<Program />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
