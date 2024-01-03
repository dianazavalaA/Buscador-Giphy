<template>
  <main class="bg-slate-100 min-h-screen min-w-screen">
    <nav class="flex w-100 min-h-20 justify-center gap-8 bg-blue-400 text-white text-lg items-center">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/fav">Favoritos</RouterLink>
      <RouterLink to="/history">Historial</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>