"use client";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import bgHeroSection from "../../../assets/bgHeroSection.svg";
import curve1 from "../../../assets/curve1.svg";
import curve2 from "../../../assets/curve2.svg";
import circle from "../../../assets/circle.svg";
import meet from "../../../assets/meets.svg";
import intake from "../../../assets/intake.svg";
import ourTeam from "../../../assets/ourTeam.svg";
import deliver from "../../../assets/deliver.svg";
import analytics from "../../../assets/analytics.svg";
import relations from "../../../assets/relations.svg";
import Image from "next/image";
import { gradientStyle } from "@/app/styles";

import MeetClient from "../../../assets/project-steps/meet-client.png"
import Intake from "../../../assets/project-steps/intake.png"
import OurTeam from "../../../assets/project-steps/our-team.png"
import Deliver from "../../../assets/project-steps/deliver.png"
import RunningAnalytics from "../../../assets/project-steps/running-analytics.png"
import Relationship from "../../../assets/project-steps/long-term-relationships.png"
import BgEffect from "@/section/common/bgeffect";


const projectSteps = [
  {
    id: 1,
    leftImage: MeetClient,
    title: "Meet client",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve1,
  },
  {
    id: 2,
    leftImage: Intake,
    title: "Intake",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve2,
  },
  {
    id: 3,
    leftImage: OurTeam,
    title: "Our Team Is On It",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve1,
  },
  {
    id: 4,
    leftImage: Deliver,
    title: "Deliver",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve2,
  },
  {
    id: 5,
    leftImage: RunningAnalytics,
    title: "Running Analytics",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve1,
  },
  {
    id: 6,
    leftImage: Relationship,
    title: "Long Term Relationship",
    list: [
      "Kropreligt donera Kroprelig ",
      "Eurojålig hypobel nytinera Kroprelig",
      "Jåpyre padäpärat trafikmaktordning",
      "Väll nytinera nytinera",
    ],
    curvedLine: curve2,
  },
]


const ProjectSteps = (): JSX.Element => {
  return (
    <Box sx={{ padding: { xs: "50px 20px 0 20px", md: "80px 120px" } }}>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <Typography variant="h2">
            Our Project <span style={gradientStyle}>Steps</span>
          </Typography>
        </Grid>
        {projectSteps?.map((step, index) => {
          return (
            <Grid item container xs={12} key={step.id} spacing={3} marginBottom={{ xs: "40px", md: 0 }}>
              <Grid
                item
                xs={12}
                container
                flexDirection={(index + 1) % 2 === 0 ? "row-reverse" : "row"}
              >
                <Grid
                  xs={12}
                  md={6}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={step.leftImage}
                    alt={step.title}
                    style={{ zIndex: 99, width: index === 3 ? "50%" : "80%", height: "auto" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  p={2}
                  display={"flex"}
                  alignItems={(index + 1) % 2 === 0 ? "center" : "center"}
                  justifyContent={(index + 1) % 2 === 0 ? "center" : "center"}
                  flexDirection={"column"}
                >
                  <Box position="relative">
                    <Box
                      sx={{
                        display: "inline-flex",
                        padding: "16px",
                        flexDirection: " column",
                        justifyContent: " center",
                        alignItems: "center",
                        gap: "8px",
                        background:
                          "linear-gradient(90deg, #26ACE2 1.99%, #9E83BD 100%)",
                        borderRadius: "50%",
                        fontSize: "2rem",
                        color: "white",
                        height: { xs: "50px", md: "75px" },
                        width: { xs: "50px", md: "75px" },
                      }}
                    >
                      <Typography variant="h4">
                        {`0${index + 1}`}
                      </Typography>
                    </Box>
                    <Typography variant="h4" mt={2} mb={1}>
                      {step.title}
                    </Typography>
                    <List>
                      {step.list?.map((listSteps) => (
                        <ListItem key={listSteps} sx={{ pl: 0 }}>
                          <Image
                            src={circle}
                            alt={listSteps}
                            style={{ marginRight: "5px" }}
                          />{" "}
                          {listSteps}
                        </ListItem>
                      ))}
                    </List>
                    {(index + 1) % 2 === 0 ? (
                      <BgEffect left={-300} top={0} size="250px" />
                    ) : (
                      <BgEffect right={-300} top={0} size="250px" />
                    )}
                  </Box>
                </Grid>
              </Grid>
              {projectSteps.length - 1 !== index && (
                <Grid
                  xs={12}
                  display={{ xs: "none", md: "flex" }}
                  justifyContent={"center"}
                >
                  <Box marginTop="-60px" marginBottom="-60px">
                    <Image src={step.curvedLine} alt={step.curvedLine} />
                  </Box>
                </Grid>
              )}
            </Grid>
          )
        }
        )}
      </Grid>
    </Box>
  );
};

export default ProjectSteps;
