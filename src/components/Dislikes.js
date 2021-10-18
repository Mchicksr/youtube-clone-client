import React from 'react';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
function Dislikes({dislikes,user}) {
    if (dislikes?.length > 0) {
        return dislikes.find((dislike) => dislike === (user?.result?._id))
          ? (
            <><ThumbDownAltIcon fontSize="small" />&nbsp;{dislikes?.length > 2 ? `You and ${dislikes?.length - 1} others` : `${dislikes?.length} dislike${dislikes?.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbDownAltOutlined fontSize="small" />&nbsp;{dislikes?.length} {dislikes?.length === 1 ? 'disLike' : 'disLikes'}</>
          );
      }
  
      return <><ThumbDownAltOutlined fontSize="small" />&nbsp;Dislike</>;
   
}

export default Dislikes;