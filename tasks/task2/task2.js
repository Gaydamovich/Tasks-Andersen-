/**
 У нас есть набор билетов вида:

 [
   { from: 'London', to: 'Moscow' },
   { from: 'NY', to: 'London' },
   { from: 'Moscow', to: 'SPb' },
   ...
 ]

 Из этих билетов можно построить единственный, неразрывный маршрут.
 Петель и повторов в маршруте нет.

 Нужно написать функцию, которая возвращает билеты
 в порядке следования по маршруту.
 **/


function getRoute(tickets = []) {
    let listTo = [];
    let results = [];
    for (let i = 0; i < tickets.length; i++) {
        listTo.push(tickets[i].to)
    }

    for (let i = 0; i < tickets.length; i++) {
        if(!listTo.includes(tickets[i].from)) {
            results.push(tickets[i])
        }
    }

    for (let t = 0; t < tickets.length; t++) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].from === results[results.length - 1].to) {
                results.push(tickets[i])
            }
        }
    }

    return results
}

/*------------------*/
/*    Test cases    */
/*------------------*/

const testcases = [
  {
    args: [
      [
        { from: 'London', to: 'Moscow' },
        { from: 'New-York', to: 'London' },
        { from: 'Moscow', to: 'SPb' },
        { from: 'San-Francisco', to: 'New-York' }
      ]
    ],
    result:
      [
        { from: 'San-Francisco', to: 'New-York' },
        { from: 'New-York', to: 'London' },
        { from: 'London', to: 'Moscow' },
        { from: 'Moscow', to: 'SPb' }
      ]
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = getRoute;
