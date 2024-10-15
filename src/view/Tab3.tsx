import { useEffect, useState } from "react";

interface Tab3Props {
  generatedNumbers: number[];
}

function Tab3({ generatedNumbers }: Tab3Props) {
  const [smallestNumber, setSmallestNumber] = useState<number | null>(null);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  // Fungsi untuk menemukan bilangan positif terkecil dalam array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findSmallestNumber = () => {
    const positiveNumbers = getPositiveNumbers(generatedNumbers);
    const smallest = getSmallestNumber(positiveNumbers);
    setSmallestNumber(smallest);
  };

  // Mendapatkan bilangan positif dari array
  const getPositiveNumbers = (arr: number[]) => {
    return arr.filter((num) => num > 0);
  };

  // Mendapatkan angka terkecil dari array
  const getSmallestNumber = (arr: number[]) => {
    return arr.length > 0 ? Math.min(...arr) : null;
  };

  // Menghasilkan bilangan acak positif yang lebih kecil dari smallestNumber
  const generateRandomNumber = () => {
    if (smallestNumber !== null && smallestNumber > 1) {
      const random = Math.floor(Math.random() * (smallestNumber - 1)) + 1;
      setRandomNumber(random);
    }
  };

  useEffect(() => {
    findSmallestNumber();
  }, [findSmallestNumber]);

  return (
    <div className="flex flex-col items-center">
      <button
        className="p-2 bg-purple-500 text-white rounded"
        onClick={generateRandomNumber}
      >
        click me
      </button>
      {smallestNumber !== null ? (
        <div>
          <p className="mt-4 text-lg">Smallest Number: {smallestNumber}</p>
          <p className="mt-4 text-lg">Number does not exist: {randomNumber}</p>
        </div>
      ) : (
        <p className="mt-4 text-lg">No positive numbers found.</p>
      )}
    </div>
  );
}

export default Tab3;
