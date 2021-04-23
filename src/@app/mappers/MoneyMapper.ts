import { Money } from '@app/domain/Money';

export default class MoneyMapper {
    public static toDomain(model: any) {
        return new Money({
            currency: model.currency,
            value: model.value
        })
    }

    public static toPersistence(domainModel: Money) {
        return {
            currency: domainModel.currency,
            value: domainModel.value
        }
    }

}
