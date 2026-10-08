import "./globals.css";

export const metadata = {
  title: "Shivamkumar Yadav — Marketing, Communications & Customer Journeys",
  description: "Portfolio of Shivamkumar Yadav, a marketing and communications professional working across fintech, customer journeys and digital campaigns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
