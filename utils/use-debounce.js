import { useState, useEffect } from "react";

export function useDebounce(current, delay = 500) {
  const [value, setValue] = useState(current);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(current);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [current, delay]);

  return value;
}
