import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Specially-Abled Dashboard
import SpeciallyAbledDashboard from "./pages/SpeciallyAbled/Dashboard";
import OTMMap from "./pages/SpeciallyAbled/OTMMap";
import PlanTrip from "./pages/SpeciallyAbled/PlanTrip";
import BookAssistant from "./pages/SpeciallyAbled/BookAssistant";
import SAGovernmentSchemes from "./pages/SpeciallyAbled/GovernmentSchemes";
import SACommunity from "./pages/SpeciallyAbled/Community";
import SAProfile from "./pages/SpeciallyAbled/Profile";

// Senior Citizen Dashboard
import SeniorCitizenDashboard from "./pages/SeniorCitizen/Dashboard";
import BookCaretaker from "./pages/SeniorCitizen/BookCaretaker";
import StorySharing from "./pages/SeniorCitizen/StorySharing";
import SCGovernmentSchemes from "./pages/SeniorCitizen/GovernmentSchemes";
import SCCommunity from "./pages/SeniorCitizen/Community";
import SCProfile from "./pages/SeniorCitizen/Profile";

// Orphan Home Dashboard
import OrphanHomeDashboard from "./pages/OrphanHome/Dashboard";
import ManageDonations from "./pages/OrphanHome/ManageDonations";
import LearningSessions from "./pages/OrphanHome/LearningSessions";
import OHGovernmentSchemes from "./pages/OrphanHome/GovernmentSchemes";
import OHCommunity from "./pages/OrphanHome/Community";
import OHProfile from "./pages/OrphanHome/Profile";

// Donor Dashboard
import ExploreOrphanages from "./pages/Donor/ExploreOrphanages";
import DonateItems from "./pages/Donor/DonateItems";
import FundProjects from "./pages/Donor/FundProjects";
import SponsorEvents from "./pages/Donor/SponsorEvents";
import MyDonations from "./pages/Donor/MyDonations";
import DonorProfile from "./pages/Donor/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/role-selection",
    Component: RoleSelection,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  // Specially-Abled Routes
  {
    path: "/specially-abled/dashboard",
    Component: SpeciallyAbledDashboard,
  },
  {
    path: "/specially-abled/otm-map",
    Component: OTMMap,
  },
  {
    path: "/specially-abled/plan-trip",
    Component: PlanTrip,
  },
  {
    path: "/specially-abled/book-assistant",
    Component: BookAssistant,
  },
  {
    path: "/specially-abled/government-schemes",
    Component: SAGovernmentSchemes,
  },
  {
    path: "/specially-abled/community",
    Component: SACommunity,
  },
  {
    path: "/specially-abled/profile",
    Component: SAProfile,
  },
  // Senior Citizen Routes
  {
    path: "/senior-citizen/dashboard",
    Component: SeniorCitizenDashboard,
  },
  {
    path: "/senior-citizen/book-caretaker",
    Component: BookCaretaker,
  },
  {
    path: "/senior-citizen/story-sharing",
    Component: StorySharing,
  },
  {
    path: "/senior-citizen/government-schemes",
    Component: SCGovernmentSchemes,
  },
  {
    path: "/senior-citizen/community",
    Component: SCCommunity,
  },
  {
    path: "/senior-citizen/profile",
    Component: SCProfile,
  },
  // Orphan Home Routes
  {
    path: "/orphan-home/dashboard",
    Component: OrphanHomeDashboard,
  },
  {
    path: "/orphan-home/manage-donations",
    Component: ManageDonations,
  },
  {
    path: "/orphan-home/learning-sessions",
    Component: LearningSessions,
  },
  {
    path: "/orphan-home/government-schemes",
    Component: OHGovernmentSchemes,
  },
  {
    path: "/orphan-home/community",
    Component: OHCommunity,
  },
  {
    path: "/orphan-home/profile",
    Component: OHProfile,
  },
  // Donor Routes
  {
    path: "/donor/explore-orphanages",
    Component: ExploreOrphanages,
  },
  {
    path: "/donor/donate-items",
    Component: DonateItems,
  },
  {
    path: "/donor/fund-projects",
    Component: FundProjects,
  },
  {
    path: "/donor/sponsor-events",
    Component: SponsorEvents,
  },
  {
    path: "/donor/my-donations",
    Component: MyDonations,
  },
  {
    path: "/donor/profile",
    Component: DonorProfile,
  },
]);
