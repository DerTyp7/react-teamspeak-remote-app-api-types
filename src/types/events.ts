import { ChannelProperties, ClientProperties, Invoker } from "../index";

export interface LogEvent {
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

export interface TalkStatusChangedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    isWhisper: boolean;
    status: number;
  };
}

export interface ChannelPropertiesUpdatedEvent {
  type: string;
  payload: {
    channelId: string;
    connectionId: number;
    properties: ChannelProperties;
  };
}

export interface ClientMovedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    hotReload: boolean;
    newChannelId: string;
    oldChannelId: string;
    properties: ClientProperties;
  };
}

export interface ChannelEditedEvent {
  type: string;
  payload: {
    channelId: string;
    connectionId: number;
    invoker: Invoker;
    properties: ChannelProperties;
  };
}

export interface ClientPropertiesUpdatedEvent {
  type: string;
  payload: {
    clientId: number;
    connectionId: number;
    properties: ClientProperties;
  };
}

export interface ClientSelfPropertiesUpdatedEvent {
  type: string;
  payload: {
    connectionId: number;
    flag: string;
    newValue: string;
    oldValue: string;
  };
}