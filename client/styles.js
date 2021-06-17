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
  hostBody: {
    fontFamily: "Airbnb Cereal App Light",
  },
  // hr: {
  //   fontSize: 40px,
  //   border: .001em solid rgb(230, 230, 230),
  // },
  locTitle: {
    fontFamily: "Airbnb Cereal App Medium",
    marginTop: "30px",
    marginBottom: "25px",
  },
  wrapper: {
    position: "relative",
  },
  wrapperMap: {
    height: "500px",
    maxWidth: "none",
  },
  gmBundledControl: {
    borderRadius: "8px",
  },
  selTransit: {
    position: "absolute",
    border: "1px solid white",
    borderRadius: "8px",
    backgroundColor: "white",
    top: "10px",
    left: "75%",
    height: "30px",
    width: "140px",
    fontFamily: "Airbnb cereal App Book",
    fontSize: "17px",
    paddingTop: "5px",
    paddingLeft: "5px",
    "&:hover": {
      backgroundColor: "rgb(245, 243, 243)",
      cursor: "pointer",
    },
  },
  // locnotice, .sel-transit: {
  //   position: absolute,
  //   border: 1px solid white,
  //   borderRadius: 8px,
  //   backgroundColor: white,
  // },
  locNotice: {
    top: "430px",
    left: "34%",
    height: "40px",
    width: "280px",
    fontFamily: "Airbnb cereal App Book",
    fontSize: "14px",
    textAlign: "center",
    paddingTop: "8px",
  },
  // sel-transit: {
  //   top: 10px,
  //   left: 75%,
  //   height: 30px,
  //   width: 140px,
  //   fontFamily: 'Airbnb cereal App Book',
  //   fontSize: 17px,
  //   paddingTop: 5px,
  //   paddingLeft: 5px,
  // },
  transit: {
    zoom: 1.5,
    cursor: "pointer",
  },
  publicTransit: {
    display: "inline-block",
    marginLeft: "5px",
    verticalAlign: "3px",
    cursor: "pointer",
  },
  locNoticeModal: {
    top: "780px",
    left: "51%",
  },
  selTransitModal: {
    top: "78px",
    left: "81%",
  },
  hostButton: {
    margin: "0 0 20px 0",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "10px",
    fontFamily: "Airbnb Cereal App Medium",
    padding: "10px 18px 10px 18px",
    fontSize: "16px",
    outline: "none",
    "&:hover": {
      backgroundColor: "rgb(245, 243, 243)",
      cursor: "pointer",
    },
  },
  locOverlayBtn: {
    border: "1px solid white",
    padding: 0,
    fontSize: 25,
    height: 30,
    width: 30,
    fontFamily: "Airbnb Cereal App Light",
    borderRadius: 50,
  },
  locInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
  },
  locInfoH1: {
    fontFamily: "Airbnb Cereal App Medium",
    marginTop: "-5px",
  },
  locInfoMap: {
    height: "100%",
    width: "fill",
  },
  locDesc: {
    marginRight: 50,
  },
  hostImg: {
    height: 70,
    width: 70,
    border: "1px solid white",
    borderRadius: "50%",
  },
  hostBarInfo: {
    marginTop: 20,
    marginLeft: 15,
    verticalAlign: "-75%",
  },
  hostName: {
    fontFamily: "Airbnb Cereal App Medium",
    fontSize: 22,
  },
  hostJoin: {
    fontSize: 14,
    color: "rgb(100, 100, 100)",
  },
  hostInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  hostData: {
    marginBottom: "-10px",
  },
  reviews: {
    display: "inline-flex",
    marginLeft: 10,
    marginRight: 15,
    verticalAlign: "23%",
  },
  verified: {
    display: "inline-flex",
    marginLeft: 10,
    marginRight: 15,
    verticalAlign: "23%",
  },
  hostDesc: {
    marginRight: 50,
  },
  aLoc: {
    fontFamily: "Airbnb cereal App Medium",
    fontSize: 16,
    color: "black",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: "black",
    },
  },
  protWarning: {
    marginLeft: 12,
    display: "inline-block",
    fontSize: 14,
    width: 300,
    verticalAlign: "-72%",
  },
  toKnowTitle: {
    fontFamily: "Airbnb Cereal App Medium",
    fontSize: 22,
  },
  toKnowGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  knowSubtitle: {
    fontFamily: "Airbnb Cereal App Medium",
    fontSize: 16,
    marginBottom: 20,
  },
  rule: {
    marginBottom: 5,
  },
  ruleSvg: {
    marginRight: 10,
    height: 20,
  },
  ruleLine: {
    display: "inline-flex",
    width: 240,
  },
  fas: {
    marginRight: 17,
  },
  ruleImg: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  aSvg: {
    display: "flex",
    marginTop: 10,
    verticalAlign: "-7px",
  },
  closeModal: {
    marginTop: 7,
    marginLeft: 7,
    height: 40,
  },
  modalContent: {
    borderRadius: 15,
  },
  closeModalBtn: {
    border: "1px solid white",
    borderRadius: "50%",
    width: 40,
    height: 40,
  },
  btnSvg: {
    marginLeft: "-9px",
  },
  modalTitle: {
    fontFamily: "Airbnb Cereal App Medium",
    marginBottom: 10,
  },
  modalSubtitle: {
    marginTop: 10,
    marginBottom: 15,
    fontFamily: "Airbnb Cereal App Medium",
    fontSize: 18,
  },
  locModal: {
    width: "100vw",
    maxWidth: "100vw",
    marginTop: "-1%",
    marginBottom: "-25px",
  },
  // locmodal .modal-content: {
  //   borderRadius: 0% !important,
  // },
});

export default styles;
