import {
  Avatar,
  Box,
  Checkbox,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import chartImg from "../Dashboard/pie-chart.png";
import WORDS from "../assets/themes/words/words";
import THEMES from "../assets/themes/themes";
import Dropdown from "../Components/DropdownMenuBar";
import DropdownMenuBar from "../Components/DropdownMenuBar";
const DashboardContent = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, backgroundColor: "#f0f0f1" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            opacity: "0.8",
            fontSize: "1.1rem",
            fontFamily: "Montserrat, sans-serif",
            py: 1,
            ml: 8,
          }}
        >
          {WORDS.dashboardDetails}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mr: 11 }}>
          <Typography fontWeight={"bold"}>{WORDS.dashboard}</Typography>
          <ArrowForwardIosIcon fontSize="'small'" sx={{ mx: 2 }} />
          <Typography> {WORDS.dashboardDetails}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        {/* my portfoilio */}

        <Box sx={{ width: "20%", ml: 8 }}>
          <Paper sx={{ px: 2, pb: 2, width: "97%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: THEMES.fontFamily.regular,
                  fontSize: THEMES.fonts.small,
                  py: 1,
                  ml: 1,
                }}
              >
                {WORDS.MYPortfolio}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox size="small" />
                <Typography
                  sx={{
                    fontFamily: THEMES.fontFamily.regular,
                    fontSize: ".81rem",
                    fontWeight: "600",
                    ml: 0,
                    letterSpacing: "-0.01rem",
                  }}
                >
                  {WORDS.ShowReal}
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={chartImg} alt="" style={{ width: "100%" }} />
            </Box>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>R</Avatar>
                <Typography>{WORDS.Roku}</Typography>
              </div>

              <div>
                <Typography sx={{ color: "red" }}>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>R</Avatar>
                <Typography>{WORDS.Roku}</Typography>
              </div>

              <div>
                <Typography sx={{ color: "red" }}>-0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1, backgroundColor: "orange" }}>E</Avatar>
                <Typography>{WORDS.Etsy}</Typography>
              </div>

              <div>
                <Typography sx={{ color: "#00c853" }}>0.077%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1, backgroundColor: "orange" }}>E</Avatar>
                <Typography>{WORDS.Etsy}</Typography>
              </div>

              <div>
                <Typography sx={{ color: "#00c853" }}>0.099%</Typography>
              </div>
            </div>

            <div className="list-container">
              <div className="inside-list-container">
                <Avatar sx={{ m: 1 }}>C</Avatar>
                <Typography>{WORDS.Cnq}</Typography>
              </div>

              <div>
                <Typography sx={{ color: "#00c853" }}>0.097%</Typography>
              </div>
            </div>
          </Paper>
        </Box>

        {/* change box */}

        <Box sx={{ display: "flex", width: "75%" }}>
          <Paper sx={{ ml: 6, width: "21%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "56%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  {WORDS.totalChange}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: THEMES.fontFamily.regular,
                    fontWeight: "bold",
                  }}
                >
                  $478,416.55
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "21%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "56%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {WORDS.yearChange}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  $478,416.55
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "21%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "52%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  {WORDS.monthChange}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  -$3.22
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ ml: 3, width: "21%", height: "13%", display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "45%",
                ml: 3,
              }}
            >
              <AttachMoneyIcon
                sx={{
                  width: "24px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: "#3a7bd5",
                  color: "white",
                  boxShadow: "0px 0px 0px 10px #c1aeae33",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: "500",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  {WORDS.dayChange}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: THEMES.fontFamily.regular,
                  }}
                >
                  -$3.22
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardContent;
