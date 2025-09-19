'use client'

import {alpha, AppBar, Box, Stack, styled, Toolbar, Tooltip} from "@mui/material";
import Logo from "@/components/Logo";
import {useI18n} from "@/locale/client";
import StyledIconButton from "@/components/StyledIconButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChangeLocaleButton from "@/components/ChangeLocaleButton";
import {openLink} from "@/lib/utils";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'sticky',
    backgroundColor: 'transparent',
    boxShadow: `0px 0px 2px 2px ${alpha(theme.palette.text.secondary, .1)}`,
    backdropFilter: 'blur(5px)',
}));

export default function AppTopBar() {
    const t = useI18n();

    return (
        <Box sx={{flexGrow: 1}} position="sticky" top={0} left={0} width="100vw" zIndex={99}>
            <StyledAppBar>
                <Stack direction="row" sx={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <Toolbar sx={{justifyContent: 'space-between', height: 60, maxWidth: 'var(--max-width)', width: '100%'}} variant="dense">
                        <Box sx={{height: "100%"}}>
                            <Logo/>
                        </Box>
                        <Stack direction="row" gap={2}>
                            <Tooltip title={t('github')}>
                                <StyledIconButton onClick={() => openLink(t('github'))}>
                                    <GitHubIcon color="primary"/>
                                </StyledIconButton>
                            </Tooltip>
                            <Tooltip title={t('contact')}>
                                <StyledIconButton onClick={() => openLink(`mailto:${t('contact-email')}`)}>
                                    <ForwardToInboxOutlinedIcon color="primary"/>
                                </StyledIconButton>
                            </Tooltip>
                            <Tooltip title={t('about')}>
                                <StyledIconButton>
                                    <InfoOutlinedIcon color="primary"/>
                                </StyledIconButton>
                            </Tooltip>
                            <ChangeLocaleButton/>
                        </Stack>
                    </Toolbar>
                </Stack>
            </StyledAppBar>
        </Box>
    );
}
