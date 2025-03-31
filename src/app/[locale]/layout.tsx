import "@/styles/globals.css";
import {I18nProviderClient} from "@/locale/client";
import {ThemeProvider} from "@mui/material";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import theme from "@/app/theme";

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title></title>
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
