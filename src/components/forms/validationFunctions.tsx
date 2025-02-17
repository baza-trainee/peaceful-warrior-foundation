export const validateString =
  (t: (key: string) => string) => (value: string) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return t('required-shot');
    }

    const isValid =
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+(?:[-\s]{1,3}[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+)*$/u.test(
        trimmedValue
      );

    if (!isValid) {
      return t('invalid-characters');
    }

    return true;
  };

export const validateMessage =
  (t: (key: string) => string) => (value: string) => {
    if (!value.trim()) {
      return t('message-empty');
    }
    return true;
  };
