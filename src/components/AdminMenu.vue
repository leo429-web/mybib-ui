<template>
  <div class="adminmenu">
    <div class="list-group">
        <div class="dropdown" v-for="link in menuData">        
          <a v-if="link.child === 'false'" :class=" link.id == menuIndex ? 'list-group-item active' : 'list-group-item'" :key="link.id" @click="chagneTab" :name="link.id"> {{ link.content }} </a>
          <a v-if="link.child === 'true'" :class=" link.id == menuIndex ? 'list-group-item active dropdown-toggle' : 'list-group-item'" :key="link.id" @click="chagneTab" :name="link.id" data-toggle="dropdown"> {{ link.content }} 
            <span class="caret"></span>            
          </a>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuIndex: 'dash',
      menuData: [{ id: 'dash', content: 'DashBoard', child: 'false' },
        { id: 'profile', content: 'My Profile', child: 'false' },
        {
          id: 'users',
          content: 'Users',
          child: 'true',
          childs: [ {id: 'customers', content: 'Customers'},
          {id: 'writers', content: 'Writers'},
          {id: 'editors', content: 'Editors'}
          ]
        },
        { id: 'courses', content: 'Courses', child: 'false' },
        { id: 'stream', content: 'Activity Stream', child: 'false' },
        { id: 'messages', content: 'Messages', child: 'false' },
        { id: 'payment', content: 'Payment', child: 'false' },
        { id: 'refferals', content: 'Refferals', child: 'false' },
        { id: 'settings', content: 'Settings', child: 'false' }
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