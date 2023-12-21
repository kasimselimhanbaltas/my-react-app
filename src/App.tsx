import { useState } from 'react';
import './App.css';

const ChildComponent = ({ onInputChange }) => {

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onInputChange(inputValue); // Parent'a değeri iletilir
  };

  return (
    <div>
      {/* Input elemanı ve onChange olayı */}
      <input
        type="text"
        placeholder="Child Input"
        onChange={handleInputChange}
      />
    </div>
  )
}
function ParentComponent() {

  const [childInputValue, setChildInputValue] = useState('');

  // Callback fonksiyonu: Child bileşenden gelen input değerini alır
  const handleChildInputChange = (value: any) => {
    setChildInputValue(value);
  };
  return (
    <div>
      <ChildComponent onInputChange={handleChildInputChange} />
      <p>Child Input Değeri (Parent): {childInputValue}</p>
    </div>
  )
}

function App() {
  // Parent bileşenin state'i

  return (
    <div className="App">
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
