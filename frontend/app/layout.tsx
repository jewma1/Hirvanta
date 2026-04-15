export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h2 style={{background:"#111",color:"#fff",padding:"10px"}}>Hirvanta</h2>
        {children}
      </body>
    </html>
  );
}
