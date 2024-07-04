import { rtkApi } from '@/shared/config/rtkApi/rtkApi.ts'

interface IsDayOffParams {
    date1: string
    date2: string
}

const isDayOffApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchDaysOff: build.query<string, IsDayOffParams>({
            query: ({ date1, date2 }) => ({
                method: 'GET',
                url: `https://isdayoff.ru/api/getdata?date1=${date1}&date2=${date2}`,
                responseHandler: (response) => response.text(),
            }),
        }),
    }),
})

export const {
    useFetchDaysOffQuery
} = isDayOffApi
