import { useEffect, useRef } from "react";

export function useAutoScroll(deps = []) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        containerRef.current.scrollTop =
            containerRef.current.scrollHeight;
    }, deps);

    return containerRef;
}
