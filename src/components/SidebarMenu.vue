<template>
  <div class="projects">    
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'dashboard' ? 'selected' : ''" @click="getFolderName" id="dashboard" @contextmenu.prevent="toggleContextMenu"  draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Dashboard" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'profile' ? 'selected' : ''" @click="getFolderName" id="profile" @contextmenu.prevent="toggleContextMenu" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="My Profile" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="{ open:isOpen }" @click="toggleFolderState" @contextmenu.prevent="toggleContextMenu" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons">{{ isOpen ? 'folder_open' : 'folder' }}</i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Users" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
        <div class="project-folder-icons-right">
          <mu-circular-progress v-if="isBusy" :size="26" color="#d8d8d8" :strokeWidth="2"/>
          <button v-if="!isBusy" @click.stop="toggleContextMenu" ref="contextMenuTrigger" class="project-folder-context-menu-btn">
            <span>
              <i class="material-icons">more_vert</i>
            </span>
          </button>
          <i class="material-icons">{{ isOpen ? 'expand_less' : 'expand_more' }}</i>
        </div>
      </div>      
      <div v-show="isOpen" class="project-row n1"   draggable="false" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <div class="project-row-btn" :class="folderName === 'customers' ? 'selected' : ''" @click="getFolderName" id="customers" draggable="false">
          <i></i>
          <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Customers" :disabled="!isRenaming" ref="titleInput" class="title" />
        </div>        
      </div>
      <div v-show="isOpen" class="project-row n2"   draggable="false" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <div class="project-row-btn" :class="folderName === 'writers' ? 'selected' : ''" @click="getFolderName" id="writers" draggable="false">
          <i></i>
          <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Writers" :disabled="!isRenaming" ref="titleInput" class="title" />
        </div>        
      </div>
      <div v-show="isOpen" class="project-row n3"  draggable="false" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <div class="project-row-btn" :class="folderName === 'editors' ? 'selected' : ''" @click="getFolderName" id="editors" draggable="false">
          <i></i>
          <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Editors" :disabled="!isRenaming" ref="titleInput" class="title" />
        </div>        
      </div>
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'courses' ? 'selected' : ''"  id="courses" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Courses" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'stream' ? 'selected' : ''" id="stream" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Activity Stream" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'messages' ? 'selected' : ''" id="messages" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Messages" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'payment' ? 'selected' : ''" id="payment" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Payment" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'referrals' ? 'selected' : ''" id="referrals" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Referrals" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
    <div class="project-folder" :class="{hovering: isHoveringOver}">
      <div class="project-folder-btn" :class="folderName === 'settings' ? 'selected' : ''" id="settings" @contextmenu.prevent="toggleContextMenu" @click="getFolderName" draggable="true" @dragstart="onDragStart" @dragover.stop="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
        <i class="project-folder-icon-left material-icons"></i>
        <input type="text" @keyup.enter="$event.target.blur()" @blur="saveRename" @keyup.esc="cancelRename" value="Settings" :disabled="!isRenaming" ref="nameInput" class="project-folder-title" :class="{ 'is-renaming': isRenaming }" />        
      </div>      
    </div>
  </div>
</template>

