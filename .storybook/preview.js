/********************************************************************************
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import React from 'react'
import { SharedThemeProvider } from '../src/components/basic/SharedThemeProvider'
import { SharedCssBaseline } from '../src/components/basic/SharedCssBaseline'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18next'

const withI18next = (Story) => {
  return (
    <SharedThemeProvider>
      <SharedCssBaseline />
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </SharedThemeProvider>
  );
};

export const decorators = [withI18next];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}