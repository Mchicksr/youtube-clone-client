import {useEffect,useState} from 'react'
import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import {Switch, Route} from "react-router-dom"
import CreateVideo from './components/reuse/CreateVideo';
import EditVideo from './components/reuse/EditVideo';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'
import RecommendedVideos2 from './components/reuse/RecommendedVideos2';
import Auth from './components/Auth/Auth'
import SearchPage2 from './components/reuse/SearchPage2';
import VideoPlayer from './components/reuse/VideoPlayer';
import Profile from './components/reuse/headerOptions/Profile';
function App() {
  const dispatch = useDispatch()
  const [currentId,setCurrentId] = useState(null)
  const [videoId,setVideoId] = useState("")
  useEffect(()=>{
    dispatch(getPosts())
  },[])
  console.log('App:VideoId',videoId)

  return (
    <div className="App">
      {/* <Router> */}
      <Header />

        <Switch>
            <Route path={`/play/:videoId`} render={() => <VideoPlayer videoId2={'videoId'}/>}/>
            <Route path='/profile' component={Profile} />
            {/* <Route path={`/play`} render={() => <VideoPlayer videoId={videoId}/>}/> */}
            <Route path="/signin" component={Auth}/>
            <Route path="/create" render={() => <CreateVideo currentId={currentId} setCurrentId={setCurrentId}/> }/>
            <Route path="/edit" render={() => <EditVideo currentId={currentId} setCurrentId={setCurrentId}/> }/>
            <Route path="/search/:searchTerm">
            <div className="app__page">
            <SideBar />
            {/* <SearchPage/> */}
            <SearchPage2 videoId={videoId} setVideoId={setVideoId}/>
            </div>
            </Route>
            <Route path="/">        
            <div className="app__page">
              <SideBar />
              {/* <RecommendedVideos /> */}
              <RecommendedVideos2 currentId={currentId} setCurrentId={setCurrentId} setVideoId={setVideoId} videoId={videoId}/>
            </div>
            </Route>
        </Switch>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
