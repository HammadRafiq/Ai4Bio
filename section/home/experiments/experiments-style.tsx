export const styles = {
  sectionTitle: () => ({
    textAlign: "center",
    width: "100%",
    margin: "30px auto",
    fontSize: "34px",
    fontWeight: "700",
  }),
  cardStyle: () => ({
    fontWeight: "500",
    borderRadius: "16px",
    border: "1px solid var(--Blue, #26ACE2)",
    background:
      "linear-gradient(307deg, rgba(38, 172, 226, 0.09) 12.36%, rgba(38, 172, 226, 0.05) 113.97%)",
    "& h5": {
      fontSize: "40px",
    },
    "& h4": {
      color: "#26ACE2",
      fontSize: "35px",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "400",
    },
    "& Button": {
      color: "#000000",
      textTransform: "capitalize",
    },
  }),
};
