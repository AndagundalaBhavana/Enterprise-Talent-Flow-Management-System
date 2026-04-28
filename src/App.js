import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

import MyApplications from "./pages/MyApplications";
import Jobs from "./pages/Jobs";

import SkillsDashboard from "./pages/SkillsDashboard";
import AddSkill from "./pages/AddSkill";
import ViewSkills from "./pages/ViewSkills";
import UpdateSkills from "./pages/UpdateSkills";
import DeleteSkills from "./pages/DeleteSkills";

import SkillProofDashboard from "./pages/SkillProofDashboard";
import AddProof from "./pages/AddProof";
import ViewProofs from "./pages/ViewProofs";
import UpdateProof from "./pages/UpdateProof";
import DeleteProof from "./pages/DeleteProof";

import ProjectManagerDashboard from "./pages/ProjectManagerDashboard";
import AddJob from "./pages/AddJob";
import ViewJobs from "./pages/ViewJobs";
import UpdateJobs from "./pages/UpdateJobs";
import DeleteJobs from "./pages/DeleteJobs";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import RecruiterApplications from "./pages/RecruiterApplications";
import ViewApplications from "./pages/ViewApplications";
import UpdateApplicationStatus from "./pages/UpdateApplicationStatus";
import RecruiterSkills from "./pages/RecruiterSkills";
import RecruiterProofs from "./pages/RecruiterProofs";
import AdminDashboard from  "./pages/AdminDashboard";

import AdminApplications from "./pages/AdminApplications";
import AdminJobs from "./pages/AdminJobs";
import CreateJob from "./pages/AddJob";

import UpdateJob from "./pages/UpdateJobs";
import DeleteJob from "./pages/DeleteJobs";
import AdminSkills from "./pages/AdminSkills";
import AdminSkillProofs from "./pages/AdminSkillProofs";
import AdminUsers from "./pages/AdminUsers";
import ViewUsers from "./pages/ViewUsers";
import DeleteUsers from "./pages/DeleteUsers";
import ProfileMenu from "./pages/ProfileMenu";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Candidate */}
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />

        {/* Jobs & Applications */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applications" element={<MyApplications />} />

        {/* Skills */}
        <Route path="/skills" element={<SkillsDashboard />} />
        <Route path="/skills/add" element={<AddSkill />} />
        <Route path="/skills/view" element={<ViewSkills />} />
        <Route path="/skills/update" element={<UpdateSkills />} />
        <Route path="/skills/delete" element={<DeleteSkills />} />

        {/* Proofs */}
        <Route path="/proofs" element={<SkillProofDashboard />} />
        <Route path="/proofs/add" element={<AddProof />} />
        <Route path="/proofs/view" element={<ViewProofs />} />
        <Route path="/proofs/update" element={<UpdateProof />} />
        <Route path="/proofs/delete" element={<DeleteProof />} />

        {/* Project Manager */}
        <Route path="/pm-dashboard" element={<ProjectManagerDashboard />} />
        <Route path="/pm/jobs/add" element={<AddJob />} />
        <Route path="/pm/jobs/view" element={<ViewJobs />} />
        <Route path="/pm/jobs/update" element={<UpdateJobs />} />
        <Route path="/pm/jobs/delete" element={<DeleteJobs />} />

        {/* Recruiter */}
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/recruiter/applications" element={<RecruiterApplications />} />
        <Route path="/recruiter/applications/view" element={<ViewApplications />} />
        <Route path="/recruiter/applications/update" element={<UpdateApplicationStatus />} />
        <Route path="/recruiter/skills" element={<RecruiterSkills />} />
        <Route path="/recruiter/proofs" element={<RecruiterProofs />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        

        
       

        {/* fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/admin/applications" element={<AdminApplications />} />
<Route path="/admin/applications/view" element={<ViewApplications />} />
<Route path="/admin/applications/update" element={<UpdateApplicationStatus />} />
<Route path="/admin/jobs" element={<AdminJobs />} />
<Route path="/admin/jobs/create" element={<CreateJob />} />
<Route path="/admin/jobs/view" element={<ViewJobs />} />
<Route path="/admin/jobs/update" element={<UpdateJob />} />
<Route path="/admin/jobs/delete" element={<DeleteJob />} />
<Route path="/admin/skills" element={<AdminSkills/>}/>
<Route path="/admin/proofs" element={<AdminSkillProofs/>}/>
<Route path="/admin/users" element={<AdminUsers />} />
<Route path="/admin/users/view" element={<ViewUsers />} />
<Route path="/admin/users/delete" element={<DeleteUsers />} />
<Route path="/profile" element={<ProfileMenu />} />
<Route path="/profile/view" element={<Profile />} />
<Route path="/profile/update" element={<UpdateProfile />} />






      </Routes>
    </Router>
  );
}

export default App;