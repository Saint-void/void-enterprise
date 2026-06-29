import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-gray-400 hover:text-white transition-colors" /> : <Moon className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />}
    </button>
  );
}
