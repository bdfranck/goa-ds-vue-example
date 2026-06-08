<script setup lang="ts">
import AgeVerificationStep from "./components/AgeVerificationStep.vue";
</script>

<template>
  <goa-one-column-layout>
    <section slot="header">
      <goa-app-header version="2" url="#" heading="Apply for a service">
        <a slot="utilities" href="#">Sign in</a>
      </goa-app-header>
    </section>

    <goa-page-block width="704px">
      <AgeVerificationStep />
    </goa-page-block>

    <section slot="footer">
      <goa-app-footer version="2"></goa-app-footer>
    </section>
  </goa-one-column-layout>
</template>
