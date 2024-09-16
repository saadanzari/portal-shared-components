/********************************************************************************
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
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

import { type StoryFn } from '@storybook/react'
import { ErrorBar as Component } from './ErrorBar'

export default {
  title: 'ErrorBar',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const ErrorBar = Template.bind({})
ErrorBar.args = {
  errorText: 'Something went wrong. Try again',
  handleButton: () => {},
  showButton: true,
  buttonText: 'Try Again',
}
