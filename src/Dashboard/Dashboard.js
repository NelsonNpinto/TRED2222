import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Badge, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SearchIcon from "@mui/icons-material/Search";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WORDS   from '../assets/themes/words/words';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "45px", backgroundColor: "white" }}
      >
        <Toolbar>
          <Box ml={9}>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <DashboardIcon sx={{ fontSize: "1.3rem", mr: 1 }} />
              <Box>
                <NavLink
                  className={"active"}
                  to="/dashboard"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  <Typography color="black" fontWeight={600}>
                    {WORDS.dashboard}
                  </Typography>
                </NavLink>
              </Box>
            </IconButton>
            <IconButton
              onClick={() => navigate("/my-trades")}
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <ShowChartIcon sx={{ fontSize: "1.3rem", mr: 1 }} />
              <Box>
                <Typography color="black" fontWeight={600}>
                  {WORDS.MyTrades}
                </Typography>
              </Box>
            </IconButton>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 1 }}
            >
              <SearchIcon sx={{ fontSize: "1.3rem", mr: 1 }} />
              <Box>
                <Typography color="black" fontWeight={600}>
                  {WORDS.research}
                </Typography>
              </Box>
              <KeyboardArrowDownIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <CandlestickChartOutlinedIcon
                sx={{ fontSize: "1.3rem", mr: 1 }}
              />
              <Box>
                <Typography color="black" fontWeight={600}>
                  {WORDS.charts}
                </Typography>
              </Box>
            </IconButton>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <SummarizeOutlinedIcon sx={{ fontSize: "1.3rem", mr: 1 }} />
              <Box>
                <Typography color="black" fontWeight={600}>
                  {WORDS.reports}
                </Typography>
              </Box>
            </IconButton>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <LayersOutlinedIcon sx={{ fontSize: "1.3rem", mr: 1 }} />
              <Box>
                <Typography color="black" fontWeight={600}>
                  {WORDS.resources}
                </Typography>
              </Box>
            </IconButton>
            <IconButton
              size="small"
              aria-haspopup="true"
              color="black"
              sx={{ mb: 2, mr: 3 }}
            >
              <Badge badgeContent={"99+"} color="error">
                <AccountCircleOutlinedIcon sx={{ fontSize: "1.3rem", mr: 1 }} />

                <Box>
                  <Typography color="black" fontWeight={600}>
                    {WORDS.admin}
                  </Typography>
                </Box>
              </Badge>
              <KeyboardArrowDownIcon sx={{ p: 1 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Dashboard;
