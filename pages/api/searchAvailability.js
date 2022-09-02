import { client } from "../../squareConfig.js";
import moment from 'moment';

export default async function handler(req, res) {
    try {
        const date = req.query.date
        const teamMemberId = req.query.teamMemberId;
        const serviceVariationId = req.query.serviceVariationId;
        const locationId = req.query.locationId;

        const curDate = moment(date, 'YYYY-MM-DD')
        const nextDate = moment(date, 'YYYY-MM-DD').add(1, 'd')

        console.log(curDate)
        console.log(nextDate)

        const response = await client.bookingsApi.searchAvailability({
            query: {
                filter: {
                startAtRange: {
                    startAt: `${curDate.format('YYYY')}-${curDate.format('MM')}-${curDate.format('DD')}` + 'T00:00:00+00:00',
                    endAt:  `${nextDate.format('YYYY')}-${nextDate.format('MM')}-${nextDate.format('DD')}` + 'T00:00:00+00:00'
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
        // console.log(response.result);
        response.result.availabilities.map(availability => {
            availability.appointmentSegments[0].serviceVariationVersion = Number(availability.appointmentSegments[0].serviceVariationVersion)
        });
        res.status(200).json(response.result);
    } catch(error) {
        console.log(error);
    }
}