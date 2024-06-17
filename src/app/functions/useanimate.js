import { useState,useEffect,useRef } from 'react';
import autoAnimate from '@formkit/auto-animate'
/**
 * AutoAnimate hook for adding dead-simple transitions and animations to react.
 * @param options - Auto animate options or a plugin
 * @returns
 */
 function useAutoAnimate(options = {}) {
    const element = useRef(null);
    const [controller, setController] = useState();
    const setEnabled = (enabled) => {
        if (controller) {
            enabled ? controller.enable() : controller.disable();
        }
    };
    useEffect(() => {
        if (element.current instanceof HTMLElement)
            setController(autoAnimate(element.current, options));
    }, []);
    return [element, setEnabled];
}

export { useAutoAnimate };