import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import TrafficIcon from "@mui/icons-material/Traffic";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="30px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="داشبورد" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              
            }}
          >
            <DownloadOutlinedIcon sx={{ ml: "10px" }} />
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
                    color={colors.greenAccent[500]}
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
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.issue}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gridColumn="span 1"
          gridRow="span 2"
          alignItems="right"
          backgroundColor={colors.primary[1000]} //{"#f4f3ee"}
          overflow="auto"
        >
          <Typography variant="h5" fontWeight="600">
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
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                textAlign="center"
              >
                تیکت بررسی شده : ۴۰
              </Typography>
              <Typography sx={{ direction: "rtl", textAlign: "center" }}>
                تیکت بررسی شده : ۱۰
              </Typography>
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

// {/*

//       {/* GRID & CHARTS */}
//       {/*first grid*/}
//       <Box
//         display="grid"
//         gridTemplateColumns="1fr 1fr" /* Two equal-width columns */
//         gridAutoRows="140px"
//         sx={{
//           "@media (max-width: 768px)": {
//             gridTemplateColumns: "1fr", // Single column for screens smaller than 768px
//           },
//         }}
//         gap="20px"
//       >
//         <Box
//           gridColumn="span 1"
//           // gridRows="span 1"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="تیکت های دریافتی"
//             progress="0.80"
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 6"
//           gridRow="span 2"
//           display="flex"
//           backgroundColor={colors.primary[1000]}
//           overflow="auto"
//         >
//           <Box
//             gridColumn="span 1" // Span 1 column
//             gridRow="span 2" // Span 2 rows
//             backgroundColor={colors.primary[1000]}
//             overflow="auto"
//           >
//             {/* Content for the first box */}
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               colors={colors.grey[100]}
//               overflow="auto"
//             >
//               <Typography
//                 color={colors.grey[100]}
//                 variant="h5"
//                 fontWeight="600"
//               >
//                 تیکت ها اخیر
//               </Typography>
//             </Box>
//             {mockTransactions.map((transaction, i) => (
//               <Box
//                 key={`${transaction.txId}-${i}`}
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 borderBottom={`4px solid ${colors.primary[500]}`}
//                 overflow="auto"
//                 p="15px"
//               >
//                 <Box>
//                   <Typography
//                     color={colors.greenAccent[500]}
//                     variant="h5"
//                     fontWeight="600"
//                   >
//                     {transaction.txId}
//                   </Typography>
//                   <Typography color={colors.grey[100]}>
//                     {transaction.user}
//                   </Typography>
//                 </Box>
//                 <Box color={colors.grey[100]}>{transaction.date}</Box>
//                 <Box
//                   backgroundColor={colors.greenAccent[500]}
//                   p="5px 10px"
//                   borderRadius="4px"
//                 >
//                   {transaction.issue}
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//         {/* BOX 2 */}
//         <Box
//           display="flex"
//           gridColumn="span 2"
//           gridRow="span 2"
//           alignItems="center"
//           justifyContent="center"
//           backgroundColor={colors.primary[1000]} //{"#f4f3ee"}
//           overflow="auto"
//         >
//           <Typography variant="h5" fontWeight="600" mt={"1%"} mr="1%">
//             نمودار وضعیت تیکت ها
//           </Typography>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             alignContent="center"
//             justifyContent="center"
//             overflow="auto"
//             mt={"3%"}
//           >
//             <ProgressCircle size="125" />
//             <Typography
//               variant="h5"
//               color={colors.greenAccent[500]}
//               textAlign="right"
//             >
//               تیکت بررسی شده : ۴۰
//             </Typography>
//             <Typography sx={{ direction: "rtl", textAlign: "right" }}>
//               تیکت بررسی شده : ۱۰
//             </Typography>
//           </Box>
//         </Box>
//         {/* BOX 3 */}
//         <Box
//           gridColumn="span 6"
//           gridRow="span 2"
//           backgroundColor={colors.primary[1000]}
//           overflow="auto"
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ padding: "30px 30px 0 30px" }}
//           >
//             تعداد تیکت ها
//           </Typography>
//           <Box height="250px" mt="-20px">
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard; */}
