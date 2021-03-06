import { combineReducers } from "redux";
import StatusReducer, { StatusState } from "./status_reducer";
import TimerReducer, { Countdown } from "./timer_reducer";
import TextReducer, { TextData } from "./text_reducer";
import SocketReducer, { WebSocketState } from "./socket_reducer";
import ErrorReducer, { ErrorState } from "./error_reducer";
import MultiReducer, { MultiState } from "./mutli_reducer";

export interface Action {
  payload: any;
  type: Symbol;
}

export declare namespace ReduxStore {
  export type State = {
    textData: TextData;
    status: StatusState;
    timer: Countdown;
    socket: WebSocketState;
    multi: MultiState;
    error: ErrorState;
  };
}

export default combineReducers({
  textData: TextReducer,
  timer: TimerReducer,
  multi: MultiReducer,
  status: StatusReducer,
  socket: SocketReducer,
  error: ErrorReducer,
});
