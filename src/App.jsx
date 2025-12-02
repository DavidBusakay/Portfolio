import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
import { Button } from "react-bootstrap"

const App = () => {
    const [_, setItems] = useState([])
	const [showBtn, setShowBtn] = useState(false)
	
	// AOS
	useEffect(() => {
		Aos.init({ easing: "ease-in-out", duration: "350" })
	}, [])
	useEffect(() => {
		const fetchData = async () => {
			await new Promise(resolve => setTimeout(resolve, 1000))
			setItems(["item 1", "items 2", "items 3"])
			Aos.refresh()
		}
		fetchData()
	}, [])

	// BTN SCROLL UP
	const handleClik = () => {
		const targetSection = document.getElementById("landingPage")
		if (targetSection) {
			targetSection.scrollIntoView({
				behavior: "smooth"
			})
		}
	}

	useEffect(() => {
		setShowBtn(false)
    	const targetSection = document.getElementById("landingPage")

		const handleScroll = () => {
			const scrollPos = window.scrollY || document.documentElement.scrollTop
			const top = targetSection.offsetTop

			if (scrollPos <= top + 700) {
				setShowBtn(false)
			} else {
				setShowBtn(true)
			}
		}
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

    return (
        <>
            <Header />

			<main>
				<Routes>
					<Route path="/" element={ <Home /> } />
				</Routes>
			</main>

            <Footer />

			<Button
				type="button"
				className="button btn-scroll-up"
				aria-label="Remonter"
				onClick={handleClik}
				style={{ transform: showBtn ? "translateY(0)" : "translateY(80px)" }}
			>
				<FaArrowUp style={{ pointerEvents: "none" }} />
			</Button>
        </>
    )
}

export default App