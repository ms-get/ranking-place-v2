import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

export const useAmplitude = () => {
  useEffect(() => {
    if (window.location.href.includes("ranking-place.com") && !localStorage.getItem("admin"))
      amplitude.init("455a32731ac5286f2096e3a08c2d4a39");
  }, []);
};
