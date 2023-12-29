import bgContact from "../../../assets/bgContact2.png";

export const styles = {
  contactSectionStyle: () => ({
    textAlign: "center",
    backgroundImage: `url(${bgContact.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    py: {
      xs: "50px",
      md: "80px"
    },
    px: {
      xs: "20px",
      md: "120px"
    }
  }),
};
