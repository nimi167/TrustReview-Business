import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './MediaQuery.css';
import NavBar from './components/Assets/NavBar'
import HomePage from './components/Pages/HomePage';
import Footer from './components/Assets/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AttractNewCustomers from './components/Pages/Solutions/Page/AttractNewCustomers';
import ManageReviews from './components/Pages/Solutions/Page/ManageReviews';
import Integrations from './components/Pages/Partners/Page/Integrations';
import ReviewSpotlight from './components/Pages/Features/Page/ReviewSpotlight';
import DashboardAnalytics from './components/Pages/Features/Page/DashboardAnalytics';
import Pricing from './components/Pages/Pricing/Pricing';
import Signup from './components/Pages/Auth/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Pages/Auth/Login';
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
      <AuthProvider>
        <Router >
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/solutions/attract-new-customers" element={<AttractNewCustomers />} />
            <Route exact path="/solutions/manage-reviews" element={<ManageReviews />} />
            <Route exact path="/solutions/grow-with-reviews" element={<GrowWithReviews />} />

            <Route exact path="/partners/integrations" element={<Integrations />} />

            <Route exact path="/features/service-reviews" element={<ServiceReviews />} />
            <Route exact path="/features/review-seo" element={<ReviewSeo />} />
            <Route exact path="/features/marketing-assets" element={<MarketingAssets />} />
            <Route exact path="/features/flag-report-reviews" element={<FlagReportReviews />} />
            <Route exact path="/features/platform-safeguards" element={<PlatformSafeguards />} />
            <Route exact path="/features/review-spotlight" element={<ReviewSpotlight />} />
            <Route exact path="/features/market-insights" element={<MarketInsights />} />
            <Route exact path="/features/review-insights" element={<ReviewInsights />} />
            <Route exact path="/features/dashboard-analytics" element={<DashboardAnalytics />} />
            <Route exact path="/features/review-tagging" element={<ReviewTagging />} />

            <Route exact path="/pricing" element={<Pricing />} />

            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Login />} />
          </Routes>
          <Footer bgColor="ThemeBlack" />
        </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
