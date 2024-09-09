
export default defineEventHandler(async (event) => {

    // receiving query params
    // useQuery() is the default hook to handle Query Parameters

    // const { name } = getQuery(event)

    // // receiving POST data
    // // useBody() is the default hook to handle fetch body

    // const { age } = await readBody(event)

    const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_BRLsvIw3hYoKorzMxChAO5MPxrHyFsjAQpXei840")

    return data
})