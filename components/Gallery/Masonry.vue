<script setup>
defineProps({
  content: {
    type: Array,
    default: () => []
  }
})

function convertArrayToNestedArrays(array) {
  const nestedArrays = [];
  const chunkSize = 3;

  for (let i = 0; i < array.length; i += chunkSize) {
    nestedArrays.push(array.slice(i, i + chunkSize));
  }

  return nestedArrays;
}

const originalArray = [
  '/img/gallery/item1.jpg',
  '/img/gallery/item5.jpg',
  '/img/gallery/item3.jpg',
  '/img/gallery/item10.jpg',
  '/img/gallery/item7.jpg',
  '/img/gallery/item8.jpg',
  '/img/gallery/item12.jpg',
  '/img/gallery/item2.jpg',
  '/img/gallery/item11.jpg',
  '/img/gallery/item9.jpg',
  '/img/gallery/item6.jpg',
  '/img/gallery/item4.jpg',
];
const nestedArrays = convertArrayToNestedArrays(originalArray);
console.log("nestedArrays: ", nestedArrays);
</script>
<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    <div v-for="item in nestedArrays" class="grid gap-4">
      <div v-for="it in item">
        <img class="h-auto max-w-full block object-cover object-center w-full rounded-lg" :src="it"
          alt="gallery-photo" />
      </div>
    </div>
  </div>
</template>