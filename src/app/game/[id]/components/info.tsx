"use client"

import { ResponseGameFullInfo } from "@/app/components/main/types/Response"
import { ListTagsOrGenres } from "@/app/components/shared/Item/components/components"
import { Box, Button, Chip, Stack, Typography, useMediaQuery } from "@mui/material"

interface Info {
   fullInfo:  ResponseGameFullInfo
}

const Rating = ({permit_age}: {permit_age : string} ) => {
    return <>
    <Typography fontWeight={"600"} variant="h5">Rating for: PEGI</Typography>
    <img width={70} src={`https://pegi.info/themes/pegi/public-images/pegi/pegi${permit_age}.png`} alt=""  />
 </>
}



export const Info: React.FC<Info> = ({fullInfo}) => {
    //! move to shared constant
    const matches = useMediaQuery('(min-width:1200px)');
    const ml = matches ? "20px" : "5px"
    const mr = matches ? "0px" : "5px"
    const mt = matches ? "0px" : "20px"
    const price = fullInfo && fullInfo.price ? fullInfo.price + "" : "free"
    const developerAndPublisher = fullInfo  && fullInfo.developer.name === fullInfo.publisher.name ?  fullInfo.developer.name : fullInfo  && `${fullInfo.developer.name} & ${fullInfo.publisher.name}`
    let platforms = ""
    fullInfo.platforms.map(platform => {
        platforms += " " + platform.name.toLowerCase()
    });
    const ganres = `${ fullInfo.genres[0] ?  fullInfo.genres[0].name : ""} ${fullInfo.genres[1] ?  fullInfo.genres[1].name : ""}`

    return <Box ml={ml} mt={mt} mr={mr}>
        <Typography fontWeight={"600"} variant="h3">{fullInfo.title}</Typography>
        <Typography width={"390px"} >{fullInfo.description}</Typography>
        <Typography fontWeight={"600"} variant="h6">Release date: {fullInfo.release_date} </Typography>
        <Typography fontWeight={"600"} variant="h6">{`Developer & Publisher : ${developerAndPublisher}`}</Typography>
        <Typography fontWeight={"600"} variant="h6">{`System Support : ${platforms}`}</Typography>
        <Typography fontWeight={"600"} variant="h6">{`Genre : ${ganres}`}</Typography>
        <ListTagsOrGenres mt='0px' ml='-5px' spacing={0} arrayElements={fullInfo.tags.sort().slice(0, 4)}/>
       {fullInfo.permit_age && <Rating permit_age={fullInfo.permit_age}/>}
        <Button sx={{width:"100%", fontSize:"20px"}}>{price}</Button>
    </Box>
}