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
import {useEffect, useState} from "react";
import {BlogData} from "@/lib/BlogData";

const LinkNumber = 3;

const PrimaryTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));
const LightPrimaryTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.light, .5)
}));

function BlogTimeline() {
    const t = useI18n();
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [blogTitles, setBlogTitles] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/blog/all", {method: "GET"}).then((res) => res.json()).then((data: BlogData[]) => {
            setBlogs(data.slice(0, Math.min(data.length, LinkNumber)));
        });
    }, []);

    useEffect(() => {
        fetch("/api/blog/titles", {
            method: "POST",
            body: JSON.stringify({
                blogs
            })
        }).then((res) => res.json()).then((data: string[]) => {
            setBlogTitles(data);
        });
    }, [blogs]);

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
                blogs.map((b, i) => (
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
                                <Link href={b.loc} underline="none" target="_blank">
                                    {
                                        blogTitles[i] ?? ""
                                    }
                                </Link>
                                <Typography variant="body2">
                                    {
                                        b.lastmod
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
        <CardBase sx={{m: 1}}>
            <CardContent>
                <Stack sx={{pl: 1}}>
                    <Typography variant="h5">{t('blog.title')}</Typography>
                </Stack>
                <BlogTimeline/>
                <Stack sx={{width: '100%', pt: 3}} alignItems="center" justifyContent="center">
                    <Link href={t('blog.link')} underline="none" target="_blank">
                        <Typography>
                            {t('blog.goto')}
                        </Typography>
                    </Link>
                </Stack>
            </CardContent>
        </CardBase>
    );
}
