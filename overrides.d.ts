// Overrides SVG module typings to be able to import them on .ts and .tsx files
declare module "*.svg" {
  const content: string;
  export default content;
}
