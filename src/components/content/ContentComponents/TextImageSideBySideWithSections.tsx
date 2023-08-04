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

import { CardDetailsProps, ProviderProps } from './ContentComponentsTypes'
import './ContentComponents.scss'
import { Trans } from 'react-i18next'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { Typography } from '../../basic/Typography'
import { AlignedText } from './components/AlignedText'
import { CardWithoutImage } from './components/CardWithoutImage'
import { RenderImage } from './components/RenderImage'
import { TitleDescriptionAndSectionlink } from './components/TitleDescriptionAndSectionlink'

export const TextImageSideBySideWithSections = ({
  provider,
  baseUrl,
  scrollTop,
  showScroll,
}: {
  provider: ProviderProps
  baseUrl: string
  scrollTop: () => void
  showScroll: boolean
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  })
  return (
    <div className="imageVideoTextSideBySideWithSections">
      <div className={'imageVideoTextSideBySide padding-bottom-20'}>
        <div
          className={'titleDescriptionBody'}
          style={{
            width: !provider.imagePath || isMobile ? '100%' : '50%',
          }}
        >
          <TitleDescriptionAndSectionlink
            showScroll={showScroll}
            provider={provider}
            scrollTop={scrollTop}
          />
          {provider.subDescriptions && (
            <>
              <Typography className={'providerDescription'}>
                <Trans
                  key={provider.subDescriptions.title}
                  i18nKey={provider.subDescriptions.title}
                  components={[
                    <span key={provider.subDescriptions.title}></span>,
                    <br key={provider.subDescriptions.title} />,
                    <p
                      key={provider.subDescriptions.title}
                      className="padding-left-30"
                    ></p>,
                  ]}
                ></Trans>
              </Typography>
              {provider?.subDescriptions?.sections.map(
                (section: { title: string; link: string; value: string }) => (
                  <>
                    <Typography>
                      <Trans
                        key={section.title}
                        i18nKey={section.title}
                        components={[
                          <span key={section.title}></span>,
                          <br key={section.title} />,
                          <span
                            key={section.title}
                            className="subDescription"
                          ></span>,
                        ]}
                      ></Trans>
                    </Typography>
                    <Typography
                      className={
                        'padding-left-30 highlightText padding-bottom-20'
                      }
                      onClick={() => window.open(section.link, '_blank')}
                      key={section.value}
                    >
                      {section.value}
                    </Typography>
                  </>
                )
              )}
            </>
          )}
          {provider.detailsWithoutImageRow1 && (
            <Box
              className={'gridStyle'}
              sx={{
                marginBottom:
                  provider.detailsWithoutImageRow2 &&
                  provider.detailsWithoutImageRow2.length > 0
                    ? '0px'
                    : '180px',
                gridTemplateColumns: 'repeat(3, 1fr)',
                width: '100% !important',
              }}
            >
              {provider.detailsWithoutImageRow1.map(
                (card: CardDetailsProps) => {
                  return (
                    <CardWithoutImage key={card.title} detail={card} grid={3} />
                  )
                }
              )}
            </Box>
          )}
        </div>
        {provider.imagePath !== '' && (
          <RenderImage
            url={`${baseUrl}${provider.imagePath}` ?? ''}
            additionalStyles={{
              textAlign: 'center',
            }}
            width="50%"
          />
        )}
      </div>
      {provider.subsections && (
        <>
          {provider.subsections.map((section) => (
            <AlignedText key={section.title} provider={section} align="left" />
          ))}
        </>
      )}
    </div>
  )
}
