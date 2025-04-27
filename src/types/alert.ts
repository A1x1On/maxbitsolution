export interface IAlertResp {
  status: number;
  msg: string;
}

export interface IAlertMap {
  text: string;
  color: string;
}

export interface IAlert {
  success: (response?: IAlertResp | string) => void;
  error: (response?: IAlertResp | string) => void;
  info: (response?: IAlertResp | string) => void;
  warning: (response?: IAlertResp | string) => void;
  caught: (response?: IAlertResp | string | unknown) => void;
}
