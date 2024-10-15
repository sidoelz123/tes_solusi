import { useState } from "react";
import TabsComponent from "./component/TabsComponent";
import TitleComponent from "./component/TitleComponent";
import Tab1 from "./view/Tab1";
import Tab2 from "./view/Tab2";
import Tab3 from "./view/Tab3";

function App() {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isTabDisabled, setisTabDisabled] = useState<boolean>(false);
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);

  const handleNumberInput = (number: string) => {
    setInputNumber(number);
  };

  const nextTab = (tabIndex: number, disableTab: boolean = false) => {
    if (disableTab) {
      setisTabDisabled(true);
    }
    setActiveTab(tabIndex);
  };

  //untuk mengatur hasil generate dari Tab2
  const handleGeneratedNumbers = (numbers: number[]) => {
    setGeneratedNumbers(numbers);
  };

  return (
    <div className="font-jetbrains-mono mx-10">
      <TitleComponent title="Ihza Maulana Zakiya" />
      <TabsComponent
        tabs={[
          {
            label: "Tab 1",
            content: (
              <Tab1
                nextTab={() => nextTab(1, true)}
                onNumberInput={handleNumberInput}
                isDisabled={isTabDisabled}
              />
            ),
          },
          {
            label: "Tab 2",
            content: (
              <Tab2
                inputNumber={inputNumber}
                nextTab={() => nextTab(2)}
                onGenerate={handleGeneratedNumbers}
              />
            ),
          },
          {
            label: "Tab 3",
            content: <Tab3 generatedNumbers={generatedNumbers} />,
          },
        ]}
        activeTab={activeTab}
        setActiveTab={(index) => {
          if (!(index === 0 && isTabDisabled)) {
            setActiveTab(index);
          }
        }}
      />
      <TitleComponent title="15 Oktober 2024" />
    </div>
  );
}

export default App;
