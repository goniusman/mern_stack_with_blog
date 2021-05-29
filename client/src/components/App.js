// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./user/posts";
import Admin from "./admin";
// import Profile from "./user/profile";
import Home from "./user/home";
import SingleBlog from "./user/SingleBlog";
import Footer from "./user/footer";
import Header from "./user/header";
import Register from "./user/pages/register";
import Login from "./user/pages/login";
import NoMatch from "./user/pages/nomatch";
const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/login", exact: true, component: Login },
  { path: "/register", exact: true, component: Register },
  { path: "/single-post/:postId", exact: true, component: SingleBlog },
  { path: "/blog", exact: true, component: Blog },
  // { path: "/profile", exact: true, component: Profile },
  // { path: "/admin", exact: true, component: Admin },
  { path: "*", exact: true, component: NoMatch },
];
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/single-post/:postId" exact component={SingleBlog} />
        <Route path="/blog" exact component={Blog} />
        <Route path="*" component={NoMatch} /> */}
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
export default App;
