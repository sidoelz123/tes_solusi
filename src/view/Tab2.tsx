import { useState } from "react";

interface Tab2Props {
  inputNumber: string;
  nextTab: () => void;
  onGenerate: (numbers: number[]) => void;
}

function Tab2({ inputNumber, nextTab, onGenerate }: Tab2Props) {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const generateRandomNumbers = () => {
    const numbers = Array.from(
      { length: Number(inputNumber) },
      () => Math.floor(Math.random() * 20000) - 10000
    );
    setRandomNumbers(numbers);
    onGenerate(numbers);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="p-2 bg-green-500 text-white rounded"
        onClick={generateRandomNumbers}
      >
        Generate Random Numbers
      </button>
      <button
        className="p-2 mt-4 bg-blue-500 text-white rounded"
        onClick={nextTab}
      >
        Next
      </button>
      {randomNumbers.length > 0 && (
        <div className="mt-4">
          <p>Generated Numbers:</p>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Index</th>
                <th className="border border-gray-300 p-2">Number</th>
              </tr>
            </thead>
            <tbody>
              {randomNumbers.map((num, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{index}</td>
                  <td className="border border-gray-300 p-2">{num}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Tab2;
