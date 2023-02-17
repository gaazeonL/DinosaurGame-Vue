<template>
  <div>
    <canvas ref="canvasRef" style="border: 1px solid black"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import gameConfig from "./game.config";
import refreshCanvas from "@tools/refreshCanvas";
import { initControl } from "@tools/controlConfig";
import playerMove from "@hooks/playerMove";
const canvasRef = ref<HTMLCanvasElement>();
const left = ref(0);
const top = ref(0);
const leftMove = playerMove(() => {
  left.value -= 1;
});
const rightMove = playerMove(() => {
  left.value += 1;
});
const upMove = playerMove(() => {
  top.value -= 1;
});
const downMove = playerMove(() => {
  top.value += 1;
});

onMounted(() => {
  if (canvasRef.value) {
    const canvas = canvasRef.value;
    const { width, height } = gameConfig;
    canvas.width = width;
    canvas.height = height;
    initControl([
      {
        key: "ArrowLeft",
        action: leftMove,
      },
      {
        key: "ArrowRight",
        action: rightMove,
      },
      {
        key: "ArrowUp",
        action: upMove,
      },
      {
        key: "ArrowDown",
        action: downMove,
      },
    ]);
    const ctx = canvasRef.value.getContext("2d");
    if (ctx) {
      refreshCanvas(
        ctx,
        {
          width,
          height,
        },
        () => {
          ctx.strokeRect(left.value, top.value, 150, 110);
        }
      );
    }
  }
});
</script>
<style scoped></style>
