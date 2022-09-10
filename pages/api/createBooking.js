import { client } from "../../squareConfig.js";

export default async function handler(req, res) {
    try {
        const date = req.query.date;
        const teamMemberId = req.query.teamMemberId;
        const serviceVariationId = req.query.serviceVariationId;
        const serviceVariationVersion = req.query.serviceVariationVersion;
        const locationId = req.query.locationId;
        const customerId = req.query.customerId;
        const durationMinutes = req.query.durationMinutes;
        const response = await client.bookingsApi.createBooking({
          booking: {
            startAt: date,
            locationId: locationId,
            customerId: '141NWHDVWBGVQHY4S0T18KMMXR',
            appointmentSegments: [
              {
                durationMinutes: durationMinutes,
                serviceVariationId: serviceVariationId,
                teamMemberId: teamMemberId,
                serviceVariationVersion: serviceVariationVersion
              }
            ]
          }
        });
      
        console.log(response.result);
        res.status(200)
      } catch(error) {
        console.log(error);
      }
}