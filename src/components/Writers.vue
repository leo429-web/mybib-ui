<template>
  <div class="paper">
    <div id="title-bar">
      <div class="title">
        <label> Writers </label>
      </div>
      <div class="right-items">
        <div><mu-raised-button @click="addCustomerEvent" ref="addReferenceBtn" label="Add Writers" icon="add" primary/></div>
        <div><mu-flat-button @click="showImportSheet = true" ref="stylesBtn" label="Import" icon="file_upload" class="outline"/></div>
        <div><mu-flat-button @click="showStylesDialog = true" ref="stylesBtn" label="SpellCheck" icon="spellcheck" class="outline"/></div>
        <div><mu-flat-button @click="showSharesDialog = true" ref="stylesBtn" label="Share" icon="share" class="outline"/></div>
        <div><mu-raised-button @click="toggleDownloadSheet" label="Download Bibliography" ref="downloadBtn" icon="file_download" secondary/></div>
      </div>
      <mu-dialog :open="addCustomerButtonChecked" title="Input Customer Data:" @close="$emit('close')" :scrollable="true" :fullscreen="true">
        <div class="mb-dialog-body">
          <div class="center-column narrow reference-form">
            <div class="fields">
              <div>                
                  <div class="field string">
                    <label for="name">Name:</label>
                    <div class="input">
                      <input type="text" class="important" id="name" v-model="name" placeholder="Enter Your Name" >
                    </div>
                  </div>
                  <div class="field email">
                    <label for="email">Email:</label>
                    <div class="input">
                      <input type="email" class="important" v-model="email" placeholder="Enter email">
                    </div>
                  </div>
                  <div class="field password">
                    <label for="password">Password:</label>
                    <div class="input">
                      <input type="password" class="important" v-model="password" placeholder="Enter Password">
                    </div>
                  </div>
                  <div class="field string">
                    <label for="name">Role:</label>
                    <div class="input">
                      <input type="text" class="" v-model="role" placeholder="Enter Role">
                    </div>
                  </div>
                  <div class="field string">
                    <label for="phone">Phone:</label>
                    <div class="input">
                      <input type="text" class="" v-model="phone" placeholder="Enter Your Phone Number">
                    </div>
                  </div>
                  <div class="field string">
                    <label for="country">Country:</label>
                    <div class="input">
                      <input type="text" class="important" v-model="country" placeholder="Enter Your Country">
                    </div>
                  </div>
                  <div class="field string">
                    <label for="referred">Referred Name:</label>
                    <div class="input">
                      <input type="text" class="" v-model="referred" placeholder="Enter Referred Name">
                    </div>
                  </div>
                  <div class="field string">
                    <label for="university">University:</label>
                    <div class="input">
                      <input type="text" class="important" v-model="university" placeholder="Enter University">
                    </div>
                  </div>
                  <div class="actions" @click="saveCustomer" style="float: right;">
                    <mu-raised-button :disabled="isSaving" :label="isSaving? 'Saving...' : 'Save'" icon="check" secondary/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isLoading"  style="height:140px; position:relative;">
          <Spinner/>
        </div>    
      </mu-dialog>     
    </div>
    <div class="project-toolbar">
      <div class="left">
        <div class="select-all-references-checkbox" :class="{ 'is-checked': selectAllReferencesIsChecked}">
          <mu-checkbox v-model="selectAllReferencesIsChecked"/>
        </div>
        <div class="search-wrapper">
          <i class="material-icons" :class="{'active': toolbarOptions.searchTerm && toolbarOptions.searchTerm.length > 0}">search</i>
          <input v-model="toolbarOptions.searchTerm" type="text" class="search-box" placeholder="Search my customers" />
        </div>
        <button @click="" ref="filterReferencesMenuBtn" class="filter-references-menu-btn">
          <span>
            Filter <i class="material-icons" style="color:rgba(0,0,0,0.12)">arrow_drop_down</i>
          </span>
        </button>
      </div>
      <div class="right">
        <div class="display-mode-wrapper">
          <span class="display-mode-dropdown-label"> Sort: </span>
          <div class="mu-dropdown-menu">
            <svg viewBox="0 0 24 24" class="mu-dropDown-menu-icon references-toolbar__dropdown-menu-caret">
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
            <div class="mu-dropDown-menu-text display-mode-dropdown-label">
              <div class="mu-dropDown-menu-text-overflow">Author (Z-A)</div>
            </div>
          </div>
        </div>
        <div class="display-mode-wrapper">
          <span class="display-mode-dropdown-label"> show: </span>
          <div class="mu-dropdown-menu">
            <svg viewBox="0 0 24 24" class="mu-dropDown-menu-icon display-mode-dropdown-label">
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
            <div class="mu-dropDown-menu-text-overflow">Formatted citations</div>
          </div>
        </div>
      </div>
    </div>
    <div id="references" class="project-row">
      <ul mode="out-in">
        <li draggable="true" class="row" v-for="customer in customers">
        <div class="row-body" draggable="false">
          <label class="mu-checkbox no-label">
          <input value="" type="checkbox">
            <div class="mu-checkbox-wrapper">
              <div class="mu-ripple-wrapper mu-checkbox-ripple-wrapper">
              </div>
              <div class="mu-checkbox-icon">
                <svg viewBox="0 0 24 24" class="mu-checkbox-icon-uncheck mu-checkbox-svg-icon">
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
              </div> 
            </div>
          </label>
          <div class="avatar has-tooltip" aria-describedby="tooltip_gg8o296b58">
            <i class="material-icons">description</i></div>
            <div class="reference">
              <div class="formatted" @click="editCustomer" :id="customer.id">
                {{ customer.name + ", " + customer.email + ", " + customer.role + ", " + customer.phone + ", " + customer.country + ", " + customer.university_name }}
              </div> 
              <div class="subline">
              <div>
              In-text citation: 
              <span>(sdfg)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="options" @click="selectOptions" >          
          <button class=" has-tooltip" :id="customer.id">
          <i class="material-icons">more_vert</i>
          </button>
          <mu-popover :anchorOrigin="{vertical:'top', horizontal:'right'}" :targetOrigin="{vertical:'top', horizontal:'right'}" :open="isOption" :trigger="contextMenuTargetOrigin" @close="handleContextMenuClose" style="position:absolute;right:0px">
            <mu-menu desktop>
              <mu-menu-item title="Notes" leftIcon="before" @click="copyReferenceToClipboard()" />
              <mu-menu-item title="Copy bibliography entry to clipboard" leftIcon="notes" @click="copyReferenceToClipboard()" />
              <mu-menu-item title="Copy to clipboard" leftIcon="format_quote" @click="copyInTextCitationToClipboard()" />
              <mu-divider />
              <mu-menu-item title="Edit" leftIcon="edit" />
              <mu-menu-item title="Move to project..." leftIcon="content_cut" @click="openMoveReferenceDialog()" />
              <mu-menu-item title="Copy to project..." leftIcon="content_copy" @click="openCopyReferenceDialog()" />
              <mu-divider />
              <mu-menu-item title="Delete" leftIcon="delete" @click="deleteReference()" titleClass="red" leftIconClass="red" />
            </mu-menu>
          </mu-popover>                  
        </div>        
        </li>
      </ul>      
    </div>

  </div>
