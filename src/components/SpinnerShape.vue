<template>
  <svg width="50" height="14" viewBox="0 0 50 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <symbol id="sym" viewBox="0 0 50 14" fill="#E0E0E0">
      <rect x="1" y="2" width="10" height="10" rx="2"/>
      <rect x="13" y="2" width="10" height="10" rx="2"/>
      <rect x="25" y="1" width="12" height="12" rx="6"/>
      <rect x="39" y="2" width="10" height="10" rx="2"/>
    </symbol>
    <mask id="m" maskUnits="userSpaceOnUse">
      <use xlink:href="#sym"/>
    </mask>
    <g mask="url(#m)">
      <use xlink:href="#sym"/>
      <rect class="spinner-shape" x="0" y="1" width="12" height="12" rx="4" fill="#3E98F0"/>
    </g>
  </svg>
</template>
