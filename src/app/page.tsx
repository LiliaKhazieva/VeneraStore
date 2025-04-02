import { Collection } from "@/components/collection/Collection";
import { Categories } from "@/components/categories/Categories";
import { CommunityWidget } from "@/components/home-community/CommunityWidget";
import { Carousel } from "@/components/carousel/Carousel";

import { collectionData } from "@/components/collection/collection.data";
import { communityData } from "@/components/home-community/community.data";
import { sliderCollectionData } from "@/components/slider/sliderCollection.data";
import { Slider } from "@/components/slider/Slider";
import { sliderData } from "@/components/carousel/carousel.data";
import { SliderProducts } from "@/components/home-slider-product/SliderProducts";

export default function HomePage() {
  return (
    <>
      <Carousel
        arr={sliderData.slice(0, 5)}
        transitionDuration={300}
        autoPlay={false}
        autoPlayTime={5000}
        infinite={true}
      />
      <Collection data={collectionData} />
      <Categories />
      <Slider arr={sliderCollectionData} />
      <CommunityWidget arr={communityData} />
      <SliderProducts arr={sliderCollectionData} />
    </>
  );
}
