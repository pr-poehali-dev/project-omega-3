import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const AI_MODELS = [
  // --- Зарубежные ---
  {
    name: "ChatGPT",
    company: "OpenAI",
    description: "Самый популярный ИИ-ассистент. Пишет тексты, отвечает на вопросы, помогает с кодом.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    url: "https://chatgpt.com",
    urlLabel: "chatgpt.com",
    tags: ["Текст", "Код", "Аналитика"],
    badge: "🔥 Топ",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    free: true,
    vpn: true,
    vpnNote: "Нужен VPN для РФ",
    aliases: ["chatgpt", "чатгпт", "gpt", "openai", "chat gpt"],
    // При поиске по алиасам показываем вместо этой карточки — Poe
    ruAlternativeId: "Poe",
  },
  {
    name: "TalkAI",
    company: "talkai.info",
    description: "ChatGPT без регистрации и без VPN. Работает с российских IP — просто открой и общайся.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    url: "https://talkai.info/ru/chat/",
    urlLabel: "talkai.info/ru/chat",
    tags: ["Текст", "Код", "Аналитика"],
    badge: "✅ Без VPN",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["poe", "talkai", "толкай", "chatgpt без vpn", "гпт без впн", "chatgpt без регистрации"],
    ruAlternativeId: null,
  },
  {
    name: "DeepSeek",
    company: "DeepSeek AI",
    description: "Мощная открытая модель. Отлично справляется с кодом, математикой и анализом данных.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg",
    url: "https://chat.deepseek.com",
    urlLabel: "chat.deepseek.com",
    tags: ["Код", "Математика", "Текст"],
    badge: "⚡ Официальный",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["deepseek", "дипсик", "deep seek"],
    ruAlternativeId: null,
  },
  {
    name: "DeepSeek (без рег.)",
    company: "deepseek-chat.ru",
    description: "Зеркало DeepSeek — тот же ИИ, но без регистрации и без ввода номера телефона. Работает сразу.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg",
    url: "https://deepseek-chat.ru",
    urlLabel: "deepseek-chat.ru",
    tags: ["Код", "Математика", "Текст"],
    badge: "✅ Без рег.",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["deepseek без регистрации", "дипсик без регистрации", "зеркало deepseek"],
    ruAlternativeId: null,
  },
  {
    name: "Gemini",
    company: "Google",
    description: "ИИ от Google с доступом к актуальным данным из интернета и интеграцией с сервисами Google.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    url: "https://gemini.google.com",
    urlLabel: "gemini.google.com",
    tags: ["Текст", "Поиск", "Мультимодал"],
    badge: "🌐 Google",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
    free: true,
    vpn: true,
    vpnNote: "Нужен VPN для РФ",
    aliases: ["gemini", "гемини", "google ai", "гугл ии"],
    ruAlternativeId: null,
  },
  {
    name: "Claude",
    company: "Anthropic",
    description: "Безопасный и умный ассистент. Превосходно анализирует длинные документы и пишет тексты.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
    url: "https://claude.ai",
    urlLabel: "claude.ai",
    tags: ["Текст", "Анализ", "Безопасность"],
    badge: "🧠 Умный",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    free: true,
    vpn: true,
    vpnNote: "Нужен VPN для РФ",
    aliases: ["claude", "клод", "anthropic"],
    ruAlternativeId: null,
  },
  {
    name: "Grok",
    company: "xAI",
    description: "ИИ от Илона Маска. Интегрирован с X (Twitter), отличается прямолинейными ответами.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Grok_logo.svg",
    url: "https://grok.com",
    urlLabel: "grok.com",
    tags: ["Текст", "Юмор", "Новости"],
    badge: "🚀 xAI",
    badgeColor: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["grok", "грок", "xai", "маск", "musk"],
    ruAlternativeId: null,
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    description: "ИИ-поисковик с ответами и источниками. Идеален для исследований и поиска актуальных данных.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Perplexity_AI_logo.svg",
    url: "https://perplexity.ai",
    urlLabel: "perplexity.ai",
    tags: ["Поиск", "Исследования", "Ответы"],
    badge: "🔍 Поиск",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["perplexity", "перплексити", "поиск ии"],
    ruAlternativeId: null,
  },
  {
    name: "Midjourney",
    company: "Midjourney Inc.",
    description: "Лучший генератор изображений для художественного контента. Создаёт поразительные иллюстрации.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    url: "https://midjourney.com",
    urlLabel: "midjourney.com",
    tags: ["Изображения", "Арт", "Дизайн"],
    badge: "🎨 Арт",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    free: false,
    vpn: false,
    vpnNote: null,
    aliases: ["midjourney", "миджорни", "mj"],
    ruAlternativeId: null,
  },
  {
    name: "Stable Diffusion",
    company: "Stability AI",
    description: "Open-source генератор изображений. Попробуй прямо в браузере на Hugging Face — без регистрации.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/archive/8/84/20231219052503%21Stability_AI_logo.svg",
    url: "https://huggingface.co/spaces/stabilityai/stable-diffusion",
    urlLabel: "huggingface.co",
    tags: ["Изображения", "Open-source", "API"],
    badge: "🆓 Free",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["stable diffusion", "стейбл диффузия", "sd"],
    ruAlternativeId: null,
  },
  {
    name: "Suno",
    company: "Suno AI",
    description: "Генерация музыки по текстовому описанию. Создаёт полноценные треки с вокалом за секунды.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Suno_AI_Logo.png",
    url: "https://suno.com",
    urlLabel: "suno.com",
    tags: ["Музыка", "Аудио", "Творчество"],
    badge: "🎵 Музыка",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["suno", "суно", "музыка ии"],
    ruAlternativeId: null,
  },
  {
    name: "ElevenLabs",
    company: "ElevenLabs",
    description: "Реалистичный синтез голоса и клонирование голоса. Лучший TTS для подкастов и видео.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ElevenLabs_logo_symbol.svg/800px-ElevenLabs_logo_symbol.svg.png",
    url: "https://elevenlabs.io",
    urlLabel: "elevenlabs.io",
    tags: ["Голос", "TTS", "Подкасты"],
    badge: "🎙️ Голос",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["elevenlabs", "элевен", "голос ии", "tts"],
    ruAlternativeId: null,
  },

  // --- Российские ---
  {
    name: "GigaChat",
    company: "Сбер",
    description: "Российский ИИ-ассистент от Сбера. Отлично понимает русский язык, работает без VPN и ограничений.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/GigaChat_logo.png",
    url: "https://giga.chat",
    urlLabel: "giga.chat",
    tags: ["Текст", "Русский", "Аналитика"],
    badge: "🇷🇺 Россия",
    badgeColor: "bg-blue-700/20 text-blue-300 border-blue-700/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["gigachat", "гигачат", "сбер ии", "сбер"],
    ruAlternativeId: null,
  },
  {
    name: "YandexGPT",
    company: "Яндекс",
    description: "Языковая модель Яндекса. Встроена в Алису, отлично работает с русским языком и задачами.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Yandex.svg",
    url: "https://ya.ru/ai/gpt",
    urlLabel: "ya.ru/ai/gpt",
    tags: ["Текст", "Русский", "Поиск"],
    badge: "🇷🇺 Яндекс",
    badgeColor: "bg-red-700/20 text-red-300 border-red-700/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["yandexgpt", "яндекс гпт", "яндекс ии", "алиса", "yagpt"],
    ruAlternativeId: null,
  },
  {
    name: "Kandinsky",
    company: "Сбер",
    description: "Российский генератор изображений от Сбера. Понимает запросы на русском языке, работает без VPN.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/GigaChat_logo.png",
    url: "https://fusionbrain.ai",
    urlLabel: "fusionbrain.ai",
    tags: ["Изображения", "Русский", "Арт"],
    badge: "🇷🇺 Арт",
    badgeColor: "bg-indigo-600/20 text-indigo-300 border-indigo-600/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["kandinsky", "кандинский", "fusion brain", "фьюжн брейн", "сбер картинки"],
    ruAlternativeId: null,
  },
  {
    name: "Шедеврум",
    company: "Яндекс",
    description: "Генерация изображений по тексту на русском языке от Яндекса. Простой интерфейс, без VPN.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Yandex.svg",
    url: "https://shedevrum.ai",
    urlLabel: "shedevrum.ai",
    tags: ["Изображения", "Русский", "Дизайн"],
    badge: "🇷🇺 Фото",
    badgeColor: "bg-orange-700/20 text-orange-300 border-orange-700/30",
    free: true,
    vpn: false,
    vpnNote: null,
    aliases: ["шедеврум", "shedevrum", "яндекс картинки", "яндекс изображения"],
    ruAlternativeId: null,
  },
  {
    name: "SaluteSpeech",
    company: "Сбер",
    description: "Синтез и распознавание русской речи от Сбера. Лучшее качество голоса для русского языка.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/GigaChat_logo.png",
    url: "https://salute.sber.ru/salutespeech",
    urlLabel: "salute.sber.ru",
    tags: ["Голос", "TTS", "Русский"],
    badge: "🇷🇺 Голос",
    badgeColor: "bg-green-700/20 text-green-300 border-green-700/30",
    free: false,
    vpn: false,
    vpnNote: null,
    aliases: ["salutespeech", "салют спич", "сбер голос", "русский tts"],
    ruAlternativeId: null,
  },
]

