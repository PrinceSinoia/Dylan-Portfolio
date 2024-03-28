// import logo from './logo.svg';
import './index.css'
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import { BrowserRouter as Router, Routes, Route,Link, NavLink } from 'react-router-dom';
// import Cv from './components/Cv'
// import ImageScale from './components/ImageScale'
import Header from './components/Header';
import About from './components/About';
import MyToolKit from './components/MyToolKit';
import RectangleDiv from './components/RectangleDiv';
import Footer from './components/Footer';
import MyWork from './components/MyWork';
import Nav from './components/Nav';
// import PostList from './components/PostList';
// import Nav from './components/ NavigationBar'
// import Shoot from './components/Shoot';
// import Scroll from './components/Scroll';
function App() {
  return (
  //  <ApolloProvider client={client}>
    <>
    {/* <PostList/> */}
    <Nav/>
     <Header/> 
     <About/>
     <MyToolKit/>
     <MyWork/>
     <RectangleDiv/>
     <Footer/>
     </>

  );
}

export default App;
