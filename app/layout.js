import "./globals.css";

export const metadata = {
  title: "ShivamKumar Yadav — Marketing Lead",
  description: "Portfolio of ShivamKumar Yadav, Marketing Lead and Customer Experience professional based in Mumbai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
