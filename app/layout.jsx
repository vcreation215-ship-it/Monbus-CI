export const metadata = {
  title: 'MonBus CI',
  description: "L'application qui te montre ton bus en temps réel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
