<template>
  <div class="adminmenu">
    <div class="list-group">
      <a v-for="link in menuData" :class=" link.id == menuIndex ? 'list-group-item active' : 'list-group-item'" :key="link.id" @click="chagneTab" > {{ link.content }} </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuIndex: 'home',
      menuData: [{ id: 'home', content: 'Home' },
        { id: 'dash', content: 'DashBoard' },
        { id: 'profile', content: 'My Profile' },
        { id: 'users', content: 'Users' },
        { id: 'courses', content: 'Courses' },
        { id: 'stream', content: 'Activity Stream' },
        { id: 'messages', content: 'Messages' },
        { id: 'payment', content: 'Payment' },
        { id: 'refferals', content: 'Refferals' },
        { id: 'settings', content: 'Settings' }
      ]
    }
  },
  methods: {
    chagneTab (e) {
      console.log(e.target.name)
      this.menuIndex = e.target.name
      return this.menuIndex
    }
  }
}
</script>

<style lang="scss">
  .adminmenu { background:#F5F7F9; bottom:0; left:0; overflow-y:auto; overflow-x:hidden; position:absolute; padding:20px 20px 46px 0; top:0; width:304px;
    
    &::-webkit-scrollbar-track { margin:10px 0; }
  }
</style>