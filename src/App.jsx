import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"

const App = () => {
    const [_, setItems] = useState([])

	useEffect(() => {
		Aos.init({ easing: "ease-in-out" })
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			await new Promise(resolve => setTimeout(resolve, 1000))
			setItems(["item 1", "items 2", "items 3"])
			Aos.refresh()
		}
		fetchData()
	}, [])

	useEffect(() => {
		const btnScrollUp = document.getElementById("btnScrollUp");
    	const targetSection = document.getElementById("landingPage");

		const handleScroll = () => {
			const scrollPos = window.scrollY || document.documentElement.scrollTop;
			const top = targetSection.offsetTop;

			if (scrollPos <= top + 700) {
				btnScrollUp.style.transform = "translateY(80px)";
			} else {
				btnScrollUp.style.transform = "translateY(0)";
			}
		}

		const handleClickBtnScrollUp = () => {
			targetSection.scrollIntoView({ behavior: "smooth" });
		}

		window.addEventListener("scroll", handleScroll)
		btnScrollUp.addEventListener("click", handleClickBtnScrollUp)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			btnScrollUp.removeEventListener("click", handleClickBtnScrollUp)
		}
	}, [])

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>

            <Footer />

			<button
				type="button"
				className="button btn-scroll-up"
				id="btnScrollUp"
				aria-label="Remonter"
			>
				<FaArrowUp style={{ pointerEvents: "none" }} />
			</button>

			<div className="overlay" />
        </>
    )
}

export default App