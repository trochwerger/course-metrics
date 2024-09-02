// app/layout.tsx
import { Providers } from "./providers";
import MainNav from "./components/MainNav";
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainNav />
          <Container maxW="container.4xl" minHeight={"90vh"}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
