import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { IconButton, Stack } from "@mui/material";
import "./styles.css";
// import CardCrSel from "./CardCarrousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowLeft";
import { dataCrselOpinion } from "./data";
import MyCardOpinion from "../MyCardOpinion";

// touchAction: 'pan-y'

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  cursor: "pointer",
  color: "#fff"
};

export default function MyCrSelMaterial() {
  const [onIndex, setOnIndex] = useState(0);
  return (
    <Carousel
      className="carouselMaterialClass"
      // autoFocus
      selectedItem={onIndex}
      onChange={(index) => setOnIndex(index)}
      emulateTouch
      showIndicators
      infiniteLoop
      // dynamicHeight
      showThumbs={false}
      showStatus={false}
      swipeable
      autoPlay={false}
      showArrows
      useKeyboardArrows
      // stopOnHover
      // centerMode
      // centerSlidePercentage={90}
      // infiniteLoop
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            size="small"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 0 }}
          >
            <ArrowBackIosIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            size="small"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 0 }}
          >
            <ArrowBackIosIcon
              sx={{
                transform: "rotate(180deg)",
                height: 40,
                width: 40
              }}
            />
          </IconButton>
        )
      }
    >
      {dataCrselOpinion.map((data, key)=>(
        <Stack key={key}>
          <MyCardOpinion {...data} />
        </Stack>
      ))}
    </Carousel>
  );
}
