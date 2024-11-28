<script setup>
</script>
<template>
  <LayoutsTheNavbar />
  <div class="flex overflow-hidden bg-gray-50 dark:bg-gray-700 pt-16 h-screen">
    <LayoutsTheSidebar />
    <div id="main-content" class="h-full w-full bg-gray-100 dark:bg-gray-700 relative overflow-y-auto">
      <main>
        <slot />
      </main>
      <LayoutsFooter />
    </div>
  </div>
  <LayoutsFloatButton />
</template>