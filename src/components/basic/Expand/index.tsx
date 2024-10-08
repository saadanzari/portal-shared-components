/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
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

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Collapse } from '@mui/material'
import { useState } from 'react'
import { Typography } from '../Typography'

export const Expand = ({
  label,
  expandedLabel,
  text,
}: {
  label: string
  expandedLabel: string
  text: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Typography
        className={'cx-expand__text'}
        variant="caption3"
        sx={{ display: 'flex', color: open ? '#0F71CB' : '' }}
      >
        {open ? (
          <KeyboardArrowUpIcon
            className={'cx-expand__arrow-up'}
            onClick={() => {
              setOpen(!open)
            }}
            sx={{ height: '21px', cursor: 'pointer' }}
          />
        ) : (
          <KeyboardArrowDownIcon
            className={'cx-expand__arrow-down'}
            onClick={() => {
              setOpen(!open)
            }}
            sx={{ height: '21px', cursor: 'pointer' }}
          />
        )}
        {open ? expandedLabel : label}
      </Typography>
      <div style={{ width: '100%' }} className={'cx-expand__text'}>
        <Collapse in={open}>
          <Typography variant="caption3">{text}</Typography>
        </Collapse>
      </div>
    </>
  )
}
