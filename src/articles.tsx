import retroPcs from "./assets/images/image-retro-pcs.jpg";
import topLatops from "./assets/images/image-top-laptops.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";
import { ArticleGlanceProps } from "./atomic/ArticleGlance/ArticleGlance";

const articles: Array<ArticleGlanceProps> = [
  {
    heading: "Reviving Retro PCs",
    imgUrl: retroPcs,
    number: 1,
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    heading: "Top 10 Laptops of 2022",
    imgUrl: topLatops,
    number: 2,
    text: "Our best picks for various needs and budgets.",
  },
  {
    heading: "The Growth of Gaming",
    imgUrl: gamingGrowth,
    number: 3,
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

export default articles;
