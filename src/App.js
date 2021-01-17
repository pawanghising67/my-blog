import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import './App.css';
import ArticlePage from './pages/ArticlePage';


function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/article-list" component={ArticleList} />
                <Route path="/article" component={ArticlePage} />





            </div>
            </Router>
  
  );
}

export default App;
