import Booking from 'event/domain/Booking';

export default class BookingMapper {
  public static toDomain(model: any) {
    return new Booking({
      bookingId: model.booking_id,
      eventId: model.event_id,
      userId: model.user_id,
      isComplete: model.is_complete,
      isPaymentSuccessful: model.is_payment_successful,
      paymentDetails: model.payment_details,
      bookedAt: model.booked_at,
      lastTryAt: model.last_try_at,
      createdAt: model.created_at,
    });
  }

  public static toPersistence(domainModel: Booking) {
    return {
      booking_id: domainModel.bookingId,
      event_id: domainModel.eventId,
      user_id: domainModel.userId,
      is_complete: domainModel.isComplete,
      is_payment_successful: domainModel.isPaymentSuccessful,
      payment_details: domainModel.paymentDetails,
      booked_at: domainModel.bookedAt,
      last_try_at: domainModel.lastTryAt,
      created_at: domainModel.createdAt,
    };
  }
}
