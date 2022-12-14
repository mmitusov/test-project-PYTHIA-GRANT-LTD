import {$host} from './index'

export const fetchCampaign = async () => {
    const {data} = await $host.get('api/donator/check')
    return data
}

export const campaignDonation = async (campaignName, donatorUsername, donationAmount) => {
    const {data} = await $host.post('api/donator/donation', {
        campaignName, donatorUsername, donationAmount
    })
    return data
}