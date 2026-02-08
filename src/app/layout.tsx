import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Venkateswar Rao Chinta | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
