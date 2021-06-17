const styles = () => ({
  appBody: {
    fontFamily: "Airbnb Cereal App Light",
    display: "flex",
    flexDirection: "column",
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
  photoSection: {
    position: "relative",
  },
  photoBox: {
    display: "flex",
    flexDirection: "rows",
    width: "100%",
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },
  photoItem: {
    margin: "2.5px",
    height: 200,
    width: "20vw",
    objectFit: "cover",
    borderRadius: 3,
  },
  // marqueeImage: {
  //   maxWidth: "100vw",
  //   // maxWidth: "100%",
  //   // objectFit: "cover",
  // },
  mainPhotoItem: {
    margin: 5,
    height: 410,
    width: "50%",
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
});

export default styles;
