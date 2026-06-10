<script setup lang="ts">
import { ref } from "vue";
import { GoabButton, GoabLink, GoabText, GoabCallout, GoabFormItem, GoabDatePicker } from "@abgov/vue-components";

interface DatePickerChangeDetail {
  value: Date | string | null;
  valueStr: string;
}

const birthday = ref("");
const error = ref(false);

const onBirthdayChange = (detail: DatePickerChangeDetail): void => {
  birthday.value = detail.valueStr ?? "";
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
    <GoabLink
      href="#"
      color="secondary"
      leading-icon="arrow-back"
      size="small"
      mt="xl"
      mb="2xl"
    >
      Back
    </GoabLink>

    <GoabText
      as="div"
      size="body-l"
      mt="none"
      mb="xs"
    >
      Verify your age
    </GoabText>
    <GoabText
      as="h2"
      mt="none"
      mb="xl"
    >
      What is your date of birth?
    </GoabText>

    <GoabCallout
      v-if="error"
      type="emergency"
      heading="There is a problem"
      emphasis="low"
      mb="xl"
    >
      <ul>
        <li>Enter your date of birth</li>
      </ul>
    </GoabCallout>

    <GoabFormItem
      for="birthday"
      :error="error ? 'Enter your date of birth' : undefined"
    >
      <GoabDatePicker
        id="birthday"
        name="birthday"
        type="input"
        :error="error"
        @on-change="onBirthdayChange"
      />
    </GoabFormItem>

    <GoabButton
      type="primary"
      mt="xl"
      mb="none"
      @on-click="handleSubmit"
    >
      Continue
    </GoabButton>
  </form>
</template>

<style scoped>
ul {
  margin: 0;
}
</style>
