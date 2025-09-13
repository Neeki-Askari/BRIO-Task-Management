import React, {useState, type ReactNode } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ActiveTabContext } from "./contexts";

export type LinkButton = {
  name: string;
  icon: React.ReactNode;
  endIcon?: React.ReactNode;
  active: boolean;
};

const initialButtons: LinkButton[] = [
  { name: "Home", icon: <HomeOutlinedIcon />, active: false },
  { name: "Discover", icon: <LanguageOutlinedIcon />, active: false },
  { name: "History", icon: <RestorePageOutlinedIcon />, active: false },
  {
    name: "My Workspace",
    icon: <ImportContactsOutlinedIcon />,
    endIcon: (
      <KeyboardArrowDownIcon
        sx={{ marginLeft: "10px", height: "25px", width: "auto" }}
      />
    ),
    active: false,
  },
  { name: "Brio Auto", icon: <RestorePageOutlinedIcon />, active: true },
];


export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [linkNavigationButtons, setLinkNavigationButtons] = useState<LinkButton[]>(initialButtons);

  const setActiveTab = (name: string) => {
    setLinkNavigationButtons((prev) =>
      prev.map((btn) => ({
        ...btn,
        active: btn.name === name,
      }))
    );
  };

  return (
    <ActiveTabContext.Provider value={{ linkNavigationButtons, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};
