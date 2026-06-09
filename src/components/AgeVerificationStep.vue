<script setup lang="ts">
import { ref } from "vue";

interface DatePickerChangeDetail {
  value: Date | string | null;
  valueStr: string;
}

const birthday = ref("");
const error = ref(false);

const onBirthdayChange = (event: Event): void => {
  const customEvent = event as CustomEvent<DatePickerChangeDetail>;
  birthday.value = customEvent.detail?.valueStr ?? "";
  error.value = false;
};

const handleSubmit = (): void => {
  if (!birthday.value) {
    error.value = true;
  }
};
</script>

<template>
  <form>
    <goa-link
      version="2"
      href="#"
      color="secondary"
      leadingicon="arrow-back"
      size="small"
      mt="xl"
      mb="2xl"
    >
      Back
    </goa-link>

    <goa-text
      as="div"
      size="body-l"
      mt="none"
      mb="xs"
    >
      Verify your age
    </goa-text>
    <goa-text
      as="h2"
      mt="none"
      mb="xl"
    >
      What is your date of birth?
    </goa-text>

    <goa-callout
      v-if="error"
      version="2"
      type="emergency"
      heading="There is a problem"
      emphasis="low"
      mb="xl"
    >
      <ul>
        <li>Enter your date of birth</li>
      </ul>
    </goa-callout>

    <goa-form-item
      version="2"
      for="birthday"
      :error="error ? 'Enter your date of birth' : undefined"
    >
      <goa-date-picker
        id="birthday"
        version="2"
        name="birthday"
        type="input"
        :error="error"
        @_change="onBirthdayChange"
      />
    </goa-form-item>

    <goa-button
      version="2"
      type="primary"
      mt="xl"
      mb="none"
      @click="handleSubmit"
    >
      Continue
    </goa-button>
  </form>
</template>

<style scoped>
ul {
  margin: 0;
}
</style>
