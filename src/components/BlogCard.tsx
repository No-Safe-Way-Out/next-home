'use client'

import {alpha, CardContent, Link, Stack, styled, Typography} from "@mui/material";
import {useI18n} from "@/locale/client";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineSeparator
} from "@mui/lab";
import CardBase from "@/components/CardBase";

const PrimaryTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));
const LightPrimaryTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.light, .5)
}));

function BlogTimeline() {
    const t = useI18n();

    const LinkNumber = 3;

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                marginBottom: "-20px",
                overflowY: 'auto'
            }}
        >
            {
                Array.from({length: LinkNumber}).map((_, i) => (
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <PrimaryTimelineDot/>
                            {
                                i + 1 == LinkNumber ? <></> :
                                    <LightPrimaryTimelineConnector/>
                            }
                        </TimelineSeparator>
                        <TimelineContent>
                            <Stack>
                                <Link href={
                                    // @ts-ignore
                                    t(`blog.link${i}.link`)
                                } underline="none" target="_blank">
                                    {
                                        // @ts-ignore
                                        t(`blog.link${i}.title`)
                                    }
                                </Link>
                                <Typography variant="body2">
                                    {
                                        // @ts-ignore
                                        t(`blog.link${i}.date`)
                                    }
                                </Typography>
                            </Stack>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}

export default function BlogCard() {
    const t = useI18n();

    return (
        <CardBase>
            <CardContent>
                <Stack sx={{pl: 1}}>
                    <Typography variant="h5">{t('blog.title')}</Typography>
                </Stack>
                <BlogTimeline/>
            </CardContent>
        </CardBase>
    );
}
