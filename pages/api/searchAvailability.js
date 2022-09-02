import { client } from "../../squareConfig.js";

export default async function handler(req, res) {
    try {
        const day = req.query.day;
        const month = req.query.month;
        const year = req.query.year;
        const teamMemberId = req.query.teamMemberId;
        const serviceVariationId = req.query.serviceVariationId;
        const locationId = req.query.locationId;
        const response = await client.bookingsApi.searchAvailability({
            query: {
                filter: {
                startAtRange: {
                    startAt: `${year}-${month}-${day}` + 'T00:00:00+00:00',
                    endAt:  `${year}-${month}-0${parseInt(day)+1}` + 'T00:00:00+00:00'
                },
                locationId: locationId,
                segmentFilters: [
                    {
                    serviceVariationId: serviceVariationId,
                    teamMemberIdFilter: {
                        any: [
                            teamMemberId
                             ]
                            }
                     }
                    ]
                 }
                }
            });
        console.log(response.result);
        response.result.availabilities.map(availability => {
            availability.appointmentSegments[0].serviceVariationVersion = Number(availability.appointmentSegments[0].serviceVariationVersion)
        });
        res.status(200).json(response.result);
    } catch(error) {
        console.log(error);
    }
}