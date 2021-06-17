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
  font-family: 'Airbnb Cereal App Light';
  margin: 10px 15% 0 15%;
},
hr: {
  font-size: 40px;
  border: .001em solid rgb(230, 230, 230);
},
loc-title: {
  font-family: 'Airbnb Cereal App Medium';
  margin-top: 30px;
  margin-bottom: 25px;
},
#wrapper: {
  position: relative;
},
#wrapper #map: {
  height: 500px;
  max-width: none !important;
},
gm-bundled-control div: {
  border-radius: 8px !important;
},
loc-notice, .sel-transit: {
  position: absolute;
  border: 1px solid white;
  border-radius: 8px;
  background-color: white;
},
loc-notice: {
  top: 430px;
  left: 34%;
  height: 40px;
  width: 280px;
  font-family: 'Airbnb cereal App Book';
  font-size: 14px;
  text-align: center;
  padding-top: 8px;
},
sel-transit: {
  top: 10px;
  left: 75%;
  height: 30px;
  width: 140px;
  font-family: 'Airbnb cereal App Book';
  font-size: 17px;
  padding-top: 5px;
  padding-left: 5px;
},
#transit: {
  zoom: 1.5;
  cursor: pointer;
},
#public-transit: {
  display: inline-block;
  margin-left: 5px;
  vertical-align: 3px;
  cursor: pointer;
},
sel-transit:hover: {
  background-color: rgb(245, 243, 243);
  cursor: pointer;
},
loc-notice-modal: {
  top: 780px;
  left: 51%;
},
sel-transit-modal: {
  top: 78px;
  left: 81%;
},
button: {
  margin: 0 0 20px 0;
  background-color: white;
  border: 1px solid black;

  border-radius: 10px;
  font-family: 'Airbnb Cereal App Medium';
  padding: 10px 18px 10px 18px;
  font-size: 16px;
  outline: none !important;
},
button:hover: {
  background-color: rgb(245, 243, 243);
  cursor: pointer;
},
#loc-overlay button: {
  border: 1px solid white;
  padding: 0;
  font-size: 25px;
  height: 30px;
  width: 30px;
  font-family: 'Airbnbn Cereal App Light';
  border-radius: 50px;
},
#loc-info: {
  display: grid;
  grid-template-columns: 1fr 3fr;
},
#loc-info h1: {
  font-family: 'Airbnb Cereal App Medium';
  margin-top: -5px;
},
#loc-info #map: {
  height: 100%;
  width: fill;
},
#loc-desc: {
  margin-right: 50px;
},
#host-img: {
  height: 70px;
  width: 70px;
  border: 1px solid white;
  border-radius: 50%;
},
#host-bar-info: {
  margin-top: 20px;
  margin-left: 15px;
  vertical-align: -75%;
},
#host-name: {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 22px;
},
#host-join: {
  font-size: 14px;
  color:  rgb(100, 100, 100);
},
#host-info: {
  display: grid;
  grid-template-columns: 1fr 1fr;
},
#host-data: {
  margin-bottom: -10px;
},
#reviews, #verified: {
  display: inline-flex;
  margin-left: 10px;
  margin-right: 15px;
  vertical-align: 23%;
},
#host-desc: {
  margin-right: 50px;
},
a: {
  font-family: 'Airbnb cereal App Medium';
  font-size: 16px;
  color: black;
  text-decoration: underline;
},
#host-desc a:hover: {
  cursor: pointer;
  color: black;
},
#prot-warning: {
  margin-left: 12px;
  display: inline-block;
  font-size: 14px;
  width: 300px;
  vertical-align: -72%;
},
#toKnow-title: {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 22px;
},
#toKnow-grid: {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
},
Know-subtitle: {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 16px;
  margin-bottom: 20px;
},
rule: {
  margin-bottom: 5px;
},
rule svg: {
  margin-right: 10px;
  height: 20px;
},
rule-line: {
  display: inline-flex;
  width: 240px;
},
fas: {
  margin-right: 17px;
},
rule img: {
  height: 25px;
  width: 25px;
  margin-right: 10px;
},
a svg: {
  display: flex;
  margin-top: 10px;
  vertical-align: -7px;
},
#close-modal: {
  margin-top: 7px;
  margin-left: 7px;
},
modal-content: {
  border-radius: 15px;
},
#close-modal: {
  height: 40px;
},
#close-modal button: {
  border: 1px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
},
button svg: {
  margin-left: -9px;
},
modal-title: {
  font-family: 'Airbnb Cereal App Medium';
  margin-bottom: 10px;
},
#modal-subtitle: {
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: 'Airbnb Cereal App Medium';
  font-size: 18px;
},
loc-modal: {
  width: 100vw;
  max-width: 100vw;
  margin-top: -1%;
  margin-bottom: -25px;
},
loc-modal .modal-content: {
  border-radius: 0% !important;
},
});

export default styles;
