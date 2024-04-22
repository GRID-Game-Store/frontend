"use client";
import {
  AllReviewsGameResponse,
  FullInfoResponse,
  MyReviewGameResponse,
} from "@/app/types/types";
import { Box, useMediaQuery } from "@mui/material";
import { Gallery } from "./galary";
import { Info } from "./info";
import { SysReq } from "./sysReq";
import getQueryClient from "@/app/reactQuery/get-query-client";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/app/reactQuery/Hydrate";
import React from "react";
import { Reviews } from "./reviews";

interface IWrapperGamePageProps {
  fullInfo: FullInfoResponse["game"];
  wishListCheck: boolean;
  myReview: MyReviewGameResponse;
  allReviews: AllReviewsGameResponse;
}
const WrapperGamePage: React.FC<IWrapperGamePageProps> = ({
  fullInfo,
  wishListCheck,
  myReview,
  allReviews,
}) => {
  const matches = useMediaQuery("(min-width:1200px)");
  const alignItems = !matches ? "center" : undefined;
  const flexDirection = !matches ? "column" : "row";
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <Box display={"grid"} justifyContent={"center"} sx={{ gridGap: "40px" }}>
      <Box
        display={"flex"}
        flexDirection={flexDirection}
        justifyContent={"center"}
        alignItems={alignItems}
      >
        <Gallery gameMedia={fullInfo?.gameMedia} />
        <Hydrate state={dehydratedState}>
          <Info fullInfo={fullInfo} wishListCheck={wishListCheck} />
        </Hydrate>
      </Box>
      <Reviews
        gameID={fullInfo?.id}
        myReview={myReview}
        allReviews={allReviews}
      />
      {fullInfo && fullInfo.systemRequirements && (
        <SysReq sysReq={fullInfo.systemRequirements} />
      )}
    </Box>
  );
};

export { WrapperGamePage };