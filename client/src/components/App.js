// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Blog from './user/posts'
import Home from './user/home'
import SingleBlog from './user/SingleBlog'
import Footer from './user/footer'
import Header from './user/header'
import Register from './user/pages/register'
import Login from './user/pages/login'

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Home} />
            <Route path="/single-post/:postId" exact component={SingleBlog} /> 
            <Route path="/blog" exact component={Blog} />
          </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
