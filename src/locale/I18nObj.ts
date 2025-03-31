import {supportedLanguages} from "@/middleware";

const I18nObj = {};
for (let i = 0; i < supportedLanguages.length; i ++) {
    const lang = supportedLanguages[i];
    // @ts-ignore
    I18nObj[lang] = () => import(`./${lang}.json`);
}

export default I18nObj;
