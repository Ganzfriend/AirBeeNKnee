const styles = () => ({
  appBody: {
    fontFamily: "Airbnb Cereal App Light",
    margin: "10px 10% 0 10%",
    display: "flex",
    flexDirection: "column",
    // maxWidth: "80vw",
  },
  // marqueeApp: {
  //   width: "80vw",
  //   height: "80vh",
  // },
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
  },
  marqueeSleepingFlexbox: {
    display: "flex",
  },
  marqueeReadDescriptionButton: {
    fontWeight: "bold",
  },
  // marqueeSubmodulesDiv: {
  //   width: 600,
  // },
  photoBox: {
    display: "flex",
    flexDirection: "rows",
    width: "100%",
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    height: "auto",
  },
  photoItem: {
    margin: "2.5px",
    maxHeight: 160,
    width: 240,
    objectFit: "cover",
  },
  // marqueeImage: {
  //   maxWidth: "100vw",
  //   // maxWidth: "100%",
  //   // objectFit: "cover",
  // },
  mainPhotoItem: {
    margin: 5,
    height: 320,
    width: "50%",
    objectFit: "cover",
  },
  photoButton: {
    gridColumnStart: 4,
    gridRowStart: 2,
    position: "relative",
    top: 180,
    left: 40,
    height: 30,
    width: 160,
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
});

export default styles;
