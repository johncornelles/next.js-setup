import Nav from "@components/Nav"
import Provider from "@components/Provider"
import "@styles/globals.css"

export const metadata = {
  title: 'Books',
  description: 'Search for books with interests, tags and many more',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <main className="">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
