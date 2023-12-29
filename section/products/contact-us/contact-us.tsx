"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useForm, SubmitHandler } from "react-hook-form";
import { styles } from "./contact.styles";
import bgContact from "../../../assets/bgContact2.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


  return (
    <Grid
      sx={{ padding: { xs: "50px 20px 50px 20px", md: "80px 0 80px 0" }, background: "#051623", backgroundImage: `url(${bgContact.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
      container
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Grid item xs={12} textAlign={"center"} sx={{ color: "white" }}>
        <Typography variant="h2" mt={2}>
          Have a Query? Contact Us
        </Typography>
        <Box display="flex" justifyContent="center">
          <Typography variant="body1" mt={2} maxWidth="500px">
            Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        mt={6}
        xs={12}
        md={7}
        container
        sx={{
          borderRadius: "24px",
          background: "#FFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6} p={4}>
          <Typography variant="h4">Contact Us</Typography>
          <Typography variant="body1" mt={2} mb={4}>
            Lörem ipsum dongen fån i groupie bivibelt. Rurönysat mikroling om
            mikal.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2,
            }}
          >
            <LocalPhoneIcon />
            <Typography variant="body1" ml={1}>
              123 456 789
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2,
            }}
          >
            <MailOutlineIcon />
            <Typography variant="body1" ml={1}>
              info@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mt: 2,
            }}
          >
            <PlaceOutlinedIcon />
            <Typography variant="body1" ml={1}>
              600 Congress Ave, Floor 14 Texas 45678
            </Typography>
          </Box>

          <Box mt={4}>
            <iframe
              width="100%"
              height="200"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              scrolling="no"
              style={{ borderRadius: "10px", border: "none" }}
            ></iframe>
            <br />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          p={4}
          sx={{
            borderRadius: "20px",
            background: "linear-gradient(90deg, #26ACE2 1.99%, #9E83BD 100%)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" mb={1}>Full Name</Typography>
            <input
              style={styles}
              {...register("firstName")}
              placeholder="Enter your name"
            />

            <Typography variant="h6" mt={3} mb={1}>Email Address</Typography>
            <input
              style={{ ...styles }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailValidationPattern,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <Typography variant="h6" mt={3} mb={1}>Message</Typography>
            <textarea
              style={{ ...styles, height: "200px" }}
              {...register("message")}
              placeholder="Type your message..."
            />
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "black",
                  borderRadius: "24px",
                  p: 1,
                  color: "white",
                  width: "140px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
