/*
 * Copyright 2024 The Backstage Authors
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
import React from 'react';
import { Page, Header, TabbedLayout } from '@backstage/core-components';
import { UserSettingsThemeToggle } from '@backstage/plugin-user-settings';

import { FormComponents } from './FormComponents';
import { PaperExamples } from './PaperExamples';
import { InlineStyles } from './InlineStyles';
import { TabExamples } from './TabExamples';

export const MUI4TestPage = () => {
  return (
    <Page themeId="tool">
      <Header title="MUI v4 / Material UI Test Page">
        <UserSettingsThemeToggle />
      </Header>
      <TabbedLayout>
        <TabbedLayout.Route
          path="/"
          title="Form components"
          children={<FormComponents />}
        />
        <TabbedLayout.Route
          path="/paper-examples"
          title="Paper examples"
          children={<PaperExamples />}
        />
        <TabbedLayout.Route
          path="/inline-styles"
          title="Inline styles"
          children={<InlineStyles />}
        />
        <TabbedLayout.Route
          path="/tabs"
          title="Tabs"
          children={<TabExamples />}
        />
      </TabbedLayout>
    </Page>
  );
};