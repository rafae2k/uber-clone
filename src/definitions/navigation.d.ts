import { RideStackParamList } from '../components/Ride';
import { RootStackParamList } from '../routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends RideStackParamList {}
  }
}
