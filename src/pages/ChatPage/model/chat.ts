import avatar from 'shared/assets/avatars/avatar.png';

export const Options: Record<number, string> = {
    0: 'Хочу с кем-нибудь поговорить',
    1: 'Хочу, чтобы меня выслушали',
    2: 'У меня есть вопрос',
    3: 'Мне просто как-то не очень…',
    4: 'Мне очень плохо!',
};

export const OptionsAnswers: Record<number, (name: string) => string> = {
    0: (name: string) => `Хорошо, о  чем вы хотели бы поговорить, ${name}?`,
    1: (name: string) => `Конечно, ${name}, я вас слушаю`,
    2: (name: string) => `О чем вы хотите спросить, ${name}?`,
    3: (name: string) => `Расскажите мне, пожалуйста, подробнее, ${name}. Что вас беспокоит?`,
    4: (name: string) => (
        `Расскажите, ${name}, что вас беспокоит - 
        я вас внимательно слушаю и очень постараюсь помочь`
    ),
};

interface Answers {
    text: (name?: string, option?: keyof typeof Options) => string;
}

const messages: Record<number, Answers> = {
    0: {
        text: () => (
            'Приветствую! Сегодня я - ваш консультант. Как я могу к вам обращаться?'
        ),
    },
    1: {
        text: (name) => (
            `Итак, ${name || ''}, что вас беспокоит? Как я могу вам помочь?`
        ),
    },
    2: {
        text: (name, option) => OptionsAnswers[option || 0](name || ''),
    },
};

interface Chat {
    avatar: string;
    name: string;
    messages: Record<number, Answers>
}

export const chatsDB: Record<number, Chat> = {
    0: {
        avatar,
        name: 'Александр',
        messages,
    },
};