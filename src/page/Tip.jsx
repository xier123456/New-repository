import React, { useState } from 'react'
import weixing from '../assets/weixing.jpg'
import zifubao from '../assets/zifubao.jpg'

const Tip = () => {

 const [selectedMethod, setSelectedMethod] = useState(null);
  
  // 贡献者数据
  const contributors = [
   
  ];

  // 处理支付方式选择
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };
  return (
    <div className="min-h-screen flex justify-center pt-20 bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="min-h-screen flex justify-center pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white p-6">
    
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        
 
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6 flex-1">
    
          <div>
            <h2 className="text-xl font-bold text-blue-600">支持创作者</h2>
            <p className="mt-2 text-sm text-gray-500">
              扫码支持，感谢您的鼓励 ✨
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <label className="text-sm text-gray-600 whitespace-nowrap">选择支付方式：</label>
              <button
                onClick={() => handleMethodSelect('wechat')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-200
                           ${selectedMethod === 'wechat' 
                             ? 'bg-blue-50 text-blue-600 border-blue-200' 
                             : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2c-1.4 1.4-3.6 1.4-5 0L12 14l-0.2 0.2c-1.4 1.4-3.6 1.4-5 0-0.7-0.7-0.7-1.8 0-2.5l3.7-3.7c0.7-0.7 1.8-0.7 2.5 0l1.5 1.5 1.5-1.5c0.7-0.7 1.8-0.7 2.5 0l3.7 3.7c0.7 0.7 0.7 1.8 0 2.5z" />
                </svg>
                微信支付
              </button>
              <button
                onClick={() => handleMethodSelect('alipay')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-200
                           ${selectedMethod === 'alipay' 
                             ? 'bg-blue-50 text-blue-600 border-blue-200' 
                             : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13h4v-2h-4v2zm0-5h4V8h-4v2z" />
                </svg>
                支付宝
              </button>
            </div>
          </div>

         
          <div className="flex justify-center items-center p-6 border rounded-lg bg-gray-50 min-h-[280px] transition-all duration-300">
            {selectedMethod ? (
              <div className="text-center">
                
                <div className="bg-white p-4 rounded-lg shadow-sm inline-block mb-4 transform transition-all duration-300 hover:shadow-md hover:scale-105">
                 
                  <img 
                    src={selectedMethod === 'wechat' 
                      ? weixing  // 微信二维码
                      : zifubao  // 支付宝二维码
                    } 
                    alt={`${selectedMethod === 'wechat' ? '微信' : '支付宝'}支付二维码`}
                    className="w-56 h-56 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  请使用{selectedMethod === 'wechat' ? '微信' : '支付宝'}扫描上方二维码
                </p>
              </div>
            ) : (
              // 未选择支付方式时的提示
              <p className="text-gray-500 text-center max-w-xs">
                请选择一种支付方式查看对应的二维码进行支持
              </p>
            )}
          </div>

          {/* 底部说明 */}
          <p className="text-xs text-gray-400 text-right">
            所有支持将用于网站的内容创作 ❤️
          </p>
        </div>
        
        {/* 右侧：贡献者展示区域 */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-5 flex-1">
          <div>
            <h2 className="text-xl font-bold text-blue-600">网站贡献者</h2>
            <p className="mt-1 text-sm text-gray-500">感谢以下用户的大力支持</p>
          </div>
          
          {/* 贡献者列表 */}
          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
            <p>暂无</p>
            {contributors.map((contributor) => (
              <div key={contributor.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                {/* 头像 */}
                <div className="relative">
                  <img 
                    src={contributor.avatar} 
                    alt={contributor.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  {/* 贡献等级标识 */}
                  <span className="absolute -bottom-1 -right-1 text-xs px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {contributor.level.split('贡献者')[0]}
                  </span>
                </div>
                
                {/* 名称和金额 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800 truncate">{contributor.name}</h3>
                    <span className="text-blue-600 font-medium">¥{contributor.amount}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{contributor.level}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 贡献者统计 */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">累计贡献人数</span>
              <span className="font-medium">0人</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-gray-600">累计贡献金额</span>
              <span className="font-medium text-blue-600">¥0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tip