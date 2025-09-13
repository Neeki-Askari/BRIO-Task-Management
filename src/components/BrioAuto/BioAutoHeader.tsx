import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const BrioAutoHeader: React.FC = () => {
  return (
    <div className="brio-auto-header">
      <div className="header-title">
        <p>BRIO Auto</p>
        <KeyboardArrowRightOutlinedIcon />
      </div>

      <Button
        className="share-button"
        variant="outlined"
        size="small"
        startIcon={<ShareOutlinedIcon />}
      >
        Share
      </Button>
    </div>
  );
};

export default BrioAutoHeader;
