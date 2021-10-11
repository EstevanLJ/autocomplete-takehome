import Autocomplete from "./components/Autocomplete/Autocomplete";
import "./App.css";
import { useState } from "react";
import { Country } from "./interfaces";

const App = () => {
  const [country, setCountry] = useState<Country | null>(null);

  const handleChange = (value: Country | null): void => {
    setCountry(value);
  };

  return (
    <div className="App">
      <Autocomplete label="Select your country" onChange={handleChange} />

      {country && (
        <div>
          <p>Selected country:</p>
          <pre>{JSON.stringify(country, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
