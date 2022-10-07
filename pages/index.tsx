import { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRobots, downloadRobotList } from "../store/actions/robot";
import { AppDispatch, AppState } from "../store/store";

import { Box, Typography, Button } from "@mui/material";
import LazyLoad from "react-lazyload";
import RobotCard from "../components/RobotCard";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { list, loading, error } = useSelector(
    (state: AppState) => state.robotState,
    shallowEqual
  );

  useEffect(() => {
    dispatch<any>(fetchRobots());
  }, [dispatch]);

  const StyledContainerBox = styled(Box)`
    padding: 30px;
  `;

  const StyledRobotsContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const StyledPageTitle = styled(Typography)`
    color: white;
  `;

  const StyledButtonContainer = styled(Box)`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  `;

  return (
    <StyledContainerBox>
      <StyledPageTitle gutterBottom variant="h1" align="center">
        Robot List
      </StyledPageTitle>
      <StyledButtonContainer>
        <Button
          onClick={() => dispatch<any>(downloadRobotList(list))}
          variant="contained"
          color="primary"
        >
          Download List
        </Button>
      </StyledButtonContainer>
      <StyledRobotsContainer>
        {list.map((item) => (
          <LazyLoad key={item.id} once>
            <RobotCard data={item} />
          </LazyLoad>
        ))}
      </StyledRobotsContainer>
    </StyledContainerBox>
  );
}
