<template>
  <div class="item">
    <h3>{{item.label}} <small>{{item.date}}</small> <small>{{item.cost}}</small></h3>
    <p>{{item.description}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => null
      }
    },
    name: 'item'
  }
</script>