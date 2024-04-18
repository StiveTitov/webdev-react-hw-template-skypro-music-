import timeFormat from "./timeFormat";

describe('Функция форматирования времени', () => {
    it('должена корректно форматировать время меньше минуты', () => {
      // Тестовый код
      expect(timeFormat(10)).toBe("00:10")
    });
   
    it('корректно форматировать минуту времени ', () => {
      // Тестовый код
      expect(timeFormat(60)).toBe("01:00")
    });
    it('корректно форматировать время больше минуты ', () => {
        // Тестовый код
        expect(timeFormat(120)).toBe("02:00")
      });
   });