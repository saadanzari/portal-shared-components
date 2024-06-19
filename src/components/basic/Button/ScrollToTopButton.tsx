/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
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

import { IconButton } from '../IconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useMediaQuery } from '@mui/material'

export interface ScrollToTopButtonProps {
  onButtonClick: React.MouseEventHandler
}

export const ScrollToTopButton = ({
  onButtonClick,
}: ScrollToTopButtonProps) => {
  const tab = useMediaQuery('(max-width:1023px)')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          position: 'fixed',
          marginRight: tab ? '20px' : '40px',
          bottom: tab ? '20px' : '40px',
        }}
      >
        <IconButton color="secondary" onClick={onButtonClick}>
          <ArrowUpwardIcon
            sx={{
              fontSize: tab ? '1.2em' : '2em',
            }}
          />
        </IconButton>
      </div>
    </div>
  )
}
