import {
  Button,
  Chip,
  Container,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
  
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { changeCurrentSlide } from "./sliderNavigation";
import { AMOUNT_SLIDES } from "@/app/constants/slider";
import { IButtonsNavigate, IDescriptionProps, IPricingProps, ITitleProps, TSlierItemsProps } from "./types/slider.d";
import Link from "next/link";





const Title: React.FC<ITitleProps> = ({ title }) => {
  const matches = useMediaQuery('(min-width:1200px)');
  const StyleTitleForMobile:SxProps = { fontWeight: "700", fontSize:"25px", width:"300px", maxHeight:"40px", overflow: "hidden", textOverflow:"ellipsis"}
  const StyleTitleForDefault= { fontWeight: "700" }
  return (
    <Typography 
    width={"300px"}
    maxHeight={"40px"}
    overflow={"hidden"}
    whiteSpace={"nowrap"}
    textOverflow={"ellipsis"}
    sx={!matches ? StyleTitleForMobile : StyleTitleForDefault} variant="h4">
      {title}
    </Typography>
  );

};
const Description: React.FC<IDescriptionProps> = ({ description }) => {
  return (
    <Typography
      width={"300px"}
      maxHeight={"50px"}
      overflow={"hidden"}
      paddingBottom={"5px"}
    >
      {description}
    </Typography>
  );
};

const Pricing: React.FC<IPricingProps> = ({ prise }) => {
  //! move out
  const price = prise ? prise + "" : "free"
  return (
    <Container
      sx={{
        padding: "5.4px",
        background: "#08AD2C",
        borderRadius: "5px",
        width: "max-content",
      }}
    >
      <Typography fontSize={"21px"}>{price}</Typography>
    </Container>
  );
};

const ButtonBuy = ({price}: {price: number}) => {
  const priceOrFree = price && price ? price + "" : "free"
  return (
    <Button size="large" sx={{ minWidth: "280px", marginRight: "4px" }}>
      {priceOrFree}
    </Button>
  );
};



const StylingButtons = (top:string) => {
  const styleButtonsNavigate: SxProps = {
    position: "absolute",
    left: "-2px",
    right: "undefined", 
    top: top,
    transform: "translate(0, -50%) rotate(0.5turn)",
    width: "80px",
    height: "455px",
    background: "none",
    color:"rgba(114, 114, 114, 0.844)",
    "&:hover": {
      color:"#ffff",
      backdropFilter: "blur(3px)",
      background: "#040d129f",
      overflow: "hidden",
      borderRadius: "0 20px 20px 0",
    },
}

  let styleButtonsNavigateRight = {...styleButtonsNavigate}
  let styleButtonsNavigateLeft = {...styleButtonsNavigate}
  styleButtonsNavigateRight.right = "0"
  styleButtonsNavigateRight.left = "undefined"
  styleButtonsNavigateRight.transform = "translate(0, -50%)"
  return [styleButtonsNavigateRight, styleButtonsNavigateLeft]

}



const ButtonsNavigate: React.FC<IButtonsNavigate> = ({current, setCurrent, setIsTouched}) => {

  const matches = useMediaQuery('(min-width:1200px)');
  const top = matches ? "50%" : "-33px"
  const isFirstSlide = current  >= 1
  const isLastSlide = current  < AMOUNT_SLIDES-1
  return (
    <>
      {isFirstSlide && <Button
        sx={StylingButtons(top)[1]}
        aria-label="prev slide"
        disableRipple 
        onClick={() => changeCurrentSlide(current-1, setCurrent, setIsTouched)}
      >
        <ArrowRightAltIcon fontSize="large" />
      </Button>}
      { isLastSlide && <Button
        sx={StylingButtons(top)[0]}
        disableRipple
        aria-label="next slide"
        onClick={() => changeCurrentSlide(current+1, setCurrent, setIsTouched)}
      >
        <ArrowRightAltIcon sx={{ filter: "blur(0px)" }} fontSize="large" />
      </Button>}
    </>
  );
};
const SliderActions: React.FC<TSlierItemsProps> = ({ slides, current, setCurrent, setIsTouched }) => {
  const matches = useMediaQuery('(min-width:1200px)');
  const SliderWrapStyle: SxProps = {
    marginTop: "-200px",
    marginLeft: !matches ? "5px" : "65px",
    position: !matches ? "relative" : "static", 
  };
  const genres = !matches && slides.genres  ? slides.genres.slice(0, 3) : slides.genres
  return (
    <Container sx={SliderWrapStyle}>
      <ButtonsNavigate 
        setCurrent={setCurrent}
        setIsTouched={setIsTouched}
        current={current}/>
        <Link href={`/game/${slides.id}`} style={{color:"#fff"}}>
          {slides.title && <Title title={slides.title}  />}
      </Link>
      {slides.description && <Description description={slides.description} />}
      <Stack direction="row" spacing={"5px"}>
        {genres && genres.map(genre => {
          return  <Chip key={genre.id} label={genre.name} variant="outlined"  />
        })}
    </Stack>
      <Container disableGutters sx={StyleWrapInfo}>
      <Link href={`/game/${slides.id}`} style={{color:"#fff"}}>
          {slides.price && <ButtonBuy price={slides.price} />}
      </Link>
      </Container>
    </Container>
  );
};

export { SliderActions };
//65

const StyleWrapInfo: SxProps = {
  display: "flex",
  flexDirection: "row",
  width: "max-content",
  alignItems: "flex-end",
  marginLeft: 0,
  marginTop: "10px",
}