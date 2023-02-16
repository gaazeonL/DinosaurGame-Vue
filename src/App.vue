<template>
  <div>
    <canvas ref="canvasRef" style="border: 1px solid black"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gameConfig from "./game.config";
import refreshCanvas from "./tools/refreshCanvas";
const canvasRef = ref<HTMLCanvasElement>();
const left = ref(0);
const top = ref(0);
onMounted(() => {
  if (canvasRef.value) {
    const canvas = canvasRef.value;
    const { width, height } = gameConfig;
    canvas.width = width;
    canvas.height = height;

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        left.value -= 1;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        left.value += 1;
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        top.value -= 1;
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        top.value += 1;
      }
    });
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
  console.log(canvasRef.value);
});
</script>
<style scoped></style>
