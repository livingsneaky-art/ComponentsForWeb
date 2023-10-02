import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfileHomePageCompanyEdi from "./pages/ProfileHomePageCompanyEdi";
import ProfilePageCompanyDefault from "./pages/ProfilePageCompanyDefault";
import JobsPageCompanyViewingJob from "./pages/JobsPageCompanyViewingJob";
import JobsPageCompanyViewingJob1 from "./pages/JobsPageCompanyViewingJob1";
import JobsPageCompanyViewingJob2 from "./pages/JobsPageCompanyViewingJob2";
import ApplyJobPageAlumni from "./pages/ApplyJobPageAlumni";
import HelpCompanyPage from "./pages/HelpCompanyPage";
import NotificationPageCompany from "./pages/NotificationPageCompany";
import JobsPageCompanyCreatingNe from "./pages/JobsPageCompanyCreatingNe";
import JobsPageCompanyCreatingNe1 from "./pages/JobsPageCompanyCreatingNe1";
import JobsPageCompanyCreatingNe2 from "./pages/JobsPageCompanyCreatingNe2";
import JobsPageCompanyDefaultVie from "./pages/JobsPageCompanyDefaultVie";
import EventsPageCompanyDefaultV from "./pages/EventsPageCompanyDefaultV";
import EditingProfileHomePageAlum from "./pages/EditingProfileHomePageAlum";
import EditingProfileHomePageAlum1 from "./pages/EditingProfileHomePageAlum1";
import ProfileHomePageAlumniScro from "./pages/ProfileHomePageAlumniScro";
import ProfileHomePageAlumniDefa from "./pages/ProfileHomePageAlumniDefa";
import HelpAlumniPage from "./pages/HelpAlumniPage";
import NotificationPageAlumni from "./pages/NotificationPageAlumni";
import JobsPageAlumniAfterSearch from "./pages/JobsPageAlumniAfterSearch";
import JobsPageAlumniViewingMore from "./pages/JobsPageAlumniViewingMore";
import JobsPageAlumniViewingMore1 from "./pages/JobsPageAlumniViewingMore1";
import JobsPageAlumniScrolledDow from "./pages/JobsPageAlumniScrolledDow";
import JobsPageAlumniDefaultView from "./pages/JobsPageAlumniDefaultView";
import EventsPageAlumni from "./pages/EventsPageAlumni";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page-company-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-viewing-job-info":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-viewing-job-info-view-application":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-viewing-job-info1":
        title = "";
        metaDescription = "";
        break;
      case "/apply-job-page-alumni":
        title = "";
        metaDescription = "";
        break;
      case "/help-company-page":
        title = "";
        metaDescription = "";
        break;
      case "/notification-page-company":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-creating-new-posting-view-scrolled-down":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-creating-new-posting-view-scrolled-down1":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-creating-new-postingview":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-company-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/events-page-company-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/editing-profilehome-page-alumni-scrolled-down-third":
        title = "";
        metaDescription = "";
        break;
      case "/editing-profilehome-page-alumni-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/profilehome-page-alumni-scrolled-down-third":
        title = "";
        metaDescription = "";
        break;
      case "/profilehome-page-alumni-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/help-alumni-page":
        title = "";
        metaDescription = "";
        break;
      case "/notification-page-alumni":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-alumni-after-search":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-alumni-viewing-more-details-scrolled-down":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-alumni-viewing-more-details":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-alumni-scrolled-down":
        title = "";
        metaDescription = "";
        break;
      case "/jobs-page-alumni-default-view":
        title = "";
        metaDescription = "";
        break;
      case "/events-page-alumni":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ProfileHomePageCompanyEdi />} />
      <Route
        path="/profile-page-company-default-view"
        element={<ProfilePageCompanyDefault />}
      />
      <Route
        path="/jobs-page-company-viewing-job-info"
        element={<JobsPageCompanyViewingJob />}
      />
      <Route
        path="/jobs-page-company-viewing-job-info-view-application"
        element={<JobsPageCompanyViewingJob1 />}
      />
      <Route
        path="/jobs-page-company-viewing-job-info1"
        element={<JobsPageCompanyViewingJob2 />}
      />
      <Route path="/apply-job-page-alumni" element={<ApplyJobPageAlumni />} />
      <Route path="/help-company-page" element={<HelpCompanyPage />} />
      <Route
        path="/notification-page-company"
        element={<NotificationPageCompany />}
      />
      <Route
        path="/jobs-page-company-creating-new-posting-view-scrolled-down"
        element={<JobsPageCompanyCreatingNe />}
      />
      <Route
        path="/jobs-page-company-creating-new-posting-view-scrolled-down1"
        element={<JobsPageCompanyCreatingNe1 />}
      />
      <Route
        path="/jobs-page-company-creating-new-postingview"
        element={<JobsPageCompanyCreatingNe2 />}
      />
      <Route
        path="/jobs-page-company-default-view"
        element={<JobsPageCompanyDefaultVie />}
      />
      <Route
        path="/events-page-company-default-view"
        element={<EventsPageCompanyDefaultV />}
      />
      <Route
        path="/editing-profilehome-page-alumni-scrolled-down-third"
        element={<EditingProfileHomePageAlum />}
      />
      <Route
        path="/editing-profilehome-page-alumni-default-view"
        element={<EditingProfileHomePageAlum1 />}
      />
      <Route
        path="/profilehome-page-alumni-scrolled-down-third"
        element={<ProfileHomePageAlumniScro />}
      />
      <Route
        path="/profilehome-page-alumni-default-view"
        element={<ProfileHomePageAlumniDefa />}
      />
      <Route path="/help-alumni-page" element={<HelpAlumniPage />} />
      <Route
        path="/notification-page-alumni"
        element={<NotificationPageAlumni />}
      />
      <Route
        path="/jobs-page-alumni-after-search"
        element={<JobsPageAlumniAfterSearch />}
      />
      <Route
        path="/jobs-page-alumni-viewing-more-details-scrolled-down"
        element={<JobsPageAlumniViewingMore />}
      />
      <Route
        path="/jobs-page-alumni-viewing-more-details"
        element={<JobsPageAlumniViewingMore1 />}
      />
      <Route
        path="/jobs-page-alumni-scrolled-down"
        element={<JobsPageAlumniScrolledDow />}
      />
      <Route
        path="/jobs-page-alumni-default-view"
        element={<JobsPageAlumniDefaultView />}
      />
      <Route path="/events-page-alumni" element={<EventsPageAlumni />} />
    </Routes>
  );
}
export default App;
