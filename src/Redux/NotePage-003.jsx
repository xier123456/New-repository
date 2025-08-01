
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";




const NotePageWithComments = () => {
  const currentArticle = useSelector((state) => state.articleCard.notesCard);
  //  const res=useSelector(state=>state.articleCard)
  // const[articles]=useState(res.notesCard)
  const{id}= useParams()
  const currentNote=currentArticle.find(node=>node.id.toString()===id)

  

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-10 bg-white border-b border-[#EDEFF2] shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* 左侧返回按钮 */}
          <Link
            to="/article"
            className="flex items-center text-[#8A94A6] hover:text-[#4A6FA5] transition-colors"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>返回列表</span>
          </Link>

          {/* 右侧操作区 */}
          <div className="flex items-center gap-3">
            <button className="text-[#8A94A6] hover:text-[#4A6FA5] transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 主体内容区 */}
      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-3xl">
        {/* 面包屑导航 */}

        {/* 笔记标题区 */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3748] mb-4 leading-tight">
         {currentNote.title}
            {/* React */}
          </h1>

          {/* 元数据 */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8A94A6]">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              发布于 2023-06-15
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              最后编辑：2023-07-02
            </span>
            <span className="bg-[#E9EEF6] text-[#4A6FA5] px-2.5 py-0.5 rounded-full text-xs">
              React
            </span>
          </div>
        </div>

        {/* 笔记正文区 */}
        <div className="prose max-w-none text-[#4A5568] mb-12">
          <div className="bg-[#F5F7FA] border border-[#EDEFF2] rounded-lg p-5 mb-6">
            <p className="italic text-[#6B7A90] mb-0">
              本文整理了React项目中常见的性能瓶颈及优化方案，适合有一定React基础的开发者参考。
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed">
            在React开发中，随着应用规模的扩大，性能问题往往会逐渐暴露。这些问题可能表现为页面加载缓慢、交互卡顿或滚动不流畅等。本文将从三个核心维度分享可落地的优化技巧。
          </p>

          <h2 className="text-2xl font-semibold text-[#2D3748] mt-10 mb-4">
            1. 组件渲染优化
          </h2>
          <p className="mb-4">
            组件的不必要重渲染是最常见的性能问题之一。解决这一问题的核心是减少渲染次数，可通过以下方式实现：
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              使用
              <code className="bg-[#E9EEF6] text-[#4A6FA5] px-1 py-0.5 rounded">
                React.memo
              </code>
              包裹纯展示组件，避免父组件更新时的连带重渲染
            </li>
            <li>
              配合
              <code className="bg-[#E9EEF6] text-[#4A6FA5] px-1 py-0.5 rounded">
                useCallback
              </code>
              缓存事件处理函数，
              <code className="bg-[#E9EEF6] text-[#4A6FA5] px-1 py-0.5 rounded">
                useMemo
              </code>
              缓存计算结果
            </li>
            <li>拆分大型组件为更小的功能单元，降低渲染粒度</li>
          </ul>
          <div className="border-t border-[#EDEFF2] pt-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[#8A94A6]">标签：</span>
              <a
                href="#"
                className="text-sm bg-[#E9EEF6] text-[#4A6FA5] px-3 py-1 rounded-full hover:bg-[#D9E2EC] transition-colors"
              >
                前端开发
              </a>
              <a
                href="#"
                className="text-sm bg-[#E9EEF6] text-[#4A6FA5] px-3 py-1 rounded-full hover:bg-[#D9E2EC] transition-colors"
              >
                性能优化
              </a>
              <a
                href="#"
                className="text-sm bg-[#E9EEF6] text-[#4A6FA5] px-3 py-1 rounded-full hover:bg-[#D9E2EC] transition-colors"
              >
                React
              </a>
            </div>
          </div>
        </div>

        {/* 评论区 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#2D3748] mb-6 pb-2 border-b border-[#EDEFF2]">
            评论 (3)
          </h3>

          {/* 评论输入框 */}
          <div className="bg-white rounded-xl border border-[#EDEFF2] p-4 mb-8">
            <textarea
              className="w-full border border-[#D9E2EC] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94B3DB] focus:border-transparent resize-none transition-all h-24 text-sm"
              placeholder="分享你的想法..."
            ></textarea>
            <div className="flex justify-end mt-3">
              <button className="bg-[#4A6FA5] text-white px-4 py-2 rounded-lg hover:bg-[#3A5A8C] transition-colors text-sm font-medium">
                发表评论
              </button>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="space-y-6">
            {/* 评论1 */}
            <div className="bg-white rounded-xl border border-[#EDEFF2] p-5">
              <div className="flex items-start gap-3 mb-3">
                {/* 头像 */}
                <div className="w-10 h-10 rounded-full bg-[#E9EEF6] flex items-center justify-center text-[#4A6FA5] font-medium">
                  张
                </div>
                {/* 评论信息 */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-[#2D3748]">张三</span>
                    <span className="text-xs text-[#8A94A6]">2天前</span>
                  </div>
                  <p className="text-[#4A5568] text-sm">
                    非常实用的优化技巧！我在项目中也遇到了类似的性能问题，使用React.memo后确实有明显改善，感谢分享。
                  </p>
                </div>
              </div>
              {/* 评论操作 */}
              <div className="flex items-center gap-4 ml-13 text-xs text-[#8A94A6]">
                <button className="hover:text-[#4A6FA5] transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"
                    />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  回复
                </button>
                <button className="hover:text-[#4A6FA5] transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  点赞 (5)
                </button>
              </div>
            </div>

            {/* 评论2 */}
            <div className="bg-white rounded-xl border border-[#EDEFF2] p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#E9EEF6] flex items-center justify-center text-[#4A6FA5] font-medium">
                  李
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-[#2D3748]">李四</span>
                    <span className="text-xs text-[#8A94A6]">1周前</span>
                  </div>
                  <p className="text-[#4A5568] text-sm">
                    想请教一下，对于嵌套较深的组件，使用Context和useReducer会不会影响性能？有没有更好的状态管理方案推荐？
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-13 text-xs text-[#8A94A6]">
                <button className="hover:text-[#4A6FA5] transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"
                    />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  回复
                </button>
                <button className="hover:text-[#4A6FA5] transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  点赞 (2)
                </button>
              </div>

              {/* 嵌套回复 */}
              <div className="mt-4 ml-10 pl-4 border-l-2 border-[#EDEFF2]">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#E9EEF6] flex items-center justify-center text-[#4A6FA5] font-medium text-xs">
                    作
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[#2D3748] text-sm">
                        作者
                      </span>
                      <span className="text-xs text-[#8A94A6]">6天前</span>
                    </div>
                    <p className="text-[#4A5568] text-sm">
                      对于深层嵌套组件，建议使用状态提升或专门的状态管理库如Redux
                      Toolkit，Context在频繁更新时确实可能有性能问题。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 加载更多 */}
          <div className="mt-6 text-center">
            <button className="text-[#4A6FA5] hover:text-[#3A5A8C] text-sm font-medium transition-colors">
              加载更多评论
            </button>
          </div>
        </div>

        {/* 底部标签区 */}
      </main>

      {/* 页脚 */}
    </div>
  );
};

export default NotePageWithComments;
