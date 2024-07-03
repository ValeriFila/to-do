import { rtkApi } from '@/shared/config/rtkApi/rtkApi.ts'

interface IsDayOffParams {
    year: string

}

const isDayOffApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchDaysOff: build.query<string, IsDayOffParams>({
            query: ({ year }) => ({
                method: 'GET',
                url: `https://isdayoff.ru/api/getdata?year=${year}`,
                responseHandler: (response) => response.text(),
            }),
        }),
    }),
})

export const {
    useFetchDaysOffQuery
} = isDayOffApi
