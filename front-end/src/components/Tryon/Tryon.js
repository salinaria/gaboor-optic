import React, { useRef, useEffect } from "react";
import { JEELIZVTOWIDGET } from "./JeelizVTOWidget.module.js";
import classes from "./Tryon.module.css";
import searchImage from "../../assets/glass1.png";

function init_VTOWidget(placeHolder, canvas, toggle_loading, id) {
  JEELIZVTOWIDGET.start({
    placeHolder,
    canvas,
    callbacks: {
      ADJUST_START: null,
      ADJUST_END: null,
      LOADING_START: toggle_loading.bind(null, true),
      LOADING_END: toggle_loading.bind(null, false),
    },
    sku: id, // SKU loadded at the beginning
    // image displayed when face is not found:
    searchImageMask: searchImage, //'https://appstatic.jeeliz.com/jeewidget/images/target.png',
    searchImageColor: 0xeeeeee, // color of loading (face not found) animation
    searchImageRotationSpeed: -0.001, // negative -> clockwise
    callbackReady: function () {
      console.log("INFO: JEELIZVTOWIDGET is ready :)");
    },
    onError: function (errorLabel) {
      // this function catches errors, so you can display custom integrated messages
      alert("An error happened. errorLabel =" + errorLabel);
      switch (errorLabel) {
        case "WEBCAM_UNAVAILABLE":
          // the user has no camera, or does not want to share it.
          break;

        case "INVALID_SKU":
          // the provided SKU does not match with a glasses model
          break;

        case "PLACEHOLDER_NULL_WIDTH":
        case "PLACEHOLDER_NULL_HEIGHT":
          // Something is wrong with the placeholder
          // (element whose id='JeelizVTOWidget')
          break;

        case "FATAL":
        default:
          // a bit error happens:(
          break;
      } // end switch
    }, // end onError()
  }); // end JEELIZVTOWIDGET.start call
}

function AppCanvas(props) {
  const refPlaceHolder = useRef();
  const refCanvas = useRef();
  const refLoading = useRef();

  const toggle_loading = (isLoadingVisible) => {
    refLoading.current.style.display = isLoadingVisible ? "block" : "none";
  };

  useEffect(() => {
    const placeHolder = refPlaceHolder.current;
    const canvas = refCanvas.current;
    init_VTOWidget(placeHolder, canvas, toggle_loading, props.id);
    return () => {
      JEELIZVTOWIDGET.destroy();
    };
  }, []);

  return (
    <div ref={refPlaceHolder} className={classes.container}>
      <canvas ref={refCanvas} className={classes.try}></canvas>
      <div ref={refLoading} className="JeelizVTOWidgetLoading">
        <div className={classes.loading}>LOADING...</div>
      </div>
    </div>
  );
}

export default AppCanvas;
