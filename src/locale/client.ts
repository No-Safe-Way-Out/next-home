"use client";

import { createI18nClient } from "next-international/client";
import I18nObj from "@/locale/I18nObj";

const {
    useI18n,
    useScopedI18n,
    useCurrentLocale,
    I18nProviderClient,
    useChangeLocale,
} = createI18nClient(I18nObj);

export {
    useI18n,
    useScopedI18n,
    useCurrentLocale,
    I18nProviderClient,
    useChangeLocale,
}
