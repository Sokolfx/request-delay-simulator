<template>
<div class="row" v-if="item">
  <div class="col-md-12" v-loading="loading">
  </div>
  <br>
  <div class="col-md-12">
    {{item.name}}
    <br>
    {{item.delay}}
  </div>
</div>
</template>

<script>
import ItemService from '~/services/ItemService';
import DelayHelper from '~/helpers/delay';

export default {
  data() {
    return {
      item: null,

      itemService: new ItemService(),
      delayHelper: new DelayHelper(),

      index: 0,
      timerDelay: null,
      loading: false,
    };
  },
  computed: {
    items () {
      return this.$store.state.items.items
    },
    state () {
      return this.$store.state.items.state
    }
  },

  watch: {
    state(value) {
      if(value) {
        this.action()
      } else {
        this.done()
      }
    }
  },

  methods: {
    action() {
      const status = this.renderNext()
      if(status) {
        this.delay()
      }
    },

    renderNext() {
      let status = false
      if(this.items[this.index]) {
        this.item = JSON.parse(JSON.stringify(this.items[this.index]))
        this.index = this.index + 1
        status = true
      } else {
        this.done()
      }

      return status
    },

    async delay() {
      if(this.item.delay > 0) {
        this.loading = true
        this.timerDelay = setTimeout(() => {
          this.item.delay -= 1
          this.delay()
        }, 1000)
      } else {
        this.loading = false
        await this.delayHelper.sleep(250);
        this.action()
      }
    },

    async done() {
      this.item = null
      this.index = 0
      this.loading = false

      clearTimeout(this.timerDelay)
      await this.itemService.action(false)
    }
  }
}
</script>

<style scoped>

</style>
