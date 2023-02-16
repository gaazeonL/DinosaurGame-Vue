<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gameConfig from "./game.config";
const canvasRef = ref<HTMLCanvasElement>();
onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = gameConfig.width;
    canvasRef.value.height = gameConfig.height;
  }
  console.log(canvasRef.value);
});
</script>
<style scoped></style>
