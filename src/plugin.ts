/*
 * Copyright 2020 RoadieHQ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  createApiFactory,
  createPlugin,
  createRouteRef,
} from '@backstage/core';
import { githubPullRequestsApiRef, GithubPullRequestsClient } from './api';
import PullRequestsPage from './components/PullRequestsPage';

export const rootRouteRef = createRouteRef({
  path: '',
  title: 'github-pull-requests',
});
export const projectRouteRef = createRouteRef({
  path: ':id',
  title: 'GitHub Pull requests for project',
});

export const plugin = createPlugin({
  id: 'github-pull-requests',
  apis: [
    createApiFactory(githubPullRequestsApiRef, new GithubPullRequestsClient()),
  ],

  // register
  // register({ router }) {
  //   router.addRoute(rootRouteRef, PullRequestsPage);
  //   router.addRoute(projectRouteRef, PullRequestsPage);
  // },
});
