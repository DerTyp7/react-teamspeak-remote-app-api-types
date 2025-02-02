import { IChannelProperties, IClientProperties, IInvoker, IServerProperties } from "../index";

export interface ILogEvent {
  type: string;
  payload: {
    channel: string;
    complete: string;
    id: number;
    level: number;
    message: string;
    time: string;
  };
}

export interface ITalkStatusChangedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    isWhisper: boolean;
    status: number;
  };
}

export interface IChannelPropertiesUpdatedEvent {
  type: string;
  payload: {
    channelId: string;
    connectionId: number;
    properties: IChannelProperties;
  };
}

export interface IClientMovedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    hotReload: boolean;
    newChannelId: string;
    oldChannelId: string;
    properties: IClientProperties;
  };
}

export interface IChannelEditedEvent {
  type: string;
  payload: {
    channelId: string;
    connectionId: number;
    invoker: IInvoker;
    properties: IChannelProperties;
  };
}

export interface IClientPropertiesUpdatedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    properties: IClientProperties;
  };
}

export interface IClientSelfPropertiesUpdatedEvent {
  type: string;
  payload: {
    connectionId: number;
    flag: string;
    newValue: string;
    oldValue: string;
  };
}

export interface IServerPropertiesUpdatedEvent {
  type: string;
  payload: {
    connectionId: number;
    properties: IServerProperties;
  };
}