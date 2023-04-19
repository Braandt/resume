import Body from "./components/Body";
import Header from "./components/Header";
import PrintButton from "./components/PrintButton";

export default function App() {
	return (
		<div className="bg-slate-100 aspect-[1.414/2] text-slate-900">
			<Header />

			<Body />

			<PrintButton />
		</div>
	)
}