import AppTopBar from "@/components/AppTopBar";
import {Box, Stack} from "@mui/material";
import MainDescription from "@/components/MainDescription";
import React from "react";
import BlogCard from "@/components/BlogCard";
import RotatingEarthBg from "@/components/RotatingEarthBg";

export default function Home() {
    return (
        <React.Fragment>
            <AppTopBar/>
            <RotatingEarthBg/>
            <Box position="absolute" top={0} left={0} width='100%'>
                <Stack sx={{width: '50%', minWidth: 800, height: '100vh'}} justifyContent="center" alignItems="center">
                    <MainDescription/>
                </Stack>
                <Stack sx={{width: '100%'}} alignItems="center">
                    <BlogCard/>
                </Stack>
            </Box>
        </React.Fragment>
    );
}
