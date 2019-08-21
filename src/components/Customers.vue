<template>
  <transition name='fade-forward'>
    <div class="paper">
      <h1>Settings</h1>  
        <div class="actions">
          <mu-raised-button type="submit" label="Update" icon="check" :disabled="isSaving" secondary/>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      email: '',
      isSaving: false
    }
  },
  computed: {},
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  .fields {
    .field { display:flex; margin-bottom:20px;
      label { align-items:center; display:flex; font-size:14px; font-weight:500; justify-content:flex-end; padding-right:18px; text-align:right; text-transform:uppercase; width:150px; }
      .input { display:flex; position:relative; width:310px; }
      input[type=text], input[type=email] { border:1px solid #d7dbe0; border-radius:3px; font-size:14px; max-height:35px; padding:12px 12px; }

      &.string {
        input { width:100%; }
      }
      &.date {
        input { width:33.33%; }
      }
    }
  }

  .actions { align-items:center; border-top:1px dotted #e9eaed; display:flex; justify-content:center; padding:20px; }
</style>