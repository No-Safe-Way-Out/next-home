import AppTopBar from "@/components/AppTopBar";
import {Box, ThemeProvider} from "@mui/material";
import MainDescription from "@/components/MainDescription";
import React from "react";
import ExitBg from "@/components/ExitBg/ExitBg";
import './page.css';
import theme from "@/app/theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <AppTopBar/>
            <ExitBg/>
            <Box className="main-description-container">
                <MainDescription/>
            </Box>
        </ThemeProvider>
    );
}
