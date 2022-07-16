import "./App.css";
import { ContributorContextProvider } from "./Context/ContributorContext";
import { SelectContributors } from "./Contributors";

function App() {
  return (
    <ContributorContextProvider>
      <SelectContributors />
    </ContributorContextProvider>
  );
}

export default App;
