import Homepage from "./Pages/Homepage";
import { getJobsApi } from "./server/api";

function App() {
  getJobsApi();
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
