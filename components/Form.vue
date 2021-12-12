<template>
<div>
  <ValidationObserver v-slot="{ invalid, touched, handleSubmit }" ref="addForm">
    <form @submit.prevent="handleSubmit(store)">
      <div class="row">
        <div class="col-md-5">
          <ValidationProvider name="name" rules="required|min:3" v-slot="{ errors }">
            <div class="form-group">
              <label>Request name</label>
              <input v-model="form.name" type="text" class="form-control" placeholder="Enter request name">
              <div class="invalid-feedback show" v-if="errors">
                {{ errors[0] }}
              </div>
            </div>
          </ValidationProvider>
        </div>
        <div class="col-md-3">
          <ValidationProvider name="delay" rules="required|between:1,10" v-slot="{ errors }">
            <div class="form-group">
              <label>Delay</label>
              <input v-model="form.delay" type="number" class="form-control" placeholder="Enter delay">
              <div class="invalid-feedback show" v-if="errors">
                {{ errors[0] }}
              </div>
            </div>
          </ValidationProvider>
        </div>
        <div class="col-md-1 m-t-1">
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate/dist/vee-validate.full';
import ItemService from '~/services/ItemService';

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },
  data() {
    return {
      form: {},
      itemService: new ItemService()
    };
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        delay: null
      }
      this.$nextTick(() => {
        this.$refs.addForm.reset()
      })
    },
    async store() {
      await this.itemService.store(this.form)
      await this.resetForm()
    },
  }
}
</script>

<style scoped>
.show {
  display: block;
}
.m-t-1 {
  margin-top: 1.5rem;
}
</style>
