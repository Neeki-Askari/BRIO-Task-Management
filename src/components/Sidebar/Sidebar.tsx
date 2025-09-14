import "./sidebar.scss";
import briologo from "../../assets/brio_health_logo.svg";
import avatar from "../../assets/avatar.jpg";
import { Button } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useContext } from "react";
import {
  ActiveTabContext,
  type ActiveTabContextType,
} from "../../ context/contexts";

const Sidebar: React.FC = () => {
  const { linkNavigationButtons } = useContext(
    ActiveTabContext
  ) as ActiveTabContextType;

  return (
    <div className="sidebar-outer-container">
      <img src={briologo} alt="Brio Logo" className="side-bar-logo" />
      <Button
        id="ask-new"
        variant="contained"
        startIcon={<AddBoxOutlinedIcon />}
      >
        Ask A New Question
      </Button>
      <div className="sidebar-button-group">
        {linkNavigationButtons.map((button) => (
          <Button
            className={`sidebar-link-button active-${button.active}`}
            key={button.name}
            startIcon={button.icon}
            endIcon={button.endIcon ? button.endIcon : null}
          >
            {button.name}
          </Button>
        ))}
      </div>
      <div className="nav-footer">
        <div className="profile-container">
          <img src={avatar} alt="Profile" className="profile-pic" />
          <div className="user-info">
            <p className="user-name">John Smith</p>
            <p className="user-role">Owner/Admin</p>
          </div>
        </div>
        <p className="version">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
