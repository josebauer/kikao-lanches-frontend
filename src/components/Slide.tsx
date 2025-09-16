'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProductCard, { ProductType } from './ProductCard';

interface Props {
  cardapio: ProductType[]
}

export default function Slide({ cardapio }: Props) {

  let slideCount = 0

  if (cardapio.length >= 3) {
    slideCount = 3
  } else if (cardapio.length < 3) {
    slideCount = cardapio.length
  }

  let slideWidth
  if (slideCount > 2) {
    slideWidth = 1100
  } else if (slideCount < 2) {
    slideWidth = 430
  } else {
    slideWidth = 750
  }

  return (
    <>
      <div className='pb-5 flex gap-2 justify-center' data-aos="fade-right">
        <Splide
          hasTrack={true}
          options={{
            type: 'loop',
            perPage: slideCount,
            autoplay: true,
            interval: 4000,
            arrows: false,
            perMove: 1,
            width: slideCount * 400,
            gap: '1rem',
            pagination: false,
            drag: cardapio.length > 3 ? true : false,
            breakpoints: {
              1400: {
                width: slideWidth
              },
              1200: {
                perPage: slideCount < 2 ? 1 : 2,
                width: slideCount < 2 ? 400 : 750,
              },
              768: {
                perPage: 1,
                width: 400,
              },
              420: {
                width: 350
              },
              368: {
                width: 300,
              }
            }
          }}
        >
          {Array.isArray(cardapio) && cardapio.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}