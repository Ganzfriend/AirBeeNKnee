import { fade } from "@material-ui/core/styles";

const styles = (theme) => ({
  appBody: {
    fontFamily: "Airbnb Cereal App Light",
    display: "flex",
    flexDirection: "column",
    // maxWidth: "80vw",
  },
  topBarGrow: {
    flexGrow: 1,
  },
  topBarmenuButton: {
    marginRight: theme.spacing(2),
  },
  topBarTitle: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  topBarSearch: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  topBarSearchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topBarInputRoot: {
    color: "inherit",
  },
  topBarInputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  topBarSectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  topBarSectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // marqueeApp: {
  //   width: "80vw",
  //   height: "80vh",
  // },
  // marqueeSubmodulesDiv: {
  //   width: 600,
  // },
  photoSection: {
    position: "relative",
  },
  photoBox: {
    display: "flex",
    flexDirection: "rows",
    width: "100%",
    // gridTemplateRows: "1fr 1fr",
    // maxWidth: 600,
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    // height: "auto",
    // width: "100%",
    // gridTemplateColumns: "250px 250px 250px 250px",
    // gridTemplateRows: "250px 250px",
    // width: "100vw",
    // height: "100vh",
  },
  photoItem: {
    margin: "2.5px",
    height: 200,
    // width: 240,
    width: "20vw",
    objectFit: "cover",
    borderRadius: 3,
    // width: "50%",
    // height: "50%",
    // width: "auto",
    // width: 274,
    // height: 240,
  },
  // marqueeImage: {
  //   maxWidth: "100vw",
  //   // maxWidth: "100%",
  //   // objectFit: "cover",
  // },
  mainPhotoItem: {
    // gridColumnStart: 1,
    // gridColumnEnd: 3,
    // gridRowStart: 1,
    // gridRowEnd: 2,
    margin: 5,
    // width: "60vw",
    // height: "60vh",
    height: 410,
    // height: "auto",
    width: "50%",
    // width: 564,
    // width: 490,
    // height: 490,
    borderRadius: "10px 0 0 10px",
    objectFit: "cover",
  },
  photoButton: {
    position: "absolute",
    top: "81%",
    left: "83%",
    height: 40,
    width: "auto",
    borderRadius: 8,
  },
  marqueePhotoModalGridlist: {
    width: "50%",
    marginLeft: 500,
    marginRight: "auto",
  },
  marqueePhotoModal: {
    display: "flex",
    justifyContent: "center",
    background: "white",
    // position: "absolute",
    height: "100vh",
    width: "100vw",
  },
  marqueePhotoModalBackButton: {
    display: "block",
    position: "absolute",
    left: 10,
    top: 10,
    height: 50,
    width: 50,
    borderRadius: "50%",
    border: "none",
  },
  marqueeDescriptionModal: {
    width: "80%",
    height: "60%",
    // width: 600,
    // height: 400,
    position: "absolute",
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    background: "seashell",
  },
  marqueeSleepingCard: {
    width: 150,
    height: 125,
    borderRadius: "10%",
    border: "1px solid lightgray",
    margin: 5,
    padding: 10,
  },
  marqueeSleepingFlexbox: {
    display: "flex",
  },
  marqueeReadDescriptionButton: {
    fontWeight: "bold",
  },
});

export default styles;
