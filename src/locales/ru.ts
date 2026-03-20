import dataPipeline from '../assets/diagrams/data-pipeline.png'
import signalLifecycle from '../assets/diagrams/signal-lifecycle.png'
import userInteraction from '../assets/diagrams/user-interaction.png'
import dashboard from '../assets/images/dashboard.png'
import signals from '../assets/images/signals.png'
import details from '../assets/images/details.png'

export const ru = {
  meta: {
    name: 'Ekaterina Chitova',
    tagline: 'Product Manager · Business Analyst',
  },

  header: {
    getInTouch: 'Связаться',
    navAriaLabel: 'Разделы страницы',
    nav: [
      { label: 'Обзор', href: '#overview' },
      { label: 'Проблема', href: '#problem' },
      { label: 'Решение', href: '#solution' },
      { label: 'Результаты', href: '#results' },
      { label: 'Контакты', href: '#contact' },
    ],
  },

  hero: {
    headline: 'Разработка платформы аналитики крипторынка в реальном времени',
    subheadline:
      'От сырых данных Binance к торговым сигналам и стабильной работе системы.',
    cta: { label: 'Открыть кейс', href: '#overview' },
    imagePlaceholder: 'Обзор архитектуры платформы',
    image: dataPipeline,
    imageCaption: 'Архитектура системы: сбор данных, обработка, аналитика, хранение',
  },

  caseOverview: {
    sectionTitle: 'Платформа анализа крипторынка',
    context:
      'Система для сбора, обработки и анализа рыночных данных Binance (в реальном времени и исторических) для поиска торговых возможностей и мониторинга активов.',
    facts: [
      { label: 'Продукт', value: 'Платформа анализа крипторынка' },
      { label: 'Длительность', value: '3 месяца (Q3–Q4 2024)' },
      { label: 'Моя роль', value: 'Product Manager / Business Analyst' },
      { label: 'Команда', value: '1 PM, 2 backend-инженера, 1 data engineer' },
      { label: 'Результат', value: 'Автоматическая генерация сигналов по 50+ активам' },
    ],
    imagePlaceholder: {
      caption: 'Высокоуровневая архитектура системы: ingestion, обработка и дашборд',
      alt: 'Диаграмма архитектуры системы',
    },
  },

  problem: {
    sectionTitle: 'Проблема',
    statement:
      'Торговые решения принимались вручную: множество вкладок, таблиц и разрозненных инструментов. Не было пайплайна для поиска сигналов и отслеживания состояния системы.',
    metrics: [
      { value: '5+', unit: 'вкладок', description: 'отслеживались вручную' },
      { value: '3 часа', unit: 'в день', description: 'на анализ рынка' },
      { value: '0', unit: 'логирования', description: 'нет истории сигналов' },
      { value: '100%', unit: 'ручной', description: 'поиск сигналов вручную' },
    ],
    painPointsHeading: 'Ключевые проблемы',
    painPoints: [
      'Нет единой системы обработки данных',
      'Ручной анализ медленный',
      'Нет пайплайна сигналов',
      'Нет прозрачности системы',
      'Нет валидации сигналов',
    ],
    imagePlaceholder: {
      caption: 'Разрозненный процесс без автоматизации',
      alt: 'Диаграмма до автоматизации',
    },
  },

  myRole: {
    sectionTitle: 'Моя роль',
    subtitle: 'Product Manager / Business Analyst',
    summary:
      'Отвечала за продукт end-to-end: от идеи и архитектуры до MVP и запуска.',
    responsibilitiesHeading: 'Задачи',
    responsibilities: [
      'Определила цели продукта',
      'Спроектировала архитектуру',
      'Создала BPMN диаграммы',
      'Изучила API Binance',
      'Создала backlog в Jira',
      'Декомпозировала задачи',
      'Запустила MVP',
    ],
    stakeholdersHeading: 'Стейкхолдеры',
    stakeholders: [
      { name: 'Трейдеры', interaction: 'Требования и сигналы' },
      { name: 'Backend', interaction: 'Архитектура и API' },
      { name: 'Data engineer', interaction: 'Данные и пайплайн' },
    ],
    timelineHeading: 'Таймлайн',
    timeline: [
      { phase: 'Discovery', duration: '1–2 нед', activity: 'Анализ и требования' },
      { phase: 'Architecture', duration: '3–4 нед', activity: 'Дизайн системы' },
      { phase: 'Build', duration: '5–10 нед', activity: 'Разработка' },
      { phase: 'Launch', duration: '11–12 нед', activity: 'Запуск MVP' },
    ],
  },

  solution: {
    sectionTitle: 'Решение',
    intro:
      'Создание системы, которая автоматически обрабатывает рыночные данные и генерирует сигналы.',

    dataFlow: {
      blockTitle: 'Поток данных',
      description:
        'Ранее процесс был ручным. Новая система собирает данные через WebSocket и обрабатывает автоматически.',
      beforeLabel: 'Было',
      afterLabel: 'Стало',
      beforeSteps: [
        'Мониторинг вручную',
        'Копирование в таблицы',
        'Ручной анализ',
        'Нет логирования',
      ],
      afterSteps: [
        'WebSocket поток данных',
        'Signal engine',
        'Логирование',
        'Дашборд',
      ],
      imagePlaceholder: {
        caption: 'До/после автоматизации',
        alt: 'Пайплайн данных',
      },
      diagram: signalLifecycle,
      diagramCaption: 'Жизненный цикл сигнала: обнаружение, оценка, отслеживание',
    },

    keyFixes: {
      blockTitle: 'Ключевые изменения',
      theProblemLabel: 'Проблема',
      whatIDidLabel: 'Что сделала',
      items: [
        {
          title: 'WebSocket интеграция',
          problem: 'Ручной сбор данных',
          fix: 'Определила требования',
          outcome: 'Реальное время',
        },
        {
          title: 'Signal engine',
          problem: 'Нет правил',
          fix: 'Определила сигналы',
          outcome: 'Автоматизация',
        },
        {
          title: 'Дашборд',
          problem: 'Нет прозрачности',
          fix: 'Спроектировала UI',
          outcome: 'Контроль системы',
        },
      ],
    },

    architectureDecisions: {
      blockTitle: 'Архитектурные решения',
      decisionLabel: 'Решение',
      rationaleLabel: 'Причина',
      tradeoffLabel: 'Компромисс',
      items: [
        {
          title: 'WebSocket',
          decision: 'Использовали WebSocket',
          rationale: 'Реальное время',
          tradeoff: 'Сложность',
        },
        {
          title: 'PostgreSQL',
          decision: 'Использовали PostgreSQL',
          rationale: 'Достаточно для MVP',
          tradeoff: 'Ограничения масштабирования',
        },
        {
          title: 'Binance только',
          decision: 'Ограничили scope',
          rationale: 'Упростили MVP',
          tradeoff: 'Нет мульти-бирж',
        },
      ],
    },
  },

  artifacts: {
    sectionTitle: 'Артефакты',
    sectionSubtitle: 'Примеры работы',
    items: [
      { type: 'Jira', caption: 'Backlog', alt: 'Jira board' },
      { type: 'Диаграммы', caption: 'BPMN', alt: 'Диаграммы' },
    ],
    userFlow: {
      image: userInteraction,
      caption: 'Пользовательский сценарий: взаимодействие с API и обработка ошибок',
    },
    product: {
      items: [
        { image: dashboard, title: 'Дашборд', caption: 'Обзор рынка и состояние системы в реальном времени' },
        { image: signals, title: 'Сигналы', caption: 'Автоматически сгенерированные торговые сигналы' },
        { image: details, title: 'Детали сигнала', caption: 'Детальный просмотр с объяснением и метриками' },
      ],
    },
  },

  results: {
    sectionTitle: 'Результаты',
    headline: 'Система работает в реальном времени',
    quantitative: [
      { value: '50+', label: 'Активов', detail: '' },
      { value: '<1с', label: 'Задержка', detail: '' },
      { value: '3 часа', label: 'Экономия', detail: '' },
      { value: '100%', label: 'Логирование', detail: '' },
    ],
    teamSaidHeading: 'Что изменилось',
    qualitative: [
      'Автоматизация',
      'Стабильность',
      'Прозрачность',
    ],
    timeToValueHeading: 'Срок',
    timeToValue: '12 недель',
  },

  howIWork: {
    sectionTitle: 'Как я работаю',
    intro: 'Работаю в сложных системах',
    principles: [
      {
        title: 'Начинаю с проблемы',
        description: 'Фокус на проблеме',
      },
      {
        title: 'Документирую',
        description: 'Фиксирую решения',
      },
      {
        title: 'Управляю scope',
        description: 'Контроль задач',
      },
      {
        title: 'Смотрю метрики',
        description: 'Оцениваю результат',
      },
    ],
    toolsHeading: 'Инструменты',
    tools: ['Jira', 'Miro', 'SQL'],
  },

  contact: {
    headline: 'Открыта к предложениям',
    body: 'Готова к ролям PM / BA',
    email: 'nextgen.coders.lab@gmail.com',
    linkedin: 'www.linkedin.com/in/ekaterina-chistova-9573532bb',
    availability: 'С мая 2026',
    emailCta: 'Написать',
    linkedinCta: 'LinkedIn',
  },
}