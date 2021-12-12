<template>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <div class="row">
      <div class="col-md-9">
        <Form />
        <Table />
      </div>
      <div class="col-md-3">
        <Item />
      </div>
    </div>
    <ItemAction />
  </div>
</template>

<script>
import Item from "~/components/Items/Item";
import ItemAction from "~/components/Items/ItemAction";
export default {
  components: {
    Item, ItemAction
  }
}
</script>
