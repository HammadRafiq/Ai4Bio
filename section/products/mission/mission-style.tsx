export const styles = {
  missionCardStyle: () => ({
    borderRadius: "15px",
    background: `
      radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 13px, transparent 13px) 0% 0%/15px 15px no-repeat,
      radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 13px, transparent 13px) 100% 0%/15px 15px no-repeat,
      radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 13px, transparent 13px) 0% 100%/15px 15px no-repeat,
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 13px, transparent 13px) 100% 100%/15px 15px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 4px) calc(100% - 30px) no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 30px) calc(100% - 4px) no-repeat,
      linear-gradient(90deg, #26ace2 48%, #9e83bd 74%)
    `,
  }),
};
