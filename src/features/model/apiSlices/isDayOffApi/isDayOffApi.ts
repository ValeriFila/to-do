import { rtkApi } from '@/shared/config/rtkApi/rtkApi.ts'

interface IsDayOffParams {
    year: string
    month: string
}

const isDayOffApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchDaysOff: build.query<string, IsDayOffParams>({
            query: ({ year, month }) => ({
                method: 'GET',
                url: `https://isdayoff.ru/api/getdata?year=${year}&month=${month}`
            }),
        }),
    }),
})

export const {
    useFetchDaysOffQuery
} = isDayOffApi
