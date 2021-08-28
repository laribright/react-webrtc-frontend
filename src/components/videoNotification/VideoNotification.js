import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from "../../SocketContextAPI";

const VideoNotification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <React.Fragment>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>You have a call from: {call.name}</h1>
          <Button variant="contained" color="secondary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default VideoNotification;
