let keydownFn: (e: KeyboardEvent) => void;
let keyupFn: (e: KeyboardEvent) => void;
export function initControl(
  config: {
    key: string;
    action: {
      debounceFn: () => NodeJS.Timer;
      cleardebounceFn: () => void;
    };
  }[]
) {
  keydownFn = (e: KeyboardEvent) => {
    config.forEach((item) => {
      if (e.key === item.key) {
        item.action.debounceFn();
      }
    });
  };
  keyupFn = (e: KeyboardEvent) => {
    config.forEach((item) => {
      if (e.key === item.key) {
        item.action.cleardebounceFn();
      }
    });
  };
  document.addEventListener("keydown", keydownFn);
  document.addEventListener("keyup", keyupFn);
}

export function clearControl() {
  document.removeEventListener("keydown", keydownFn);
  document.removeEventListener("keyup", keyupFn);
}
