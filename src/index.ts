import Page from "./page";

const page = new Page();

page.load("resources", "Emoji.md").then(() => {
  console.log(page.hasNext());
  while (page.hasNext()) {
    console.log(page.next());
  }
});