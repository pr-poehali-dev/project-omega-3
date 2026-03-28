import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое Neural Hub?",
      answer:
        "Neural Hub — это каталог нейросетей, где можно найти, сравнить и выбрать подходящий ИИ-инструмент для любой задачи: от написания текстов до генерации изображений и кода.",
    },
    {
      question: "Сколько нейросетей представлено в каталоге?",
      answer:
        "В каталоге собраны десятки актуальных нейросетей — от популярных ChatGPT, Gemini, DeepSeek до нишевых инструментов. Список постоянно пополняется новинками.",
    },
    {
      question: "Можно ли пользоваться каталогом бесплатно?",
      answer:
        "Да, базовый доступ к каталогу полностью бесплатный. Вы можете просматривать карточки нейросетей, читать описания и сравнивать характеристики без регистрации.",
    },
    {
      question: "Как выбрать подходящую нейросеть?",
      answer:
        "Используйте фильтры по категории задачи, цене и языковой поддержке. На каждой карточке есть подробное описание, ключевые возможности и ссылка на официальный сайт модели.",
    },
    {
      question: "Как часто обновляется информация?",
      answer:
        "Информация обновляется регулярно: мы отслеживаем новые релизы, изменения в ценах и возможностях моделей, чтобы каталог всегда был актуальным.",
    },
    {
      question: "Могу ли я предложить добавить новую нейросеть?",
      answer:
        "Конечно! Если вы знаете нейросеть, которой нет в каталоге, напишите нам — мы рассмотрим её добавление. Сообщество помогает каталогу расти.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о Neural Hub и работе с каталогом нейросетей.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
