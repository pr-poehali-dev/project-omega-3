import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const AI_MODELS = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    description: "Самый популярный ИИ-ассистент. Пишет тексты, отвечает на вопросы, помогает с кодом.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    url: "https://chat.openai.com",
    tags: ["Текст", "Код", "Аналитика"],
    badge: "🔥 Топ",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    free: true,
  },
  {
    name: "DeepSeek",
    company: "DeepSeek AI",
    description: "Мощная открытая модель. Отлично справляется с кодом, математикой и анализом данных.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg",
    url: "https://chat.deepseek.com",
    tags: ["Код", "Математика", "Текст"],
    badge: "⚡ Быстро",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    free: true,
  },
  {
    name: "Gemini",
    company: "Google",
    description: "ИИ от Google с доступом к актуальным данным из интернета и интеграцией с сервисами Google.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    url: "https://gemini.google.com",
    tags: ["Текст", "Поиск", "Мультимодал"],
    badge: "🌐 Google",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
    free: true,
  },
  {
    name: "Claude",
    company: "Anthropic",
    description: "Безопасный и умный ассистент. Превосходно анализирует длинные документы и пишет тексты.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
    url: "https://claude.ai",
    tags: ["Текст", "Анализ", "Безопасность"],
    badge: "🧠 Умный",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    free: true,
  },
  {
    name: "Midjourney",
    company: "Midjourney Inc.",
    description: "Лучший генератор изображений для художественного контента. Создаёт поразительные иллюстрации.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    url: "https://midjourney.com",
    tags: ["Изображения", "Арт", "Дизайн"],
    badge: "🎨 Арт",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    free: false,
  },
  {
    name: "Grok",
    company: "xAI",
    description: "ИИ от Илона Маска. Интегрирован с X (Twitter), отличается прямолинейными ответами.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Grok_logo.svg",
    url: "https://grok.com",
    tags: ["Текст", "Юмор", "Новости"],
    badge: "🚀 xAI",
    badgeColor: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    free: true,
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    description: "ИИ-поисковик с ответами и источниками. Идеален для исследований и поиска актуальных данных.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Perplexity_AI_logo.svg",
    url: "https://perplexity.ai",
    tags: ["Поиск", "Исследования", "Ответы"],
    badge: "🔍 Поиск",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    free: true,
  },
  {
    name: "Stable Diffusion",
    company: "Stability AI",
    description: "Open-source генератор изображений. Можно запустить локально или через API без ограничений.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/archive/8/84/20231219052503%21Stability_AI_logo.svg",
    url: "https://stability.ai",
    tags: ["Изображения", "Open-source", "API"],
    badge: "🆓 Free",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    free: true,
  },
  {
    name: "Llama",
    company: "Meta",
    description: "Открытая языковая модель от Meta. Можно запустить локально — без цензуры и без платы.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    url: "https://llama.meta.com",
    tags: ["Open-source", "Текст", "Локально"],
    badge: "🦙 Meta",
    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-600/30",
    free: true,
  },
  {
    name: "Runway",
    company: "Runway ML",
    description: "Профессиональный инструмент для генерации и редактирования видео с помощью ИИ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Runway_ml_logo.png",
    url: "https://runwayml.com",
    tags: ["Видео", "Редактирование", "Контент"],
    badge: "🎬 Видео",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    free: false,
  },
  {
    name: "Suno",
    company: "Suno AI",
    description: "Генерация музыки по текстовому описанию. Создаёт полноценные треки с вокалом за секунды.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Suno_AI_Logo.png",
    url: "https://suno.com",
    tags: ["Музыка", "Аудио", "Творчество"],
    badge: "🎵 Музыка",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    free: true,
  },
  {
    name: "ElevenLabs",
    company: "ElevenLabs",
    description: "Реалистичный синтез голоса и клонирование голоса. Лучший TTS для подкастов и видео.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ElevenLabs_logo_symbol.svg/800px-ElevenLabs_logo_symbol.svg.png",
    url: "https://elevenlabs.io",
    tags: ["Голос", "TTS", "Подкасты"],
    badge: "🎙️ Голос",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    free: true,
  },
]

const CATEGORIES = ["Все", "Текст", "Код", "Изображения", "Видео", "Музыка", "Голос", "Поиск", "Open-source"]

export function CatalogSection() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Все")

  useEffect(() => {
    const handler = (e: Event) => {
      setQuery((e as CustomEvent).detail)
    }
    window.addEventListener("neural-search", handler)
    return () => window.removeEventListener("neural-search", handler)
  }, [])

  const filtered = AI_MODELS.filter((m) => {
    const matchQuery =
      query === "" ||
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.description.toLowerCase().includes(query.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    const matchCat = activeCategory === "Все" || m.tags.includes(activeCategory)
    return matchQuery && matchCat
  })

  return (
    <section id="catalog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Каталог нейросетей
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {filtered.length} инструментов — кликни на карточку, чтобы перейти на сайт
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-red-500/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl mb-2">🤖</p>
            <p>Ничего не найдено по запросу «{query}»</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((model, index) => (
              <a
                key={index}
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-red-500/50 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={model.logo}
                      alt={model.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none"
                        ;(e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-2xl font-bold text-white">${model.name[0]}</span>`
                      }}
                    />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border font-medium ${model.badgeColor}`}>
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1 font-orbitron">{model.name}</h3>
                <p className="text-gray-500 text-xs mb-3">{model.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{model.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {model.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${model.free ? "text-emerald-400" : "text-yellow-400"}`}>
                    {model.free ? "✓ Есть бесплатный тариф" : "💳 Платная"}
                  </span>
                  <span className="text-red-500 group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1 text-xs">
                    Открыть <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
