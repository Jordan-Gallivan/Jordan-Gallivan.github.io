/**
 * Converts the title string to a "linkable" string with no white space or ' characters.
 * @param title string to be converted.
 */
export default function linkToPost(title: string) {
  let url = title.replaceAll(/\s/g,"-")
  url.replaceAll(/'/g, "");
  return url;
}