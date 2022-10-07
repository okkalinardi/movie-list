import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRobotDetail } from "../../store/actions/robot";
import { AppDispatch, AppState } from "../../store/store";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

import {
  Box,
  Card,
  Grid,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";

export default function Details() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const { data, loading, error } = useSelector(
    (state: AppState) => state.robotState,
    shallowEqual
  );
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch<any>(fetchRobotDetail(id));
    }
  }, [dispatch, id]);

  const handlePrint = () => {
    window.print();
  };

  const StyledContainerBox = styled(Box)`
    padding: 30px;
  `;

  const StyledCard = styled(Card)`
    width: 500px;
    margin: 0 auto;
  `;

  const StyledDetailCard = styled(Card)`
    width: 750px;
    padding: 20px;
    margin: 0 auto;
    margin-top: -3px;
  `;

  const StyledCardActions = styled(CardActions)`
    justify-content: center;
    margin-top: 4px;
  `;

  return (
    !loading && (
      <StyledContainerBox>
        <StyledCard>
          <Image
            src={data?.image}
            alt="robot"
            width="500px"
            height="400px"
            loading="lazy"
          />
        </StyledCard>
        <StyledDetailCard>
          <Typography
            variant="h3"
            align="center"
            component="div"
            color="primary"
            mb={4}
          >
            {data?.username}
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={6} px={3}>
              <Typography variant="body1" component="div" color="secondary">
                Email
              </Typography>
              <Divider />
              <Typography variant="h5" component="div" color="secondary">
                {data?.email}
              </Typography>
            </Grid>
            <Grid xs={6} px={3}>
              <Typography
                variant="body1"
                align="right"
                component="div"
                color="secondary"
              >
                Gender
              </Typography>
              <Divider />
              <Typography
                variant="h5"
                align="right"
                component="div"
                color="secondary"
              >
                {data?.gender}
              </Typography>
            </Grid>
            <Grid xs={12} px={3} mt={3}>
              <Typography
                variant="body1"
                align="center"
                component="div"
                color="secondary"
              >
                Mac Address
              </Typography>
              <Divider />
              <Typography
                variant="h5"
                align="center"
                component="div"
                color="secondary"
              >
                {data?.macAddress}
              </Typography>
            </Grid>
          </Grid>
          <StyledCardActions>
            <Button onClick={handlePrint} variant="contained" color="primary">
              print
            </Button>
          </StyledCardActions>
        </StyledDetailCard>
      </StyledContainerBox>
    )
  );
}
