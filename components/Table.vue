<template>
<div class="row">
  <div class="col-md-9">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col" v-for="column, index in columns" :key="index">
          {{ column.name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item, index in items" :key="index">
        <th scope="row">{{item.name}}</th>
        <th scope="row">{{item.delay}}</th>
        <th scope="row">
          <button type="button"
                  class="btn btn-outline-danger"
                  @click="remove(index)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </th>
      </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<script>
import ItemService from '~/services/ItemService';

export default {
  data() {
    return {
      itemService: new ItemService(),
      columns: [
        { name: 'Name' },
        { name: 'Delay' },
        { name: '' }
      ]
    };
  },

  computed: {
    items () {
      return this.$store.state.items.items
    }
  },

  methods: {
    async remove(index) {
      await this.itemService.delete(index)
    }
  }
}
</script>

<style scoped>

</style>
