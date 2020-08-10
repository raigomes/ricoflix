import React from 'react'
import { VideoCardGroupContainer, Title, ExtraLink } from './styles'
import Video from '../Video'
import Slider, { SliderItem } from '../Slider'

function VideoCardGroup ({
  ignoreFirstVideo,
  category
}) {
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target='_blank'>
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.titulo}>
              <Video
                url={video.url}
                color={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default VideoCardGroup