<script>
import bowser from 'bowser';
export default {
  name: 'ProjectsFolder',
  props: ['name', 'projects'],
  data () {
    return {
      isRenaming: false,
      isBusy: false,
      isOpen: false,
      contextMenuIsOpen: false,
      contextMenuTrigger: null,
      isHoveringOver: false,
      folderName: null
    }
  },
  computed: {
    selectedProject () {
      return this.$store.getters.user.projects.find((p) => {
        return p.id === parseInt(this.$route.params.projectId);
      });
    }
  },
  methods: {
    toggleFolderState () {
      if (!this.isRenaming) this.isOpen = !this.isOpen;
      this.folderName = 'Users';
    },
    getFolderName (e) {
      this.folderName = e.target.id;
      return this.folderName;
    },
    toggleContextMenu () {
      this.contextMenuIsOpen = !this.contextMenuIsOpen;
    },
    handleContextMenuClose () {
      this.contextMenuIsOpen = false;
    },
    renameFolder () {
      this.contextMenuIsOpen = false;
      this.isRenaming = true;
      this.$nextTick(() => {
        this.$refs.nameInput.select();
      })
    },
    cancelRename () {},
    saveRename () {
      window.getSelection().removeAllRanges();
      this.isRenaming = false;
      if (this.$refs.nameInput.value === this.name) {
        // it didn't change
        return;
      }
      this.$emit('onRenameFolder', this.name, this.$refs.nameInput.value)
      this.$refs.nameInput.value = ''; // this is a workaround to make IE reset the input to the beginning of the value
    },
    ungroupFolder () {
      this.$emit('onUngroupFolder');
    },
    onDragStart (ev) {
      if (bowser.msie || bowser.msedge) {
        alert('This browser doesn\'t support folders. Please use another browser like Chrome if you want to use folders.');
      }

      ev.dataTransfer.dropEffect = 'move';
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setDragImage(ev.target, 0, 0);
      ev.dataTransfer.setData('folder', JSON.stringify({ name: this.name }));
    },
    onDragOver (ev) {
      ev.preventDefault();
      const dragType = ev.dataTransfer.types[0];
      if (dragType === 'folder') {
        // it's a folder being dragged. Return.
        ev.dataTransfer.dropEffect = 'none';
        ev.dataTransfer.effectAllowed = 'none';
        return;
      } else if (dragType === 'project') {
        this.isHoveringOver = true;
      } else {
        // it's something it shouldn't be (like a file or a tag)
        ev.dataTransfer.dropEffect = 'none';
        ev.dataTransfer.effectAllowed = 'none';
        return;
      }
    },
    onDragLeave (ev) {
      ev.preventDefault();
      this.isHoveringOver = false;
    },
    onDrop (ev) {
      ev.preventDefault();
      const dragType = ev.dataTransfer.types[0];
      const itemBeingDragged = JSON.parse(ev.dataTransfer.getData(dragType));
      if (dragType === 'folder') {
        // can't drag a folder onto a folder
        this.isHoveringOver = false;
        return;
      } else if (dragType === 'project') {
        this.$emit('onMoveProject', itemBeingDragged.id, this.projects[0], 0);
      }

      this.isHoveringOver = false;
    }
  },
  updated () {
    this.contextMenuTrigger = this.$refs.contextMenuTrigger;

    // open the folder if the currently selected project is in it
    if (this.selectedProject && this.projects.some(p => p.id === this.selectedProject.id)) {
      this.isOpen = true;
    }
  }
}
</script>

<style lang="scss">
@import '../variables.scss';
.projects { background:#F5F7F9; bottom:0; left:0; overflow-y:auto; overflow-x:hidden; position:absolute; padding:20px 20px 46px 0; top:0; width:304px;
  .new-project-btn { border-radius:0 30px 30px 0; height:53px; margin-bottom:3px; padding:0 10px 0 12px; width:100%; z-index:2;
    i { margin:0 17px 0 0; }
    &:hover { background: rgba(0,0,0,0.04);}
  }

  &::-webkit-scrollbar-track { margin:10px 0; }
} 

