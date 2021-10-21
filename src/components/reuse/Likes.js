import React from 'react';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function Likes({likes,user}) {

    if (likes?.length > 0) {
      return likes.find((like) => like === (user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes?.length > 2 ? `You and ${likes?.length - 1} others` : `${likes?.length} like${likes?.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes?.length} {likes?.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    // return(
    //     <h1>hey</h1>
    // )
}

export default Likes;