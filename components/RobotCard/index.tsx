import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Robot } from "../../store/reducers/robot";

import Image from "next/image";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Grid,
  Box,
} from "@mui/material";
import MaleImage from "../../assets/male.png";
import FemaleImage from "../../assets/female.png";

interface Props {
  data: Robot;
}

export default function RobotCard({ data }: Props) {
  const router = useRouter();

  const handleRedirect = (id: string) => {
    router.push(`/details/${id}`);
  };

  const StyledImageContainer = styled(Box)`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  `;

  const StyledCard = styled(Card)`
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 1px -1px 5px 6px rgba(177, 252, 56, 0.75);
      -webkit-box-shadow: 1px -1px 5px 6px rgba(177, 252, 56, 0.75);
      -moz-box-shadow: 1px -1px 5px 6px rgba(177, 252, 56, 0.75);
      transition: 0.5s;
    }
  `;

  return (
    <StyledCard
      onClick={() => handleRedirect(data.id)}
      sx={{ width: 345, mb: 3 }}
    >
      <CardMedia component="img" height="140" image={data.image} alt="robot" />
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={7}>
            <Typography variant="h5" component="div" color="primary">
              {data.username}
            </Typography>
            <Divider />
            <Typography gutterBottom variant="caption" color="text.secondary">
              username
            </Typography>

            <Typography
              sx={{ maxWidth: 187 }}
              noWrap
              variant="body1"
              component="div"
              color="primary"
              title={data.email}
            >
              {data.email}
            </Typography>
            <Divider />
            <Typography gutterBottom variant="caption" color="text.secondary">
              email
            </Typography>

            <Typography variant="body1" component="div" color="primary">
              {data.macAddress}
            </Typography>
            <Divider />
            <Typography gutterBottom variant="caption" color="text.secondary">
              mac address
            </Typography>
          </Grid>
          <Grid xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid xs={4}>
            <StyledImageContainer>
              <Image
                src={data.gender === "male" ? MaleImage : FemaleImage}
                alt="gender"
                width="100px"
                height="100px"
                loading="lazy"
              />
            </StyledImageContainer>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleRedirect(data.id)} size="small">
          Details
        </Button>
      </CardActions>
    </StyledCard>
  );
}
