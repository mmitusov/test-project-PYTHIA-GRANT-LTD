import {$host} from './index'

export const fetchCampaign = async () => {
    const {data} = await $host.get('api/donator/check')
    return data
}

export const fetchOnefetchCampaign = async (id) => {
    const {data} = await $host.get('api/donator/one' + id)
    return data
}