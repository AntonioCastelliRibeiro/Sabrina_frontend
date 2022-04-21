import React, { CSSProperties, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { IconButton , Stack, useMediaQuery, useTheme } from "@mui/material";
import "./styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowLeft";
import MyCardHoverOpacity from "../MyCardHoverOpacity";
import { dataMyCarrouselHover } from "./data";
// touchAction: 'pan-y'

const arrowStyles: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  cursor: "pointer",
};

export default function MyCarrouselHover() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('lg'));
    const [onIndex, setOnIndex] = useState(0);

    useEffect(()=>{
        setOnIndex(onIndex+1);
        setOnIndex(onIndex-1);
    }, [isMd])
  
  return (
    <Carousel
      className="carouselMaterialClass1"
    //   autoFocus
      selectedItem={onIndex}
      onChange={(index, intem) => setOnIndex(index)}
    //   emulateTouch
      showIndicators={false}
      infiniteLoop
      // dynamicHeight
      showThumbs={false}
      showStatus={false}
    //   swipeable
      autoPlay={true}
      showArrows={true}
      useKeyboardArrows
      stopOnHover
      centerMode
      centerSlidePercentage={isMd ? 100 : 27}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            size="small"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 0, color: theme.palette.primary.light }}
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
            style={{ ...arrowStyles, right: 0, color: theme.palette.primary.light }}
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
        {dataMyCarrouselHover.map((data, key)=>(
            <Stack pl={1} pr={1} key={key}>
                <MyCardHoverOpacity {...data} />
            </Stack>
        ))}
    </Carousel>
  );
}
