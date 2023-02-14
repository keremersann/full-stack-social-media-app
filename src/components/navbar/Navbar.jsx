import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>keremsocial</span>
        <HomeOutlinedIcon />
        <NightlightOutlinedIcon />
        <GridViewOutlinedIcon />

        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..."/>
        </div>
        
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <span>Kerem Ersan</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar