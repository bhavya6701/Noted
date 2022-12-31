import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import Landing from "./Components/Landing/Landing";
import Suggestions from "./Components/ExtraPages/Suggestions";
import ReleaseNotes from "./Components/ExtraPages/ReleaseNotes";
import Credits from "./Components/ExtraPages/Credits";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/suggestions" element={<Suggestions />} />
					<Route exact path="/release-notes" element={<ReleaseNotes />} />
					<Route exact path="/credits" element={<Credits />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
