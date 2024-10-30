import CommonHeading from "../../CommonHeading";
import {
  abstractGallery,
  abstractGalleryMobile,
  gallery4,
  gallerySmall1,
  gallerySmall2,
  images,
} from "../../../assets/dummyTwo";

const GalleryDescription: string =
  "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.";

const Gallery = () => {
  return (
    <div className="mb-[71px] lg:mb-[90px] 2xl:mb-[110px]">
      <div className="p-6 xl:p-[60px] 2xl:p-20 rounded-xl relative z-10 border border-gray15 overflow-hidden bg-gray10 flex flex-col gap-[55px] lg:gap-5">
        <picture className="absolute top-0 left-0 w-full h-full">
          <source
            srcSet={`${abstractGallery} 1920w, ${abstractGallery} 1440w, ${abstractGalleryMobile} 390w`}
            sizes="(max-width: 390px) 390px, (max-width: 1440px) 1440px, 1920px"
          />
          <img src={abstractGallery} alt="Abstract" className="" />
        </picture>
        <div className="grid grid-cols-2 gap-[10px] lg:gap-5 relative">
          {images.map((image) => (
            <div className="">
              <img
                src={`${image.image}`}
                alt="Gallery Image"
                className="rounded-[10px] w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="col-span-1 grid grid-cols-2 gap-[10px] lg:gap-5">
            <div>
              <img
                src={gallerySmall1}
                alt="Gallery Image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <img
                src={gallerySmall2}
                alt="Gallery Image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-5 relative">
          <CommonHeading
            title="Explore Estatein's World"
            description={GalleryDescription}
            className=""
          />
          <div>
            <img
              src={gallery4}
              alt="Gallery Image"
              className="rounded-[10px] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
