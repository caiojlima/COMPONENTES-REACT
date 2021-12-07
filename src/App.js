import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const INITIAL_STATE = { testInput: '', testSelect: '', testTextarea: '', testRadioInput: "Sim" };
  const [state, setState] = useState(INITIAL_STATE);
  const { testInput, testSelect, testTextarea, testRadioInput } = state;

  const handleChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });

  const handleSubmit = (event) => {
    event.preventDefault()
    setState(INITIAL_STATE)    
  };

  return (
    <div>
      <Header />
      <form onSubmit={ handleSubmit }>
        <Input
          id="test-input"
          name="testInput"
          label="Component input: "
          value={ testInput }
          callback={ handleChange }
        />
        <Input
          id="test-radio-input-sim"
          type="radio"
          name="testRadioInput"
          label="SIM "
          value="Sim"
          callback={ handleChange }
          checked={ (testRadioInput === 'Sim') ? true : false }
        />
        <Input
          id="test-radio-input-nao"
          type="radio"
          name="testRadioInput"
          label="NÃO "
          value="Não"
          callback={ handleChange }
          checked={ (testRadioInput === 'Não') ? true : false }
        />
        <Select
          id="test-select"
          name="testSelect"
          label="Component select: "
          value={ testSelect }
          callback={ handleChange }
          defaultValue="Escolha uma opção"
          options={ ['option1', 'option2', 'option3'] }
        />
        <Textarea
          id="test-textarea"
          name="testTextarea"
          value={ testTextarea }
          callback={ handleChange }
          label="Component Textarea: "
        />
        <Button
          id="test-button"
          text="Component Button"
          type="submit"
        />
      </form>
      <Footer />
    </div>
  );
}

export default App;
