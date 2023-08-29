import { ShimmerPostList , ShimmerPostItem } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
        <ShimmerPostItem
        card
        title
        cta
        imageType="thumbnail"
        imageWidth={20}
        imageHeight={20}
        contentCenter
        />
        <ShimmerPostItem
        card
        title
        cta
        imageType="thumbnail"
        imageWidth={20}
        imageHeight={20}
        contentCenter
        />
    </>
    
    )

}

export default Shimmer