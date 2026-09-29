import "./globals.css";

export const metadata = {
  title: "Shivam Yadav — Marketing · Communications · Customer Experience",
  description: "Portfolio of Shivam Yadav, a customer experience professional working across digital communications, customer journeys and campaign execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
