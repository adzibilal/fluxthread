import Footer from "./_components/footer"
import Navbar from "./_components/navbar"

export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    )
  }
  