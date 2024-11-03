import { CurrentConditions } from '../components/current-conditions/models/current-conditions.type';

export interface ConditionsAndZip {
  zip: string;
  data: CurrentConditions;
  iconUrl: string;
}
