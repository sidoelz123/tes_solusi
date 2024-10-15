// Tab1.tsx
import { useState } from "react";

interface Tab1Props {
  nextTab: () => void;
  onNumberInput: (number: string) => void;
  isDisabled: boolean;
}

function Tab1({ nextTab, onNumberInput, isDisabled }: Tab1Props) {
  const [number, setNumber] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      /^\d*$/.test(value) &&
      (value === "" || (Number(value) >= 1 && Number(value) <= 10000))
    ) {
      setNumber(value);
      onNumberInput(value);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        value={number}
        onChange={handleChange}
        min="1"
        max="10000"
        placeholder="Enter a number (1-10000)"
        className="border p-2 w-1/3"
      />
      <button
        className={`p-2 bg-blue-500 w-fit text-white rounded ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={nextTab}
        disabled={isDisabled}
      >
        Next
      </button>
      <div className="mt-4 text-lg">
        {number && <p>You entered: {number}</p>}
      </div>
    </div>
  );
}

export default Tab1;
