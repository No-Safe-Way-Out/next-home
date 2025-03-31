'use client'

import React from "react";
import StyledIconButton from "@/components/StyledIconButton";
import {alpha, Menu, MenuItem, MenuProps, styled, Tooltip} from "@mui/material";
import {useChangeLocale, useCurrentLocale} from "@/locale/client";
import TranslateIcon from '@mui/icons-material/Translate';
import {supportedLanguages} from "@/middleware";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function ChangeLocaleButton() {
    const [open, setOpen] = React.useState(false);
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    function toLocale(language: string) {
        // @ts-ignore
        changeLocale(language);
    }

    return (
        <React.Fragment>
            <Tooltip title={locale}>
                <StyledIconButton onClick={() => setOpen(!open)}>
                    <TranslateIcon color="primary"/>
                </StyledIconButton>
            </Tooltip>
            <StyledMenu
                open={open}
                onClose={() => setOpen(false)}
            >
                {
                    supportedLanguages.map((language, index) => (
                        <MenuItem key={index} onClick={() => toLocale(language)}>
                            {language}
                        </MenuItem>
                    ))
                }
            </StyledMenu>
        </React.Fragment>
    );
}
