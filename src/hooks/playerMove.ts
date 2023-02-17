import { Ref, ref } from "vue";

function oneceDebounce(
  fnc: (...args: any) => any,
  wait: number,
  timer: Ref<undefined | NodeJS.Timer>
) {
  return function () {
    if (!timer.value) {
      timer.value = setInterval(fnc, wait);
    }
    return timer.value;
  };
}

export default function (fnc: (...args: any) => any) {
  const MoveInterval = ref<undefined | NodeJS.Timer>();
  return {
    debounceFn: oneceDebounce(fnc, 1000 / 60, MoveInterval),
    cleardebounceFn: () => {
      clearInterval(MoveInterval.value);
      MoveInterval.value = undefined;
    },
  };
}
