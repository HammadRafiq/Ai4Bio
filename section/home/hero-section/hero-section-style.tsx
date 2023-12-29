export const styles = {
  sectionTitle: () => ({
    paddingLeft: {
      xs: "20px",
      md: "120px"
    },
    position: "relative",
    fontWeight: "700",
    textTransform: "capitalize",
    "& h1": {
      // fontSize: "4.5rem",
      // fontWeight: "700",
      // width: "100%",
      // maxWidth: "900px",
      "& span": {
        backgroundImage:
          "linear-gradient(307deg, rgba(38, 172, 226, 0.09) 12.36%, rgba(38, 172, 226, 0.05) 113.97%)",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      },
    },
    "& p": {
      marginY: "20px",
    },
  }),
  heroImage: () => ({
    left: "60%",
    right: "40%",
    top: "0",
    bottom: "90%",
    position: "absolute",
  }),
  bgHeroImage: () => ({
    left: "-150px",
    right: "0",
    top: "-90px",
    bottom: "90%",
    position: "absolute",
  }),
};
