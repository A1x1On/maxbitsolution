<template>
  <div class="alert">
    <!-- :color="alert[1].color" -->
    <div v-for="alert in alerts" :key="alert[0]" class="alert__info-block" :style="{ backgroundColor: alert[1].color }">
      {{ alert[1].text }}
    </div>
  </div>
</template>

<script lang="ts">
import type { IAlertMap, IAlertResp } from "@/types/alert";

export default defineComponent({
  setup() {
    const alerts = ref<Map<string, IAlertMap>>(new Map());
    const color = ref<string>();

    const success = (response: IAlertResp | string) => {
      setAlert(response, "green");
    };

    const error = (response: IAlertResp | string) => {
      setAlert(response, "red");
    };

    const info = (response: IAlertResp | string) => {
      setAlert(response, "blue");
    };

    const warning = (response: IAlertResp | string) => {
      setAlert(response, "yellow");
    };

    const caught = (response: IAlertResp | string | unknown) => {
      setAlert(formatCatch(response), "red");
    };

    const formatCatch = (err: unknown | any): string => {
      const message = err?.message ? err.message : undefined;
      const message2 = err?.error?.message ? err.error.message : undefined;
      const message3 = "Something went wrong";

      return message || message2 || message3;
    };

    const setAlert = (response: IAlertResp | string, color: string) => {
      const id = self.crypto.randomUUID();

      alerts.value.set(id, {
        text: getMsg(response),
        color,
      });

      setTimeout(() => remove(id), 3000);
    };

    const getMsg = (response: IAlertResp | string) => {
      if (typeof response === "string") {
        return response;
      }

      const { status, msg } = response;
      if (status === 1) {
        color.value = "success";
        return msg;
      } else {
        color.value = "error";
        return "ERROR: " + msg;
      }
    };

    const remove = (id: string) => {
      alerts.value.delete(id);
    };

    return {
      alerts,
      color,
      success,
      info,
      warning,
      error,
      caught,
    };
  },
});
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: grid;
  grid-gap: 0.5em;
  z-index: 111111;

  &__info-block {
    background: blue;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
  }
}
</style>
