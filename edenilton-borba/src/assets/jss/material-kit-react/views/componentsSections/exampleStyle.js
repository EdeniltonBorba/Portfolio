import { conatinerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "20px 0",
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important",
  },

  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
