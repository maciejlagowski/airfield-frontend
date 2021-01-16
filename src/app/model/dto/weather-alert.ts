import {AlertImpact} from '../enum/alert-impact.enum';

export class WeatherAlert {
  senderName: string;
  event: string;
  startTime: string;
  endTime: string;
  description: string;
  alertImpact: AlertImpact;
}
