'use client'

import {Box, Button, Stack, styled, Typography} from "@mui/material";
import {useI18n} from "@/locale/client";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {openLink} from "@/lib/utils";

const TitleTypography = styled(Typography)(({ theme }) => ({
    background: `linear-gradient(90deg, ${theme.palette.primary.light} 5%, ${theme.palette.primary.main} 90%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}));

export default function MainDescription() {
    const t = useI18n();

    return (
        <Stack gap={3} sx={{maxWidth: 500}} justifyContent="center" alignItems="flex-start">
            <Stack>
                <TitleTypography variant="h2" fontWeight={600}>
                    {t('title')}
                </TitleTypography>
                <Typography variant="h3" fontWeight={600} lineHeight={1}>
                    {t('subtitle')}
                </Typography>
            </Stack>
            <Typography variant="body1">
                {t('desc')}
            </Typography>
            <Stack direction="row" spacing={3}>
                <ContactButton
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}
                    onClick={() => openLink('https://chat.nosafewayout.com/')}
                >
                    {t('start-now')}
                </ContactButton>

                <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowRightIcon/>}
                    onClick={() => openLink('https://forum.nosafewayout.com/')}
                >
                    {t('start-forum')}
                </Button>
            </Stack>
        </Stack>
    );
}
