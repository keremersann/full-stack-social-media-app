import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({ props }) => {
  console.log(props);
  const [commentsOpen, setCommentsOpen] = useState(false);

  // TEMPORARY
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="header">
          <div className="userInfo">
            <img src={props.profilePic} alt="" />
            <div className="userText">
              <Link
                to={`profile/${props.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{props.name}</span>
              </Link>
              <span className="shareTime">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{props.desc}</p>
          {props.img && <img src={props.img} alt="" />}
        </div>
        <div className="interaction">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>16 Likes</span>
          </div>
          <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
            <ChatBubbleOutlineOutlinedIcon />
            <span>3 Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
        {commentsOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
