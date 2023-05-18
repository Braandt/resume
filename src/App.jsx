import Body from "./components/Body";
import Header from "./components/Header";
import PrintButton from "./components/PrintButton";

export default function App() {
	return (
		<div className="aspect-[1.414/2] text-color1 tracking-wide bg-color5 text-base">
			<Header />

			<Body />

			<PrintButton />
		</div>
	)
}