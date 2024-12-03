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
import { createUnifiedTheme, themes } from '@backstage/theme';
import { components } from './componentOverrides';
import { pageTheme } from './pageTheme';
import { ThemeColors } from './types';

export const customLightTheme = (themeColors: ThemeColors) =>
  createUnifiedTheme({
    palette: {
      ...themes.light.getTheme('v5')?.palette,
      ...(themeColors.primaryColor && {
        primary: {
          ...themes.light.getTheme('v5')?.palette.primary,
          main: themeColors.primaryColor,
        },
      }),
      navigation: {
        background: '#222427',
        indicator: themeColors.navigationIndicatorColor || '#0066CC',
        color: '#ffffff',
        selectedColor: '#ffffff',
        navItem: {
          hoverBackground: '#3c3f42',
        },
      },
      text: {
        primary: '#151515',
        secondary: '#757575',
      },
    },
    defaultPageTheme: 'home',
    pageTheme: pageTheme(themeColors),
    components: components(themeColors, 'light'),
  });
