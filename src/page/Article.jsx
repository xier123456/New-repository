
import Img1 from "../assets/ArticleImg1.png";
import { Link } from "react-router-dom";

const Article = () => {



  const articles = [
    {
      id: 1,
      title: "react-useState",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
    {
      id: 2,
      title: "react-useEffect",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
     {
      id: 3,
      title: "react-useContext",
      excerpt: "",
      author: "HaoWhite",
      date: "2023-07-15",
      readTime: "8分钟阅读",
      to: "",
    },
  ];
  return (
    <div className="pt-30 min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 ">
      <h1 className="m-5 text-5xl font-bold text-center ">技术笔记</h1>
      {articles.map((article) => (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-[55vw] m-auto p-4">
          <Link to={article.to}>
            <div
              key={Math.random()}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* <Image
              src='#'
              alt={`Gallery Image `}
              fluid
              className="w-full h-80 object-cover"
            /> */}

              <img
                className="w-full h-55 object-cover"
                alt="daisy "
                src={Img1}
              />

              <div className="p-8">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Article;
