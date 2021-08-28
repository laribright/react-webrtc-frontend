import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Options from "./components/options/Options";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import VideoNotification from "./components/videoNotification/VideoNotification";
import "./app.css";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="app">
      <div className={classes.wrapper}>
        <VideoPlayer />
        <Options>
          <VideoNotification />
        </Options>
      </div>
    </div>
  );
};

export default App;
