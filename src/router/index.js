import Vue from 'vue';
import Router from 'vue-router';
import qs from 'qs';

import ProjectView from '@/components/ProjectView';
import NewReferenceSearch from '@/components/NewReferenceSearch';
import NewReference from '@/components/NewReference';
import EditReference from '@/components/EditReference';
import ReferenceNotes from '@/components/ReferenceNotes';
import ImportReferences from '@/components/ImportReferences';
import Settings from '@/components/Settings';
import SettingsChangePassword from '@/components/SettingsChangePassword';
import DashBoard from '@/components/DashBoard';
import Profile from '@/components/Profile';
import Customers from '@/components/Customers';
import Writers from '@/components/Writers';
import Editors from '@/components/Editors';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/writers',
      name: 'Writers',
      component: Writers
    },
    {
      path: '/editors',
      name: 'Editors',
      component: Editors
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/settings/change-password',
      name: 'SettingsChangePassword',
      component: SettingsChangePassword
    },
    {
      path: '/import/:importToken',
      name: 'ImportExternal',
      component: ImportReferences
    },
    {
      path: '/projects',
      redirect: { name: 'Root' }
    },
    {
      path: '/projects/:projectId',
      name: 'Project',
      component: ProjectView
    },
    {
      path: '/projects/:projectId/citation/new',
      name: 'NewReferenceSearch',
      component: NewReferenceSearch
    },
    {
      path: '/projects/:projectId/citation/new/:sourceId',
      name: 'NewReference',
      component: NewReference
    },
    {
      path: '/projects/:projectId/citation/:referenceId/notes',
      name: 'ReferenceNotes',
      component: ReferenceNotes
    },
    {
      path: '/projects/:projectId/citation/:referenceId/edit/:sourceId',
      name: 'EditReference',
      component: EditReference
    },
    {
      path: '/projects/:projectId/import/:importToken',
      name: 'ImportReferences',
      component: ImportReferences
    }
  ],
  parseQuery (query) {
    return qs.parse(query);
  },
  stringifyQuery (query) {
    let result = qs.stringify(query, { encodeValuesOnly: true });

    return result ? ('?' + result) : '';
  }
});
