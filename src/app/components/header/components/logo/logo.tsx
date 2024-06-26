import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "next/link";
import "./animationLogo.css";

export const SVGLogo = ({width = 42, height = 46}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5644 23.5219L0.129998 40.5721C-0.203664 41.119 0.140831 41.8299 0.772405 41.8999L23.3336 44.3138L11.5644 23.5219Z"
        fill="#08AD2C"
        className="svg-elem-1"
      ></path>
      <path
        d="M0.802738 34.4997L8.95904 21.1179L0.65649 16.0889C0.367245 15.9139 0 16.1239 0 16.464V34.2711C0 34.7119 0.573075 34.8759 0.802738 34.4997Z"
        fill="#08AD2C"
        className="svg-elem-2"
      ></path>
      <path
        d="M1.97705 46.3306L23.0367 55.9183C23.6109 56.1863 24.2663 55.7619 24.2663 55.1243V47.9417L2.21538 45.5027C1.73331 45.448 1.54048 46.1141 1.97705 46.3306Z"
        fill="#08AD2C"
        className="svg-elem-3"
      ></path>
      <path
        d="M10.7758 18.1363L19.4347 2.50247C19.9049 1.73029 19.0458 0.83452 18.2669 1.28405L1.92939 12.0694C1.66181 12.2466 1.67048 12.6447 1.94347 12.8109L10.7758 18.1363Z"
        fill="#08AD2C"
        className="svg-elem-4"
      ></path>
      <path
        d="M25.9996 19.2498H37.8305L27.4762 0.833427C27.1371 0.277809 26.5684 0 25.9996 0C25.4309 0 24.8621 0.277809 24.5231 0.833427L14.1687 19.2498H25.9996Z"
        fill="#08AD2C"
        className="svg-elem-5"
      ></path>
      <path
        d="M51.3428 16.0889L43.0402 21.1189L51.1965 34.5008C51.4251 34.877 51.9992 34.713 51.9992 34.2711V16.464C51.9992 16.1239 51.632 15.9139 51.3428 16.0889Z"
        fill="#08AD2C"
        className="svg-elem-6"
      ></path>
      <path
        d="M41.2235 18.1363L50.0558 12.8098C50.3298 12.6436 50.3374 12.2455 50.0699 12.0683L33.7323 1.28405C32.9534 0.83452 32.0944 1.73029 32.5645 2.50247L41.2235 18.1363Z"
        fill="#08AD2C"
        className="svg-elem-7"
      ></path>
      <path
        d="M49.7839 45.5027L27.7329 47.9406V55.1232C27.7329 55.7619 28.3883 56.1852 28.9625 55.9172L50.0222 46.3296C50.4588 46.1141 50.2659 45.448 49.7839 45.5027Z"
        fill="#08AD2C"
        className="svg-elem-8"
      ></path>
      <path
        d="M40.4348 23.5219L28.6667 44.3138L51.2279 41.8999C51.8595 41.8288 52.204 41.119 51.8703 40.5721L40.4348 23.5219Z"
        fill="#08AD2C"
        className="svg-elem-9"
      ></path>
      <path
        d="M25.9996 22.7497H15.1199L25.9996 41.9721L36.8794 22.7497H25.9996Z"
        fill="#08AD2C"
        className="svg-elem-10"
      ></path>
    </svg>
  );
};

interface ILogoProps {
  isShowTitle?: boolean;
}

const Logo: React.FC<ILogoProps> = ({ isShowTitle = true }) => {
  return (
    <Link href={"/"} style={{ color: "#fff", textDecoration: "none" }}>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        width={"max-content"}
      >
        <SVGLogo />
        {isShowTitle && (
          <Typography variant="h3" fontSize={"30px"} paddingLeft={"10px"}>
            GRID
          </Typography>
        )}
      </Grid>
    </Link>
  );
};
export default Logo;
