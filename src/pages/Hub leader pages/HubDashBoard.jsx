import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  Stack,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { InfoCard } from "../../components";
import HubLeadNavBar from "./components/HubLeadNavBar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/user-provider";
import { useEffect } from "react";
import BarChart from "../Admin pages/components/BarChart";
import PieChart from "../Admin pages/components/PieChart";

const HubStatsPage = () => {
  const navigate = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

//   const { user } = useUser();
//   useEffect(() => {
//     console.log(user);
//     if (!user) {
//       navigate("/login");
//     }
//   }, []);

  return (
    <StyledHubStatsPage direction="row">
      <HubLeadNavBar />

      <Box sx={{ flexGrow: 1 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/hubLeader/statistics">
            Dashboard
          </Link>
          <Typography color="text.primary">Statistics</Typography>
        </Breadcrumbs>
        <Grid container spacing={2} px={2} mt={2}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <InfoCard
              imageURL={
                "https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg"
              }
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <InfoCard title={"Số đơn trong tháng này"} content={"1234"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <InfoCard title={"Tổng số điểm giao dịch"} content={"345"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <InfoCard title={"Tổng số điểm tập kết"} content={"234"} />
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Item>
              <BarChart sx={{ height: "100%", width: "100%" }} />
            </Item>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Item>
              <Typography>Số đơn trong tháng này</Typography>
              <PieChart />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyledHubStatsPage>
  );
};

const StyledHubStatsPage = styled(Stack)(({ theme }) => ({
  background: "#ededed",
  ".right_section": {
    padding: 32,
    height: "100%",
    overflowY: "auto",
  },
}));

export default HubStatsPage;