</template>

<script>

import ProjectViewToolbar from '@/components/ProjectViewToolbar';
import ProjectViewReference from '@/components/ProjectViewReference';
import DownloadOptionsBottomSheet from '@/components/DownloadOptionsBottomSheet';
import Spinner from '@/components/Spinner';
import ImportButton from '@/components/ImportButton';
import TooltipLg from '@/components/TooltipLg';

import _ from 'lodash';

export default {
  name: 'Writers',
  components: {
    ProjectViewToolbar,
    ProjectViewReference,
    DownloadOptionsBottomSheet,
    Spinner,
    ImportButton,
    TooltipLg
  },
  data () {
    return {
      toolbarOptions: { searchTerm: 'aaa', sources: [{indexOf: 1, name: 'add'}, {indexOf: 2, name: 'edit'}] },
      showStylesDialog: false,
      showImportSheet: false,
      showDownloadSheet: false,
      addReferenceTooltipTarget: null,
      firstReferenceTooltipTarget: null,
      stylesTooltipTarget: null,
      downloadTooltipTarget: null,
      selectAllReferencesIsChecked: false,
      addCustomerButtonChecked: false,
      isSaving: false,
      isUpdate: false,
      isOption: false,
      contextMenuTargetOrigin: {},
      getInformation: [],
      index: 0,
      customers: [{
        id: 1,
        name: 'aaa',
        email: 'aaa@email.com',
        role: 'aaaa',
        password: 'asdf',
        phone: '123',
        country: 'usa',
        referred_by: 'aaa',
        university_name: 'aaaa'
      },
      {
        id: 2,
        name: 'qqq',
        email: 'qqq@email.com',
        username: 'QQQ',
        role: 'qqq',
        suspended: 'eee',
        password: 'eee',
        phone: '234',
        country: 'usa',
        referred_by: 'aaa',
        referral_points: 'aaa',
        university_name: 'aaaa'
      }],
      name: '',
      email: '',
      role: '',
      password: '',
      phone: '',
      country: '',
      referred: '',
      university: ''
    }
  },
  computed: {
    selectedProject () {
      return this.$store.getters.user.projects.find((p) => {
        return p.id === parseInt(this.$route.params.projectId);
      });
    },
    filteredReferences () {
      const filteredReferences = this.selectedProject.references.filter(r => (Object.values(r.metadata).join(' ') + ' ' + r.formattedStr).toLowerCase().indexOf(this.toolbarOptions.searchTerm.toLowerCase()) !== -1 && this.toolbarOptions.sources.indexOf(r.sourceId) !== -1);
      // then sort if we're showing details
      return this.selectedProject.referenceDisplayMode === 'details' ? _.sortBy(filteredReferences, 'metadata.title') : filteredReferences;
    }
  },
  methods: {
    saveTitle () {
      const oldProjectTitle = this.selectedProject.title;
      this.selectedProject.title = this.$refs.titleInput.value;
      const updatedProject = this.selectedProject.save();

      if (!updatedProject) {
        // it failed. undo.
        this.selectedProject.title = oldProjectTitle;
      }
    },
    saveCustomer () {
      this.addCustomerButtonChecked = !this.addCustomerButtonChecked;
      console.log(this.password)
      const newCustomer = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        country: this.country,
        referred_by: this.referred,
        university_name: this.university
      }
      this.customers.push(newCustomer)
      this.name = ''
      this.email = ''
      this.password = ''
      this.phone = ''
      this.country = ''
      this.referred = ''
      this.university = ''
      return this.customers;
    },
    editCustomer (e) {
      this.index = e.target.id
      console.log(this.index)
      this.isUpdate = true
      this.addCustomerButtonChecked = !this.addCustomerButtonChecked;
      this.getInformation = e.target.innerText.split(',')
      this.name = this.getInformation[0]
      this.email = this.getInformation[1]
      this.role = this.getInformation[2]
      this.password = this.getInformation[3]
      this.phone = this.getInformation[4]
      this.country = this.getInformation[5]
      this.referred = this.getInformation[6]
      this.university = this.getInformation[7]
    },
    selectOptions (e) {
      this.index = e.target.id;
      this.contextMenuTargetOrigin = {vertical: 'top', horizontal: 'left'};

      this.contextMenuIsOpen = !this.contextMenuIsOpen;
      this.isOption = !this.isOption
    },
    addCustomerEvent () {
      this.addCustomerButtonChecked = !this.addCustomerButtonChecked;
    },
    importComplete (importToken) {
      this.$router.push({ name: 'ImportReferences', params: { projectId: this.$route.params.projectId, importToken: importToken } });
    },
    toggleDownloadSheet () {
      if (this.selectedProject.references.length === 0) {
        alert(`This project is empty. You need to add some ${this.$t('references')} before you can download the bibliography.`)
      } else {
        this.showDownloadSheet = true;
      }
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';
.references-toolbar {
  barckground-color: green!important;
}
#title-bar { align-items:center; border-bottom:1px dotted #e9eaed; display:flex; height:94px; justify-content: space-between; margin:0 20px;
    .title { align-items:center; color:#2c3e50; display:flex; flex:1 0 0; font-size:22px; margin-right:10px;
      input { background:transparent; border:1px solid transparent; border-radius:3px; overflow:hidden; text-overflow: ellipsis; white-space: nowrap; width:100%;
        &:hover { border:1px solid #d7dbe0; }
      }
    }
    .right-items { align-items:center; display:flex;
      > div { align-items:center; display:flex; margin-right:10px;
        &:last-child { margin-right:0;}
      }
    }
  }
  #references { bottom:0; left:0; overflow-x:hidden; overflow-y:auto; position:absolute; right:0; top:144px; }

  .truncate { max-width: 180px; overflow: hidden; white-space: nowrap; }

  .options-sheet { padding:20px;
    .sheet-title { font-size:22px; font-weight:400; text-align:center; margin-bottom:40px; }
    .options { align-items:center; display:flex; flex-wrap:wrap; margin:auto; width:440px;
      > div { align-items:center; display: flex; flex-direction:column; justify-content:center; margin:0 10px 20px; }
      .btn { align-items:center; display:flex; filter:grayscale(100%); height:90px; justify-content:center; margin-bottom: 10px; width:90px;
        i { font-size:40px; margin:0; }
        &:hover { filter:none;}
      }
    }
  }

  .main-close { position:absolute; right:20px; top:20px; }
  .project-toolbar { align-items:center; display:flex; border-bottom:1px dotted #e9eaed; height:50px; justify-content: space-between; left:0; margin:0 20px; position:absolute; right:0; top:94px;
    .left { align-items:center; display:flex;
      .select-all-references-checkbox { align-items:center; display:flex; margin-right:14px; opacity:0.3;
        &.is-checked { opacity:1; }
      }
      .search-wrapper { align-items:center; border-right:1px dotted #e9eaed; display:flex; margin-right:10px; position:relative;
        i { left:4px; position:absolute;
          &.active { color: $secondary-color; }
        }
        .search-box { font-size:14px; padding:4px 6px 4px 32px; transition:width 0.3s ease-in-out; width:200px;
          &:focus { width:250px; }
        }
      }
      .filter-references-menu-btn { border-right:1px dotted #e9eaed; font-size:13px; font-weight:500; margin-right:10px; text-transform:uppercase;
        &.active { color: $secondary-color; }
      }
      .reference-actions { left:10px; opacity:0; position:relative; transition: all 0.2s ease-in-out; visibility: hidden;
        &.reference-actions--show { left:0; opacity:1; visibility:visible; }
      }
    }
    .right { align-items:center; display:flex;
      .display-mode-wrapper { align-items:center; display:flex;
        .mu-dropDown-menu { height:auto !important; }
        .display-mode-dropdown-label { font-size:13px; font-weight:500; padding:0 26px 0 10px; text-transform:uppercase; }
        .display-mode-dropdown-caret { right:0; }
        .display-mode-dropdown-line { display:none; }
      }
    }
    .showing-count-btn { font-size:13px; font-weight:500; text-transform:uppercase; }
  }
  .filter-references-menu { padding:12px 14px 6px; }
  .row { position:relative; transition:all 0.5s ease; 
    .row-body { cursor:pointer; display:flex; padding: 16px 20px; width:100%;
      .mu-checkbox { margin-right:18px; margin-top:12px; opacity:0.3;

      }
    }
    .avatar { align-items:center; background:#bdbdbd; border-radius:50%; color:#fff; display:flex; height:40px; justify-content:center; margin-right:16px; margin-top:4px; width:40px;
      &.square { background:#fff; border-radius:5px; box-shadow:0 1px 2px rgba(0,0,0,0.2); object-fit:cover; }
    }
    .reference { flex:1; margin-right:150px;
      .formatted { line-height:1.5em; }
      .details { color:#959eba; line-height:1.6em;
        .detail { margin-right:6px; padding-right:8px;
          span { color:#2c3e50; }
          &:after { background:#959eba; content:''; display:inline-block; height:10px; left:8px; opacity:0.6; position:relative; width:1px;}
          &:last-child:after { display:none; }
        }
      }
      .subline { align-items:center; color:#747f8b; display:flex;
        .btn > i { margin-right:4px; }
      }
    }
    .options { background:rgba(255,255,255,0.9); border-radius:100px; display:flex; margin-top:-20px; padding:6px; position: absolute; right:10px; top:50%;
      button, .btn { align-items:center; display:flex; font-size:20px; margin-right:4px; padding:1px 6px; }
    }
    &:hover { background: linear-gradient(to right, #ffffff 0%,#f5f7f9 100%);
      .mu-checkbox { opacity:1; }
    }
    &.highlighted { background:linear-gradient(to right, #ffffff 0%,lighten(#fcc107, 30%) 100%); }
    &.selected { background:linear-gradient(to right, #ffffff 0%, lighten($secondary-color, 30%) 100%);
      .mu-checkbox { opacity:1; }
    }
  }

  .move-reference-select-field, .copy-reference-select-field { align-items:center; display:flex;
    .mu-text-field { min-height:auto; margin-bottom:0; margin-left:16px; margin-right:16px; position:relative; top:4px; width:200px; }
  }
    .reference-form {
    .fields {
      .field { display:flex; margin-bottom:20px;
        label { align-items:center; display:flex; font-size:14px; font-weight:500; justify-content:flex-end; padding-right:18px; text-align:right; text-transform:uppercase; width:150px; }
        .input { display:flex; position:relative; width:310px;
          .reference-form__today-btn { color:$secondary-color; font-size:13px; left:100%; margin-left:4px; position:absolute; text-transform:uppercase; top:7px; }
        }
        input[type=text], input[type=number],input[type=email],input[type=password] { border:1px solid #d7dbe0; border-radius:3px; font-size:14px; max-height:35px; padding:12px 12px;
          &.important { background: url("./../../static/images/star.svg") no-repeat right 4px center; background-size:20px 20px; border-color:rgba(#FF5722, 0.5); }
        }
        textarea { border:1px solid #d7dbe0; border-radius:3px; font-size:14px; min-height:100px; padding:12px 12px; width:100%; }

        &.names { display: block;
          .add-name-btn { margin-left:150px;
            i { margin-right:4px; }
          }
        }
        &.string {
          input { width:100%; }
        }
        &.email {
          input { width:100%; }
        }
        &.password {
          input { width:100%; }
        }
      }
    }
    .more-fields { color:#959eba; font-size:12px; text-align:right; text-transform:uppercase; }
  }
  .mu-popover {
    .sources-container { display:flex; flex-wrap:wrap; flex-direction:column; height:350px; margin:10px; width:638px; z-index:5;
      .btn { border-radius:3px; padding:10px; width:33%;
        &:hover { background: #f4f6f8; font-weight:500; }
      }
    }
  }
  .mu-popover { z-index:1000000000; left: 1074px; top: 0px;}
  .mu-dialog-body {
    max-height: 700px;
  }
  .reference-form-field__tooltip { max-width:210px; }
  .row { position:relative; transition:all 0.5s ease; 
    .row-body { cursor:pointer; display:flex; padding: 16px 20px; width:100%;
      .mu-checkbox { margin-right:18px; margin-top:12px; opacity:0.3;

      }
    }
    .avatar { align-items:center; background:#bdbdbd; border-radius:50%; color:#fff; display:flex; height:40px; justify-content:center; margin-right:16px; margin-top:4px; width:40px;
      &.square { background:#fff; border-radius:5px; box-shadow:0 1px 2px rgba(0,0,0,0.2); object-fit:cover; }
    }
    .reference { flex:1; margin-right:150px;
      .formatted { line-height:1.5em; }
      .details { color:#959eba; line-height:1.6em;
        .detail { margin-right:6px; padding-right:8px;
          span { color:#2c3e50; }
          &:after { background:#959eba; content:''; display:inline-block; height:10px; left:8px; opacity:0.6; position:relative; width:1px;}
          &:last-child:after { display:none; }
        }
      }
      .subline { align-items:center; color:#747f8b; display:flex;
        .btn > i { margin-right:4px; }
      }
    }
    .options { background:rgba(255,255,255,0.9); border-radius:100px; display:flex; margin-top:-20px; padding:6px; position: absolute; right:10px; top:50%;
      button, .btn { align-items:center; display:flex; font-size:20px; margin-right:4px; padding:1px 6px; }
    }
    &:hover { background: linear-gradient(to right, #ffffff 0%,#f5f7f9 100%);
      .mu-checkbox { opacity:1; }
    }
    &.highlighted { background:linear-gradient(to right, #ffffff 0%,lighten(#fcc107, 30%) 100%); }
    &.selected { background:linear-gradient(to right, #ffffff 0%, lighten($secondary-color, 30%) 100%);
      .mu-checkbox { opacity:1; }
    }
  }
  .mu-popover { position: absolute; right: 0px; }
  .move-reference-select-field, .copy-reference-select-field { align-items:center; display:flex;
    .mu-text-field { min-height:auto; margin-bottom:0; margin-left:16px; margin-right:16px; position:relative; top:4px; width:200px; }
  }

</style>