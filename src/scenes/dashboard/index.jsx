import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import TrafficIcon from "@mui/icons-material/Traffic";
import "./dashboard.css";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="headerContainer">
      {/* HEADER */}
      <Box className="header">
        <Header title="داشبورد" />

        <Box>
          <Button
            className="headerButton"
            sx={{
              backgroundColor: colors.blueAccent[1000],
              color: colors.grey[100],
            }}
          >
            <DownloadOutlinedIcon className="headerButtonIcon" />
            دانلود گزارش
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="2fr 1fr" /* Two equal-width columns */
        gridAutoRows="140px"
        sx={{
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr", // Single column for screens smaller than 768px
          },
        }}
        gap="20px 0px"
      >
        <Box
          gridColumn="span 1"
          gridRow="span 2"
          minWidth="600px"
          backgroundColor={colors.primary[1000]}
          overflow="auto"
          marginLeft="10px"
        >
          <Box
            gridColumn="span 1"
            gridRow="span 2"
            backgroundColor={colors.primary[1000]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              overflow="auto"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                تیکت ها اخیر
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                overflow="auto"
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.blueAccent[1000]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.blueAccent[1000]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.issue}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="chartContainer" backgroundColor={colors.primary[1000]}>
          <Typography
            variant="h5"
            className="chartText"
            marginTop="10px"
            marginRight="10px"
          >
            نمودار وضعیت تیکت ها
          </Typography>
          <Box
            display="grid"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            overflow="auto"
            flex="1"
          >
            <div>
              <div  marginRight= "100px" >
                <ProgressCircle size="125"  />
              </div>
              <div>
                <Typography
                  variant="h5"
                  color={colors.blueAccent[1000]}
                  textAlign="center"
                >
                  تیکت بررسی شده : ۳۰
                </Typography>
                <Typography sx={{ direction: "rtl", textAlign: "center" }}>
                  تیکت بررسی شده : ۱۰
                </Typography>
              </div>
            </div>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[1000]}
          overflow="auto"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            تعداد تیکت ها
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
