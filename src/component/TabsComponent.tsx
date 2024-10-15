import React from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

function TabsComponent({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="md:h-screen h-full">
      <div className="flex justify-center">
        <nav className="flex items-center gap-2" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <div key={index}>
              <button
                className={`shrink-0 rounded-lg p-2 text-sm font-medium ${
                  activeTab === index
                    ? "bg-sky-100 text-sky-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
              {index < tabs.length - 1 && (
                <span className="text-gray-500"> &gt; </span>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-4">{tabs[activeTab] && tabs[activeTab].content}</div>
    </div>
  );
}

export default TabsComponent;
