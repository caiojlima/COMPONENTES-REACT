import React, { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import './App.css'

function App() {
  const INITIAL_STATE = { testInput: '', testSelect: '', testTextarea: '' };
  const [state, setState] = useState(INITIAL_STATE);
  const { testInput, testSelect, testTextarea } = state;

  const handleChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });

  const handleButton = () => setState({ ...state, testInput: '', testSelect: '', testTextarea: '' });

  return (
    <div className="App">
      <Input
        id="test-input"
        name="testInput"
        label="Component input: "
        value={ testInput }
        callback={ handleChange }
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
        callback={ handleButton }
      />
    </div>
  );
}

export default App;
