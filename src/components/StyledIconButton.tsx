'use client'

import {alpha, IconButton, styled} from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    boxShadow: `0px 0px 1px 1px ${alpha(theme.palette.text.secondary, .1)}`,
    color: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius
}));

export default StyledIconButton;
