declare module 'remark-html' {
  const html: any;
  export default html;
}
// declare module '*.css';
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
