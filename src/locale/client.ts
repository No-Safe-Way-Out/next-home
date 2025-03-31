"use client";

import { createI18nClient } from "next-international/client";

const {
    useI18n,
    useScopedI18n,
    useCurrentLocale,
    I18nProviderClient,
    useChangeLocale,
} = createI18nClient({
    "zh": () => import("./zh.json"),
    "en": () => import("./en.json")
});

export {
    useI18n,
    useScopedI18n,
    useCurrentLocale,
    I18nProviderClient,
    useChangeLocale,
}
