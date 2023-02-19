import { generateClassName } from './generateClassName';


describe('Генерация className', () => {
  it('Пустой массив', () => {
    expect(generateClassName([])).toBe('');
  });

  it('В массиве один класс', () => {
    expect(generateClassName([ 'className' ])).toBe('className');
  });

  it('Массив заполнен строками', () => {
    expect(generateClassName([ 'firstClass', 'secondClass' ])).toBe('firstClass secondClass');
  });

  it('Массив заполнен случайными величинами', () => {
    expect(generateClassName([ 'firstClass', false, 'secondClass', undefined, 'thirdClass' ]))
      .toBe('firstClass secondClass thirdClass');
  });

  it('Массив заполнен false и undefined', () => {
    expect(generateClassName([ false, undefined, false ])).toBe('');
  });
});
