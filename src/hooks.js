import { useEffect, useState } from "react";

export const useDebounce = (text) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(text);
    }, 500);

    return () => clearTimeout(id);
  }, [text]);

  return value;
};
