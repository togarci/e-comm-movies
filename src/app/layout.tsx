import '@/app/assets/styles/global.css';
import Header from '@/app/share/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="pt-BR" />
        <meta name="language" content="pt-BR" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        ></meta>

        <title>Teste Front React WeFit</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
