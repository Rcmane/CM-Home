"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const sections = [
  {
    title: "视频",
    color: "text-green-600",
    links: [
      "好看视频",
      "爱奇艺高清",
      "腾讯视频",
      "百度直播",
      "优酷网",
      "芒果TV",
      "搜狐视频",
      "咪咕视频",
      "AI视频",
      "央视网",
    ],
  },
  {
    title: "综合",
    color: "text-green-600",
    links: [
      "高频教育",
      "慢播电子",
      "会计网",
      "百度百科",
      "征信中心",
      "网易公开课",
      "豆丁网",
      "学科网",
      "教育考试",
      "百度营销",
    ],
  },
  {
    title: "游戏",
    color: "text-green-600",
    links: [
      "百度游戏",
      "37网游",
      "9377页游",
      "4366页游",
      "游民星空",
      "hao123游戏",
      "17173",
      "3DM游戏",
      "4399游戏",
      "游侠网",
    ],
  },
  {
    title: "页游",
    color: "text-green-600",
    links: [
      "2025传奇",
      "1.76传奇",
      "超变传奇",
      "开天西游",
      "山海志异",
      "雷霆归来",
      "山河图志",
      "热血战纪",
      "传奇盛世2",
      "原始传奇",
    ],
  },
  {
    title: "购物",
    color: "text-green-600",
    links: ["爱淘宝", "当当网", "淘宝特卖", "天猫", "天猫国际", "京东商城", "京东家居", "什么值得买", "淘宝网", "1688"],
  },
  {
    title: "新游",
    color: "text-green-600",
    links: [
      "梦回江湖",
      "传奇岁月",
      "雷霆之怒",
      "凡人修仙传",
      "黎明游侠",
      "青云诀",
      "云影",
      "散人打金服",
      "帝王霸业",
      "沙城营销版",
    ],
  },
  {
    title: "体育",
    color: "text-green-600",
    links: [
      "新浪体育",
      "虎扑体育",
      "搜狐体育",
      "腾讯体育",
      "CCTV5",
      "网易体育",
      "PP体育",
      "凤凰体育",
      "竞奇艺体育",
      "体育热点",
    ],
  },
  {
    title: "小说",
    color: "text-green-600",
    links: [
      "起点中文网",
      "QQ阅读",
      "潇湘书院",
      "晋江文学城",
      "纵横中文网",
      "七猫中文网",
      "小说阅读",
      "小说排行",
      "番茄小说",
      "微信读书",
    ],
  },
  {
    title: "手机",
    color: "text-green-600",
    links: [
      "中关村在线",
      "IT之家",
      "太平洋手机",
      "移动",
      "华为官网",
      "小米官网",
      "vivo手机",
      "华军软件园",
      "苹果手机",
      "百度手机助手",
    ],
  },
  {
    title: "社交",
    color: "text-green-600",
    links: ["斗鱼TV", "知乎", "QQ空间", "CSDN社区", "新浪微博", "百合网", "珍爱网", "虎扑社区", "百度贴吧", "人人网"],
  },
  {
    title: "汽车",
    color: "text-green-600",
    links: [
      "汽车之家",
      "百度爱驾",
      "太平洋汽车",
      "易车网",
      "汽车大全",
      "爱卡汽车",
      "新浪汽车",
      "搜狐汽车",
      "凤凰汽车",
      "腾讯汽车",
    ],
  },
  {
    title: "新闻",
    color: "text-green-600",
    links: [
      "新浪新闻",
      "观察者网",
      "环球网",
      "参考消息",
      "中国新闻网",
      "搜狐新闻",
      "凤凰军事",
      "腾讯新闻",
      "网易新闻",
      "hao123推荐",
    ],
  },
  {
    title: "旅游",
    color: "text-green-600",
    links: [
      "携程旅行",
      "12306",
      "马蜂窝",
      "飞猪旅行",
      "途牛",
      "艺龙旅行网",
      "劳游网",
      "同程旅行",
      "南方航空",
      "hao123旅游",
    ],
  },
  {
    title: "招聘",
    color: "text-green-600",
    links: [
      "前程无忧",
      "BOSS直聘",
      "猎聘",
      "应届生求职",
      "拉勾",
      "中国公共招聘",
      "中华英才",
      "实习僧",
      "看准网",
      "卫生人才网",
    ],
  },
  {
    title: "生活",
    color: "text-green-600",
    links: ["房天下", "安居客", "转卖网", "赶集网", "至企查", "下厨房", "百姓网", "大众点评", "美团网", "天眼查"],
  },
  {
    title: "音乐",
    color: "text-green-600",
    links: [
      "酷狗音乐",
      "网易云音乐",
      "酷我音乐",
      "QQ音乐",
      "千千音乐",
      "5sing",
      "清风DJ音乐",
      "咪咕音乐",
      "豆瓣音乐",
      "唱吧",
    ],
  },
  {
    title: "财经",
    color: "text-green-600",
    links: [
      "东方财富",
      "新浪财经",
      "证券之星",
      "中金在线",
      "同花顺",
      "金融界",
      "第一财经",
      "和讯网",
      "网易财经",
      "雪球",
    ],
  },
  {
    title: "彩票",
    color: "text-green-600",
    links: [
      "中国体彩",
      "中国福彩网",
      "新浪彩票",
      "竞彩网",
      "双色球",
      "全国开奖",
      "搜狐彩票",
      "福彩3D",
      "中彩网",
      "大乐透",
    ],
  },
  {
    title: "银行",
    color: "text-green-600",
    links: [
      "建设银行",
      "中国银行",
      "工商银行",
      "农业银行",
      "交通银行",
      "招商银行",
      "兴业银行",
      "浦发银行",
      "邮政储蓄",
      "人民银行",
    ],
  },
  {
    title: "邮箱",
    color: "text-green-600",
    links: [
      "163邮箱",
      "126邮箱",
      "QQ邮箱",
      "新浪邮箱",
      "阿里邮箱",
      "139邮箱",
      "Outlook邮箱",
      "搜狐邮箱",
      "百度网盘",
      "foxmail邮箱",
    ],
  },
]

export default function LinkSections1() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="space-y-3">
      {isExpanded && (
        <>
          {sections.map((section, index) => (
            <Card key={index} className="p-3 md:p-4 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className={`text-sm md:text-base font-bold ${section.color}`}>{section.title}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-x-4 gap-y-1">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-xs md:text-sm text-blue-600 hover:text-red-600 hover:underline truncate py-0.5"
                  >
                    {link}
                  </a>
                ))}
                <a href="#" className="text-xs md:text-sm text-blue-600 hover:text-red-600 hover:underline">
                  更多&gt;&gt;
                </a>
              </div>
            </Card>
          ))}
        </>
      )}

      <div className="flex justify-center py-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
        >
          {isExpanded ? "点击收起 ▲" : "点击展开 ▼"}
        </button>
      </div>
    </div>
  )
}
