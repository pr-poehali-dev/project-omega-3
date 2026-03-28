import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Умный поиск и фильтрация",
    description: "Найди нейросеть по задаче: текст, код, изображения, видео, аудио. Фильтры по цене, языку и скорости ответа.",
    icon: "search",
    badge: "Поиск",
  },
  {
    title: "Сравнение моделей",
    description: "Сравни DeepSeek, ChatGPT, Gemini и другие по характеристикам, стоимости токенов и отзывам пользователей.",
    icon: "compare",
    badge: "Сравнение",
  },
  {
    title: "Актуальные рейтинги",
    description: "Рейтинги обновляются ежедневно на основе реальных тестов и голосований сообщества.",
    icon: "star",
    badge: "Топ",
  },
  {
    title: "Категории по задачам",
    description: "Чат-боты, генерация кода, создание изображений, анализ данных, перевод — всё структурировано по типам задач.",
    icon: "grid",
    badge: "Категории",
  },
  {
    title: "Карточки моделей",
    description: "Подробные страницы каждой нейросети: описание, возможности, цены, ссылки, примеры использования.",
    icon: "card",
    badge: "Детали",
  },
  {
    title: "Бесплатные модели",
    description: "Отдельная подборка бесплатных и open-source нейросетей — для старта без вложений.",
    icon: "free",
    badge: "Free",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё о нейросетях — в одном месте</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Neural Hub — твой навигатор в мире ИИ. Находи нужные инструменты быстро и без лишнего шума
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "search" && "🔍"}
                    {feature.icon === "compare" && "⚖️"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "grid" && "🗂️"}
                    {feature.icon === "card" && "📋"}
                    {feature.icon === "free" && "🆓"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
