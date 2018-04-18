<template>
  <div class="v-toast-wrapper" :class="{'v-show': display}" >
    <div class="v-toast-content">
        <span>{{text}}</span>
    </div>
  </div>
</template>
<style src="./toast.scss" lang="scss" scoped></style>
<script src="./toast.js"></script>
