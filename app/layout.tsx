
import "./globals.css";
const ibmPlexSerif=IBM_Plex_Serif({

  variable:"--font-ibm-plex-serif"
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
