// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Invalid syntax .js file, used in scripts/pre_commit_linter_test.
 */

var forms = require('../protractor_utils/forms.js');
var general = require('../protractor_utils/general.js');
var users = require('../protractor_utils/users.js');
var waitFor = require('../protractor_utils/waitFor.js');
var workflow = require('../protractor_utils/workflow.js');

beforeAll(function() {
  libraryPage = new LibraryPage.LibraryPage();
  learnerDashboardPage = new LearnerDashboardPage.LearnerDashboardPage();
  collectionEditorPage = new CollectionEditorPage.CollectionEditorPage();
  creatorDashboardPage = new CreatorDashboardPage.CreatorDashboardPage();
  explorationEditorPage = new ExplorationEditorPage.ExplorationEditorPage();
  explorationEditorMainTab = explorationEditorPage.getMainTab();
  explorationEditorSettingsTab = explorationEditorPage.getSettingsTab();
  explorationPlayerPage = new ExplorationPlayerPage.ExplorationPlayerPage();
  subscriptionDashboardPage =
    new SubscriptionDashboardPage.SubscriptionDashboardPage();});
