type GenerateClassName = (args: (string | false | undefined)[]) => string;

export const generateClassName: GenerateClassName = (args) => {
  if (args.length === 0) return '';
  const tt = args.reduce((acc, item) => {
    if (!item) return acc;

    return [ ...acc, item ];
  }, []);

  return tt.join(' ');
};
