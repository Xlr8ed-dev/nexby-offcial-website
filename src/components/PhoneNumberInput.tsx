import { useState, useRef, useEffect } from "react";

interface Country {
  name: string;
  code: string;
  dial_code: string;
}

const countries: Country[] = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
];

export default function PhoneNumberInput() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Country>(countries[0]);
  const [number, setNumber] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  // 👉 Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {/* Input Wrapper */}
      <div
        className="
          flex items-center gap-2
          w-full h-11 rounded-xl border-2 border-purple-400/30
          bg-white/10 backdrop-blur-sm px-3
          text-white placeholder-purple-300/50
          outline-none focus-within:border-purple-400
          focus-within:ring-2 focus-within:ring-purple-400/30
          transition-all
          hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20
        "
      >
        {/* Country Selector Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-1 text-white px-2 py-1 rounded-lg
            transition-all
            hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30
          "
        >
          {selected.dial_code}
          <span className="text-xs">▼</span>
        </button>

        {/* Number Input */}
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="
            w-full bg-transparent outline-none text-white
            placeholder-purple-300/50
          "
          placeholder="Enter phone number"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 top-12 w-52 z-50
            bg-gray-900 border border-purple-400/30
            rounded-xl shadow-lg overflow-hidden
          "
        >
          {countries.map((c) => (
            <div
              key={c.code}
              onClick={() => {
                setSelected(c);
                setOpen(false);
              }}
              className="
                px-3 py-2 text-white cursor-pointer
                hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30
              "
            >
              {c.name} ({c.dial_code})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
