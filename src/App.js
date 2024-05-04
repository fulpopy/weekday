import Homepage from "./Pages/Homepage";
import { getJobs } from "./server/api";

function App() {
  getJobs();
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
