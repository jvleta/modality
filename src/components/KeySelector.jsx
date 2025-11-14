const KeySelector = ({ selectedKey, onChange, keyOrderList, keyDataMap }) => (
  <section className="space-y-5 border-b border-white/10 bg-zinc-900/60 px-6 py-8 text-center md:px-12 md:py-10">
    <label
      htmlFor="keySelect"
      className="block text-lg font-semibold tracking-wide text-zinc-100 md:text-xl"
    >
      Select a Major Key
    </label>
    <div className="flex justify-center">
      <select
        id="keySelect"
        value={selectedKey}
        onChange={onChange}
        aria-label="Select a major key"
        className="w-full max-w-xs rounded-xl border border-forest-500/40 bg-zinc-950/70 px-4 py-3 text-base text-zinc-100 transition focus:outline-none focus:ring-2 focus:ring-forest-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        <option value="">-- Choose a Key --</option>
        {keyOrderList.map((key) => (
          <option key={key} value={key}>
            {keyDataMap[key].name}
          </option>
        ))}
      </select>
    </div>
  </section>
);

export default KeySelector;
