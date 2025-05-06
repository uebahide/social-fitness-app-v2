/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export function useOutsideClick(handler: () => void, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    },
    [handler, listenCapturing],
  );

  return ref;
}
