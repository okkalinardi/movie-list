import styled from "styled-components";
import { Card, Box, Typography } from "@mui/material";

export default function About() {
  const contents = [
    "Bzzzt... Bzzzt... Bzzzt...",
    "Welcome to the robot list Bzzzt...",
    "This is where you can find the list of all available robots Bzzzt...",
    "Just click on one robot data to see the mac address of the robot more clearly Bzzzt...",
    "Hope you can find the robot you are looking for Bzzzt...",
    "Bzzzt... Bzzzt... Bzzzt....",
  ];
  const StyledContainerBox = styled(Box)`
    padding: 30px;
  `;

  const StyledCard = styled(Card)`
    width: 75%;
    margin: 0 auto;
    padding: 30px;
  `;

  return (
    <StyledContainerBox>
      <StyledCard>
        <Typography variant="h1" align="center" component="div" color="primary">
          About
        </Typography>
        {contents.map((content) => (
          <Typography
            key={content}
            variant="body1"
            component="div"
            color="secondary"
            align="center"
          >
            {content}
          </Typography>
        ))}
      </StyledCard>
    </StyledContainerBox>
  );
}
