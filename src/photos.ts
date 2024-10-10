import type { Photo } from "react-photo-album";
import  img1  from './image/chamthui1.jpg'
import  img2  from './image/z5916152701943_a8e69ec5b85e55d914e01aff6a5e51c5.jpg';
import  img3  from './image/z5916152706750_c3d66c5bfef0fb80d78cb7a1449d71a6.jpg';
import  img4 from './image/z5916152711428_a5a9dc873f83fc57d5d77a011bf36d6c.jpg';
import  img5  from './image/z5916152722849_d303e94f5e187bc76649a441a3287fa3.jpg';
import  img6  from './image/z5916152724971_850430958feb562feebd07d9cdd60249.jpg';
import  img7  from './image/z5916152735340_6ec17430e546038e5b0998680e92032e.jpg';
import  img8  from './image/z5916152736970_c7ecb0b752f7935dcfc2d3c5446a7b05.jpg';
import  img9  from './image/z5916152754145_a4545902eb04e1e9aede0dfd9c0eab82.jpg';
import  img10  from './image/z5916199880569_9c8855f0f447ffe4161016681607ad56.jpg';
import  img11  from './image/z5916199884442_cb9f92b7be302030d0947345052b7998.jpg';
import  img12  from './image/z5916199891431_e69ac8705bfa93bed7abdfa0ee14dc93.jpg';
import  img13  from './image/z5916199891632_140183e660715d6afdc2a4fadb7284c9.jpg';
import  img14  from './image/z5916199899850_729c5d611de728525087ad3c1fc59f9a.jpg';
import  img15  from './image/z5916199914075_a0c97ee98f9a8807217f4af7f0a236a7.jpg';
import  img16  from './image/z5916199917396_fcb71b8813c8e8cd7e55b039027c8f6e.jpg';
import  img17  from './image/z5916199923553_16163804c5627cf48bb22e99d010ae88.jpg';
import  img18  from './image/z5916199927045_b00db4e1dad6183d350c3d2a0fc83e07.jpg';
import  img19  from './image/z5916199934168_bbfa9e017de30c5486d8477d97701646.jpg';
import  img20  from './image/z5916199937176_78b205e7640b62a94f1d81a5ec7b6a42.jpg';
import  img21  from './image/z5916199949591_c8960e6625b5447f06ee5985ecf1f7bd.jpg';
import  img22  from './image/z5916199957960_f2c4bf3f2ccd0c354ce5215984205ec3.jpg';
import  img23  from './image/z5916199959177_460046ec9155f7704e3ba1b9f8da9e7f.jpg';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return asset;  // Trả về trực tiếp asset thay vì tạo URL
}


const photos = [
  {
    asset: img1,
    width: 1926,
    height: 2568,
    alt: "Hiking boots",
  },
  {
    asset:img2,
    width: 1537,
    height: 2048,
    alt: "Purple petaled flowers near a mountain",
  },
  {
    asset: img3,
    width: 1534,
    height: 2048,
    alt: "A person pointing at a beige map",
  },
  {
    asset: img4,
    width: 1534,
    height: 2048,
    alt: "Two hikers walking toward a snow-covered mountain",
  },
  {
    asset: img5,
    width: 1525,
    height: 2048,
    alt: "A silver and black coffee mug on a brown wooden table",
  },
  {
    asset: img6,
    width: 1533,
    height: 2048,
    alt: "A worm's eye view of trees at night",
  },
  {
    asset: img7,
    width: 1536,
    height: 2048,
    alt: "A pine tree forest near a mountain at sunset",
  },
  {
    asset: img8,
    width: 1560,
    height: 2048,
    alt: "Silhouette photo of three hikers near tall trees",
  },
  {
    asset: img9,
    width: 1536,
    height: 2048,
    alt: "A person sitting near a bonfire surrounded by trees",
  },
  {
    asset: img10,
    width: 1534,
    height: 2048,
    alt: "Green moss on gray rocks in a river",
  },
  {
    asset: img11,
    width: 1536,
    height: 2048,
    alt: "Landscape photography of mountains",
  },

  {
    asset: img12,
    width: 1484,
    height: 2048,
    alt: "A man wearing a black jacket and backpack standing on a grass field during sunset",
  },
  {
    asset: img13,
    width: 1536,
    height: 2048,
    alt: "Green pine trees under white clouds during the daytime",
  },
  {
    asset: img14,
    width: 1284,
    height: 715,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: img15,
    width: 1920,
    height: 2560,
    alt: "A tall mountain with a waterfall running down its side",
  },
  {
    asset: img16,
    width: 1440,
    height: 1440,
    alt: "Blue mountains",
  },
  {
    
    asset: img17,
    width: 1152,
    height: 2048,
    alt: "Green trees on a brown mountain under a blue sky during the daytime",
  },
  {
    asset: img18,
    width: 1922,
    height: 2558,
    alt: "A red flower on a green grass field during the daytime",
  },
  {
    asset: img19,
    width: 960,
    height: 1278,
    alt: "A sign warning people not to disturb nature",
  },
  {
    asset: img20,
    width: 1924,
    height: 2560,
    alt: "A small creek in Yosemite National Park",
  },
  {
    asset: img21,
    width: 1242,
    height: 2208,
    alt: "A small creek in Yosemite National Park",
  },
  {
    asset: img22,
    width: 1278,
    height: 2048,
    alt: "A small creek in Yosemite National Park",
  },
  {
    asset: img23,
    width: 1537,
    height: 2048,
    alt: "A pathway between green trees during daytime",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;
