import React, { useState } from 'react';
import { Github, ExternalLink, Mail, MapPin, BookOpen, Code, Terminal, User, Briefcase } from 'lucide-react';

export default function App() {
  // ---------------------------------------------------------
  // 以下のデータを自分の情報に書き換えてください
  // ---------------------------------------------------------

  const profile = {
    name: "速水 舜一朗", // あなたの名前
    role: "大学3年生",
    bio: "現在、大学で経営システム工学を専攻しています。水泳部•プログラミング部•ボルダリングサークルなど幅広く活動しています。趣味は水泳•バスケ•ゲーム作成です。",
    location: "愛知, 日本",
    email: "hayashunkus55@gmail.com",
    github: "https://github.com/hayashunkus",
  };

  const skills = [
    // Web開発関連をまとめる
    {
      category: "Web Development",
      items: ["HTML5 / CSS3", "JavaScript", "React", "Node.js", "Firebase"]
    },
    // プログラミング言語と、それを使った専門技術（画像処理など）をまとめる
    {
      category: "Languages & AI",
      items: ["Python", "Java", "OpenCV", "MediaPipe"]
    },
    // 開発環境や管理ツール
    {
      category: "Dev Tools",
      items: ["Git / GitHub", "VS Code", "Visual Studio 2022"] // Dockerなどがあれば追加
    },
  ];

  const projects = [
    {
      title: "Vswim",
      description: "2024年度の工大祭で出展したものです。競泳ダービー、連打ダッシュ、ストロークシミュレーションができ、ミニゲームもできます。まだ改善が必要です。🙇",
      tech: ["HTML・CSS", "JavaScript"],
      demoLink: "https://hayashunkus.github.io/Vswim/",
      repoLink: "https://github.com/hayashunkus/Vswim",
      emoji: "🏊"
    },
    {
      title: "ICE Ascent with hands",
      description: "骨格検知を用いたゲームになります。ボルダリングゲームとつららキャッチゲーム、格闘ゲームを作成しました。デモ動画はProtoPedia（下のリンク）から見ることが可能です。",
      tech: ["Python", "Pygame", "MediaPipe", "OpenCV"],
      demoLink: "https://protopedia.net/prototyper/hayashun2488",
      repoLink: "https://github.com/hayashunkus/iceclimb",
      emoji: "✋"
    },
    {
      title: "Smile BINGO",
      description: "ビンゴに表情の点数化を組み合わせて、点数がルーム内で一番高い人はビンゴカードのリーチしやすいマスの数字が次の回で出る（３回ごとにチャンスタイムが出現）という新しいビンゴゲーム。",
      tech: ["HTML・CSS", "JavaScript", "Firebase"],
      demoLink: "https://hayashunkus.github.io/bingoAR/",
      repoLink: "https://github.com/hayashunkus/bingoAR",
      emoji: "🌝"
    }
  ];

  const history = [
    {
      year: "2025.10 ~ 現在",
      title: "名古屋工業大学 工学部 社会工学科 経営システム分野 生産システム工学研究室 配属",
      description: "研究内容は未定"
    },

    {
      year: "2025.09",
      title: "数理情報履修モデル 数理情報アドバンストコース 修了",
      description: ""
    },
    {
      year: "2025.09",
      title: "株式会社トヨタシステムズ インターン（10日間）",
      description: "C#での保全ツール開発"
    },
    {
      year: "2025.08",
      title: "第72回 全国国公立大学選手権水泳競技大会  4×100mフリーリレー 4泳 出場",
      description: ""
    },
    {
      year: "2025.06",
      title: "関西マスターズ水泳選手権2025 男子25m自由形 18~24歳区分 第2位",
      description: ""
    },
    {
      year: "2024.10",
      title: "数理・データサイエンス・AI教育プログラム認定制度 応用基礎レベル 数理情報スタンダードコース 修了",
      description: ""
    },
    {
      year: "2024.08",
      title: "株式会社 京進 京進の個別指導 スクール・ワン 桑名教室 アルバイト勤務",
      description: "塾講師として従事。"
    },
    {
      year: "2024.07",
      title: "セントラルフィットネスクラブ 小牧 アルバイト 退職",
      description: ""
    },
    {
      year: "2023.06",
      title: "セントラルフィットネスクラブ 小牧 アルバイト勤務",
      description: "インストラクターとプール監視、選手コースのアシスタントを担当"
    },
    {
      year: "2023.04",
      title: "名古屋工業大学 工学部 社会工学科 経営システム分野 入学",
      description: "生産システム、最適化アルゴリズム、機械学習・深層学習などを学習中。"
    },
    {
      year: "2023.04",
      title: "名古屋工業大学 工学部 社会工学科 経営システム分野 入学",
      description: "生産システム、最適化アルゴリズム、機械学習・深層学習などを学習中。"
    }
  ];

  // ---------------------------------------------------------
  // 表示用コンポーネント（ここから下はロジックです）
  // ---------------------------------------------------------

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#37352f] font-sans selection:bg-[#cce9ff]">
      {/* Header Image Area (Notion Cover Style) */}
      <div className="h-48 w-full bg-gradient-to-r from-slate-200 to-slate-300 relative">
        <div className="absolute -bottom-12 left-6 md:left-[20%]">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-200">
            🧑‍💻
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-20">

        {/* Profile Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{profile.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{profile.role}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Mail size={16} />
                <span>Email</span>
              </a>
            )}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            {profile.qiita && (
              <a href={profile.qiita} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#55c500] transition-colors">
                <BookOpen size={16} />
                <span>Qiita / Tech Blog</span>
              </a>
            )}
          </div>
        </header>

        {/* Section: About */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4 flex items-center gap-2">
            <User size={20} className="text-gray-400" />
            About Me
          </h2>
          <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">
            {profile.bio}
          </p>
        </section>

        {/* Section: Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-gray-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-3 text-gray-800 border-l-4 border-blue-400 pl-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-6 flex items-center gap-2">
            <Code size={20} className="text-gray-400" />
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" title="View Code">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: History */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-6 flex items-center gap-2">
            <Briefcase size={20} className="text-gray-400" />
            Experience & Education
          </h2>
          <div className="space-y-8 relative pl-2">
            {/* Timeline vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-200"></div>

            {history.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>

                <span className="text-sm text-gray-400 font-mono mb-1 block">{item.year}</span>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}