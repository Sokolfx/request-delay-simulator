<template>
  <div class="row">
    <div class="col-md-1">
      <button type="button"
              class="btn btn-outline-success"
              @click="action(true)"
      >
        Run
      </button>
    </div>
    <div class="col-md-1">
      <button type="button"
              class="btn btn-outline-primary"
              @click="action(false)"
      >
        Stop
      </button>
    </div>
  </div>
</template>

<script>
import ItemService from '~/services/ItemService';

export default {
  data() {
    return {
      itemService: new ItemService()
    };
  },
  methods: {
    async action(state) {
      await this.itemService.action(state)
    }
  }
}
</script>

<style scoped>

</style>