const CATEGORIES = ["Все", "🇷🇺 Русские", "Текст", "Код", "Изображения", "Музыка", "Голос", "Поиск", "Open-source"]

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

  const q = query.toLowerCase().trim()

  // Точный поиск ChatGPT — только если запрос совпадает с алиасами ChatGPT, но не является просто частью другого слова
  const chatgptAliases = ["chatgpt", "чатгпт", "chat gpt", "чат гпт"]
  const isChatGptSearch = q !== "" && chatgptAliases.some((a) => q === a || q.startsWith(a + " ") || q.endsWith(" " + a))

  // Точный поиск DeepSeek
  const deepseekAliases = ["deepseek", "дипсик", "deep seek"]
  const isDeepSeekSearch = q !== "" && deepseekAliases.some((a) => q === a || q.startsWith(a + " ") || q.endsWith(" " + a))

  const filtered = AI_MODELS.filter((m) => {
    // При поиске chatgpt — прячем оригинал, оставляем TalkAI первым
    if (isChatGptSearch && m.name === "ChatGPT") return false
    // При поиске deepseek — показываем и оригинал и зеркало
    // (фильтрация не нужна, оба должны показываться)

    const matchQuery =
      q === "" ||
      m.name.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q)) ||
      m.aliases.some((a) => a.includes(q))

    const matchCat =
      activeCategory === "Все" ||
      (activeCategory === "🇷🇺 Русские" && m.tags.includes("Русский")) ||
      m.tags.includes(activeCategory)

    return matchQuery && matchCat
  })

  const showChatGptBanner = isChatGptSearch
  const showDeepSeekBanner = isDeepSeekSearch

  const sortedFiltered = showChatGptBanner
    ? [...filtered].sort((a, b) => (a.name === "TalkAI" ? -1 : b.name === "TalkAI" ? 1 : 0))
    : showDeepSeekBanner
    ? [...filtered].sort((a, b) => (a.name === "DeepSeek (без рег.)" ? -1 : b.name === "DeepSeek (без рег.)" ? 1 : 0))
    : filtered

  return (
    <section id="catalog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Каталог нейросетей
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {sortedFiltered.length} инструментов — кликни на карточку, чтобы перейти на сайт
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

        {/* Smart banner when searching ChatGPT */}
        {showChatGptBanner && (
          <div className="mb-8 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
            <span className="text-emerald-400 text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-emerald-300 font-semibold text-sm">ChatGPT недоступен в России без VPN</p>
              <p className="text-gray-400 text-sm mt-0.5">
                Показываем <span className="text-white font-medium">TalkAI</span> — зеркало ChatGPT без VPN и без регистрации. Оригинал тоже есть ниже.
              </p>
            </div>
          </div>
        )}

        {/* Smart banner when searching DeepSeek */}
        {showDeepSeekBanner && (
          <div className="mb-8 p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 flex items-start gap-3">
            <span className="text-blue-400 text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-blue-300 font-semibold text-sm">DeepSeek требует регистрацию на официальном сайте</p>
              <p className="text-gray-400 text-sm mt-0.5">
                Показываем зеркало <span className="text-white font-medium">DeepSeek (без рег.)</span> — тот же ИИ, сразу в чат.
              </p>
            </div>
          </div>
        )}

        {/* Cards grid */}
        {sortedFiltered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl mb-2">🤖</p>
            <p>Ничего не найдено по запросу «{query}»</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedFiltered.map((model, index) => (
              <a
                key={index}
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] ${
                  showChatGptBanner && model.name === "TalkAI"
                    ? "bg-emerald-500/5 border-emerald-500/40 hover:border-emerald-400"
                    : showDeepSeekBanner && model.name === "DeepSeek (без рег.)"
                    ? "bg-blue-500/5 border-blue-500/40 hover:border-blue-400"
                    : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-white/8"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={model.logo}
                      alt={model.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement
                        const parent = img.parentElement
                        if (parent) {
                          parent.innerHTML = `<span class="text-xl font-bold text-white">${model.name[0]}</span>`
                        }
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
                    {model.free ? "✓ Бесплатный тариф" : "💳 Платная"}
                  </span>
                  <span className="text-red-500 group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1 text-xs">
                    Открыть <Icon name="ArrowRight" size={12} />
                  </span>
                </div>

                {model.vpn && (
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-1.5">
                    <span className="text-amber-400 text-xs">⚠️</span>
                    <span className="text-amber-400/80 text-xs">{model.vpnNote}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}