.project-folder { padding: 3px 0; position:relative;
  .project-folder-btn { align-items: center; background:#ffffff; border-left:4px solid $secondary-color; border-radius:0 100px 100px 0; box-shadow:0 1px 2px rgba(0,0,0,0.2); cursor:pointer; display:flex; height:53px; padding:0 16px; width:100%;
    .project-folder-icon-left { color:$secondary-color; left:-2px; position:relative; text-align:left; width:34px; }
    .project-folder-title { background:transparent; border:none; color:inherit; cursor:inherit; margin-right:24px; overflow: hidden; pointer-events: none; text-overflow: ellipsis; white-space: nowrap; width:146px; // this is to keep Edge happy
      &.is-renaming { cursor:text; font-style: italic; pointer-events: all; }
    }
    .project-folder-icons-right { align-items:center; display:flex; position:absolute; top:17px; right:10px;
      button { opacity:0.7;
        &:hover { opacity:1 }
      }
      .project-folder-context-menu-btn { visibility:hidden; }
    }
    &.selected { font-weight:500; }
    &.disabled { pointer-events: none; }
    &:hover {
      .project-folder-context-menu-btn { visibility:visible; }
    }
    &.open { border-radius:0 30px 0 0; }
  }
  &.hovering { outline: 3px solid $secondary-color; }
}
.project-row { padding: 3px 0; position:relative;
    .project-row-btn { align-items: center; background:#ffffff; border-left:4px solid; border-radius:0 100px 100px 0; box-shadow:0 1px 2px rgba(0,0,0,0.2); cursor:pointer; display:flex; height:53px; padding:0 16px; 
      i { font-style: normal; width:34px; }
      .title { background:transparent; border:none; color:inherit; cursor:inherit; margin-right:24px; overflow: hidden; pointer-events: none; text-overflow: ellipsis; white-space: nowrap; width:170px; } // the width is to keep Edge happy
      &.selected { box-shadow:inset 0 1px 1px rgba(0,0,0,0.2); font-weight:500; }
      &.disabled { pointer-events: none; }
    }
    .right-icon { position:absolute; top:17px; right:10px;
      button { visibility:hidden; opacity:0.7;
        &:hover { opacity:1 }
      }
    }
    &:hover .right-icon button { visibility:visible; }
    &.is-renaming {
      .project-row-btn { background:rgba(214, 214, 214, 0.3) !important; border-color: #d6d6d6 !important;
        .title { cursor:text; font-style: italic; pointer-events: all; }
      }
    }
    &.hovering-top {
      &:before { background:$secondary-color; top:-1px; content:''; position:absolute; pointer-events: none; width:100%; height:3px; z-index:2;}
    }
    &.hovering-middle {
      .project-row-btn { outline: 3px solid $secondary-color; }
    }
    &.hovering-bottom {
      &:after { background:$secondary-color; bottom:-2px; content:''; position:absolute; pointer-events: none; width:100%; height:3px; z-index:2;}
    }
    &.n1 {
      .project-row-btn { border-color: #673AB7;
        &.selected { background:rgba(103, 58, 183, 0.3); }
      }
    }
    &.n2 {
      .project-row-btn { border-color: #3F51B5;
        &.selected { background:rgba(63, 81, 181, 0.3); }
      }
    }
    &.n3 {
      .project-row-btn { border-color: #009688;
        &.selected { background:rgba(0, 150, 136, 0.3); }
      }
    }
    &.n4 {
      .project-row-btn { border-color: #4CAF50;
        &.selected { background:rgba(76, 175, 80, 0.3); }
      }
    }
    &.n5 {
      .project-row-btn { border-color: #CDDC39;
        &.selected { background:rgba(205, 220, 57, 0.3); }
      }
    }
    &.n6 {
      .project-row-btn { border-color: #FFC107;
        &.selected { background:rgba(255, 193, 7, 0.3); }
      }
    }
    &.n7 {
      .project-row-btn { border-color: #FF9800;
        &.selected { background:rgba(255, 152, 0, 0.3); }
      }
    }
    &.n8 {
      .project-row-btn { border-color: #FF5722;
        &.selected { background:rgba(255, 87, 34, 0.3); }
      }
    }
    &.n9 {
      .project-row-btn { border-color: #E91E63;
        &.selected { background:rgba(232, 32, 99, 0.3); }
      }
    }
    &.n0 {
      .project-row-btn { border-color: #9C27B0;
        &.selected { background:rgba(156, 39, 176, 0.3); }
      }
    }
  }
  .project-folder-btn.selected {
    background-color: rgba(63,81,181,.3);
  }
  .project-row-btn.selected {
    background-color: rgba(63,81,181,.3);
  }
  .project-folder {
    .project-row { padding:0; 
      .project-row-btn { border-color: $secondary-color; border-radius:0; box-shadow:0; }
      .right-icon { top:14px; }
      &:last-child {
        .project-row-btn { border-radius: 0 0 30px 0; }
      }
    }
  }

  .merge-project-select-field { align-items:center; display:flex;
    .mu-text-field { min-height:auto; margin-bottom:0; margin-left:16px; margin-right:16px; position:relative; top:4px; width:200px; }
  }
</style>