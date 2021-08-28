import React, { useEffect } from "react";
import { io } from "socket.io-client";

const initialState = {};

export const videoReducer = (state = initialState, { type, payload }) => {
  //destructing type and payload from action
  switch (type) {
    // case value:

    //     break;

    default:
      return state;
  }
};
