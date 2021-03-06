import { CMSayTime } from '../../Disp/VariablesAndData';
import { BackupFunctions } from '../../Main/VariablesAndData';
import { CMOptions } from '../VariablesAndData';

/**
 * This function changes some of the time-displays in the game to be more detailed
 * It is called by a change in CM.Options.DetailedTime
 */
export default function ToggleDetailedTime() {
  if (CMOptions.DetailedTime === 1) Game.sayTime = CMSayTime;
  else Game.sayTime = BackupFunctions.sayTime;
}
