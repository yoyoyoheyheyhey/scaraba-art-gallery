<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Tiff from 'tiff.js';

const canvasRef = ref<HTMLCanvasElement|null>(null);

onMounted(() => {
  loadTiffImage();
});

function loadTiffImage() {
  const url = "https://arweave.net/U9DHrA7MgUjZ2D-uBb-i-8vmXjeYHVysaaJjL5QCq1o";
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.arrayBuffer();
    })
    .then(buffer => {
      console.log('come', buffer)
      const tiff = new Tiff({ buffer: buffer });
      const tiffCanvas = tiff.toCanvas();
      if (tiffCanvas && canvasRef.value) {
        console.log('come')
        canvasRef.value.appendChild(tiffCanvas);
      }
    })
    .catch(error => console.error('Error loading the TIFF image:', error));
}
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>
