/**
 Необходимо написать функцию, которая на вход принимает API call (вызов fetch),
 и вызывает его.
 Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 Если в итоге выполнить API call не удалось, бросить ошибку.
 **/

let countCall = 0;
async function get(f) {
    try {
        await f()
    } catch(e) {
        countCall++;
        if (countCall === 5) {
            throw new Error(e)
        } else await get(f)
    }
}


module.exports['solution'] = get;
