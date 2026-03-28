import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Текст и общение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            ChatGPT, Claude, Gemini, DeepSeek и другие чат-модели. Отвечают на вопросы, пишут тексты,
            помогают с анализом документов и ведут диалог на любую тему.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ChatGPT (OpenAI) — самый популярный ИИ-ассистент
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              DeepSeek — мощная открытая модель из Китая
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Gemini (Google) — интегрирован с сервисами Google
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Код и разработка",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            ИИ-ассистенты для программистов: пишут, дебажат и объясняют код. Идеально для ускорения
            разработки и обучения новым языкам и технологиям.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              GitHub Copilot — автодополнение кода в редакторе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Cursor — ИИ-редактор кода нового поколения
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Claude — отлично понимает сложные задачи по коду
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Изображения и видео",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Генерация визуального контента: иллюстрации, фото, UI-макеты, видеоролики по текстовому описанию.
            Для дизайнеров, маркетологов и создателей контента.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Midjourney — топ для художественных изображений
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              DALL·E 3 — встроен в ChatGPT, прост в использовании
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Sora — генерация видео от OpenAI
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Нейросети по категориям</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Каждая нейросеть — для своей задачи. Neural Hub помогает найти именно ту, которая подойдёт тебе
            прямо сейчас — будь то работа, творчество или обучение.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
