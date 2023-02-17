import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ props }) => {
  console.log(props);

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
                to={`profiles/${props.userId}`}
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
            <span>Likes</span>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <span>Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
