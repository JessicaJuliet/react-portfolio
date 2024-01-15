import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
// Project Pages
import CoordinatesPage from './pages/CoordinatesPage.jsx';
import ShopifyBlogPage from './pages/shopifyBlogPage.jsx';
import GreyDiamondReleasePage from './pages/GreyDiamondReleasePage.jsx';
import EngagementPage from './pages/EngagementPage.jsx';
import EducationHubPage from './pages/EducationHubPage.jsx';



// Resource: React Router - https://reactrouter.com/en/main/start/tutorial
// Resource: React Router & Multiple Pages - https://www.youtube.com/watch?v=o05ZP6_JQqE

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "coordinates-template",
    element: <CoordinatesPage />,
  },
  {
    path: "shopify-blog",
    element: <ShopifyBlogPage />,
  }, 
  {
    path: "grey-diamond-release",
    element: <GreyDiamondReleasePage />,
  },  
  {
    path: "engagement-page",
    element: <EngagementPage />,
  },  
  {
    path: "education-hub",
    element: <EducationHubPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// Check if anchor link exists, if anchor link is true scroll to that location

var anchorLink = false;
var target = location.hash

// Check if anchor link & assign variable to true
if (target.includes("#")) {
  var anchorLink = true;
}

// Only run if anchorLink exists
if (anchorLink == true) {
  window.onload = () => {
    // Find target element position
    var element = document.querySelector(target);
    var elementPos = element.offsetTop;
    // Scroll to target on page
    window.scrollTo(0, elementPos);
  };
}