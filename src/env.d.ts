/// <reference types="astro/client" />

declare module '*.JPG' {
  const image: import('astro').ImageMetadata;
  export default image;
}
declare module '*.JPEG' {
  const image: import('astro').ImageMetadata;
  export default image;
}
declare module '*.PNG' {
  const image: import('astro').ImageMetadata;
  export default image;
}
declare module '*.AVIF' {
  const image: import('astro').ImageMetadata;
  export default image;
}
/// <reference types="astro/client" />

declare module '*.json' {
  const value: any;
  export default value;
}
