import React from 'react';
import './SideBar.css'
import SideBarRow from './reuse/SideBarRow'
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeSharpIcon} title={'Home'}/>
            <SideBarRow Icon={WhatshotSharpIcon} title={'Trending'}/>
            <SideBarRow Icon={SubscriptionsSharpIcon} title={'Subscription'}/>
            <hr />
            <SideBarRow Icon={VideoLibrarySharpIcon} title={"Library"}/>
            <SideBarRow Icon={HistorySharpIcon} title={"History"}/>
             <SideBarRow Icon={OndemandVideoSharpIcon} title={"Your videos"}/>
            <SideBarRow Icon={WatchLaterSharpIcon} title={"Watch Later"}/>
            <SideBarRow Icon={ThumbUpAltSharpIcon} title={"Liked videos"}/>
            <SideBarRow Icon={ExpandMoreSharpIcon} title={"Show more"}/>
            <hr />
        </div>
    );
};

export default SideBar;