import { styled } from "@mui/styles";

export const NormalText = styled("div")({
  color: "white",
  fontFamily: "nanumBarun",
  fontSize: "1.2rem",
  textAlign: "center",
});
export const Title = styled("div")(({ theme }) => ({
  color: theme.palette.cyphers_y,
  fontSize: "2rem",
  textAlign: "center",
  fontFamily: "jua",
  "& .C": {
    color: theme.palette.cyphers,
  },
  "& .White": {
    fontFamily: "jua",
    color: "white",
  },
}));