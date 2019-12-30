/**
 * Какой-то из бэкендов присылает нам данные в JSON в snake_case, мы на своем проекте
 * везде используем camelCase. Нужна функция, которая на вход будет принимать данные,
 * полученные через JSON.parse, там не может быть функций, циклических зависимостей и т.д.,
 * все объекты имеют ключи в snake_case. Функция должна вернуть новый анаглогичный объект
 * со всей вложенной структурой, в котором ключи объектов заменены на camelCase.
 **/

function toCamelCase(val) {
  getObj(val);

  function getObj(o) {
    for (let prop in o) {

      const arr = prop.split('_');
      for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
      }
      const camelProp = arr.join('');

      o[camelProp] = o[prop];
      delete o[prop];

      if (Array.isArray(o[camelProp])) {
        o[camelProp].forEach(el => {
          getObj(el)
        })
      }

      if (typeof o[camelProp] === 'object' && !Array.isArray(o[camelProp])) {
        getObj(o[camelProp])
      }
    }
  }

  return val
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      {
        simple_prop: 'a',
        empty_prop: null,
        empty_obj_prop: {},
        object_prop: {
          inside_prop: 3
        },
        array_prop: [
          {
            inside_array_prop: 'b'
          },
          {
            inside_array_prop: {
              deep_inside_prop: 'c'
            }
          }
        ]
      }
    ],
    result:
      {
        simpleProp: 'a',
        emptyProp: null,
        emptyObjProp: {},
        objectProp: {
          insideProp: 3
        },
        arrayProp: [
          {
            insideArrayProp: 'b'
          },
          {
            insideArrayProp: {
              deepInsideProp: 'c'
            }
          }
        ]
      }
  },
  {
    args: [
      {}
    ],
    result: {}
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = toCamelCase;
