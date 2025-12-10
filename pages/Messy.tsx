import React from "react";

export const Messy: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-neutral-200 pb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Messy Data Sandbox
        </h2>
        <p className="text-neutral-500 text-sm mt-1">
          Challenging patterns: broken semantics, missing classes, inline
          styles, and traps.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Scenario 1: No Classes */}
        <section className="border border-neutral-200 p-6 bg-white rounded-lg">
          <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
            Challenge 1: No Classes (Structure Only)
          </h3>
          <div className="bg-neutral-50 p-4 border border-neutral-200 border-dashed">
            <div>
              <div>
                <h4>Item 101</h4>
                <p>Value: 100</p>
              </div>
              <hr className="border-neutral-200 my-2" />
              <div>
                <h4>Item 102</h4>
                <p>Value: 200</p>
              </div>
              <div style={{ display: "none" }}>
                <h4>Item 999</h4>
                <p>Value: 9999 (Trap)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenario 2: Attribute Data */}
        <section className="border border-neutral-200 p-6 bg-white rounded-lg">
          <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
            Challenge 2: Data Attributes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              data-price="45.00"
              title="Coffee Maker"
              className="bg-neutral-100 p-4 rounded text-center"
            >
              <div className="font-bold">Product A</div>
              <div className="text-xs text-neutral-500">Inspect for price</div>
            </div>
            <div
              data-price="99.00"
              title="Blender"
              className="bg-neutral-100 p-4 rounded text-center"
            >
              <div className="font-bold">Product B</div>
              <div className="text-xs text-neutral-500">Inspect for price</div>
            </div>
            <div
              data-price="12.50"
              title="Toaster"
              className="bg-neutral-100 p-4 rounded text-center"
            >
              <div className="font-bold">Product C</div>
              <div className="text-xs text-neutral-500">Inspect for price</div>
            </div>
          </div>
        </section>

        {/* Scenario 3: Span Soup */}
        <section className="border border-neutral-200 p-6 bg-white rounded-lg">
          <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
            Challenge 3: Span Soup
          </h3>
          <div
            id="soup-container"
            className="font-serif text-lg leading-relaxed p-4 bg-neutral-50 border border-neutral-200"
          >
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Title:{" "}
            </span>
            <span>The </span>
            <span>Great </span>
            <span>Gatsby</span>
            <br />
            <span style={{ color: "#666" }}>Author: </span>
            <span>F. Scott </span>
            <span style={{ display: "inline-block" }}>Fitzgerald</span>
            <span style={{ opacity: 0 }}>Hidden Text</span>
          </div>
        </section>

        {/* Scenario 4: Scroll Trap */}
        <section className="border border-neutral-200 p-6 bg-white rounded-lg">
          <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
            Challenge 4: Infinite Scroll Simulation
          </h3>
          <div className="h-48 overflow-y-scroll border border-neutral-300 bg-neutral-50 rounded">
            <div className="p-4 space-y-2">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="py-2 px-3 bg-white border border-neutral-200 rounded text-sm shadow-sm flex justify-between"
                >
                  <span>Scroll Item {i + 1}</span>
                  <span className="text-neutral-400 font-mono text-xs">
                    ID: {Math.random().toString(36).substr(2, 6)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenario 5: Random IDs */}
        <section className="border border-neutral-200 p-6 bg-white rounded-lg">
          <h3 className="font-bold text-neutral-900 mb-4 text-sm uppercase tracking-wider">
            Challenge 5: Randomized IDs
          </h3>
          <ul className="space-y-2">
            {["Alpha", "Beta", "Gamma", "Delta"].map((item) => (
              <li
                key={item}
                id={`item-${Math.random().toString(36).substr(2, 5)}`}
                className="p-3 border border-neutral-200 bg-neutral-50 rounded flex justify-between items-center"
              >
                <span className="font-medium">{item}</span>
                <span className="text-[10px] bg-neutral-200 px-2 py-1 rounded font-mono text-neutral-600">
                  Dynamic ID
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
