export interface IAuthOutgoing {
  type: string;
  payload: {
    identifier: string;
    version: string;
    name: string;
    description: string;
    content: {
      apiKey: string;
    };
  };
}

export interface IChannel {
  id: string;
  order: string;
  parentId: string;
  properties: IChannelProperties;
}

export interface IConnection {
  channelInfos: IChannelInfos;
  clientId: number;
  clientInfos: IClient[];
  id: number;
  status: number;
  properties: IServerProperties;
}

export interface IChannelProperties {
  bannerGfxUrl: string;
  bannerMode: number;
  codec: number;
  codecIsUnencrypted: boolean;
  codecLatencyFactor: number;
  codecQuality: number;
  deleteDelay: number;
  description: string;
  flagAreSubscribed: boolean;
  flagDefault: boolean;
  flagMaxclientsUnlimited: boolean;
  flagMaxfamilyclientsInherited: boolean;
  flagMaxfamilyclientsUnlimited: boolean;
  flagPassword: boolean;
  flagPermanent: boolean;
  flagSemiPermanent: boolean;
  forcedSilence: boolean;
  iconId: number;
  maxclients: number;
  maxfamilyclients: number;
  name: string;
  namePhonetic: string;
  neededTalkPower: number;
  order: string;
  permissionHints: number;
  storageQuota: number;
  topic: string;
  uniqueIdentifier: string;
}

export interface IChannelInfos {
  rootChannels: IChannel[];
  subChannels: {
    [key: string]: IChannel[];
  };
}

export interface IClient {
  channelId: string;
  id: number;
  properties: IClientProperties;
}

export interface IClientProperties {
  away: boolean;
  awayMessage: string;
  badges: string;
  channelGroupId: string;
  channelGroupInheritedChannelId: string;
  country: string;
  created: number;
  databaseId: string;
  defaultChannel: string;
  defaultChannelPassword: string;
  defaultToken: string;
  description: string;
  flagAvatar: string;
  flagTalking: boolean;
  iconId: number;
  idleTime: number;
  inputDeactivated: boolean;
  inputHardware: boolean;
  inputMuted: boolean;
  integrations: string;
  isChannelCommander: boolean;
  isMuted: boolean;
  isPrioritySpeaker: boolean;
  isRecording: boolean;
  isTalker: boolean;
  lastConnected: number;
  metaData: string;
  monthBytesDownloaded: number;
  monthBytesUploaded: number;
  myteamspeakAvatar: string;
  myteamspeakId: string;
  neededServerQueryViewPower: number;
  nickname: string;
  nicknamePhonetic: string;
  outputHardware: boolean;
  outputMuted: boolean;
  outputOnlyMuted: boolean;
  permissionHints: number;
  platform: string;
  serverGroups: string;
  serverPassword: string;
  signedBadges: string;
  talkPower: number;
  talkRequest: number;
  talkRequestMsg: string;
  totalBytesDownloaded: number;
  totalBytesUploaded: number;
  totalConnections: number;
  type: number;
  uniqueIdentifier: string;
  unreadMessages: number;
  userTag: string;
  version: string;
  volumeModificator: number;
}

export interface IServerProperties {
  antiFloodPointsNeededCommandBlock: number;
  antiFloodPointsNeededIpBlock: number;
  antiFloodPointsNeededPluginBlock: number;
  antiFloodPointsTickReduce: number;
  askForPrivilegeKeyAfterNickname: boolean;
  askForPrivilegeKeyForChannelCreation: boolean;
  askForPrivilegeKeyForModify: boolean;
  awayMessage: string;
  badges: string;
  channelGroupId: string;
  channelGroupInheritedChannelId: string;
  clientType: number;
  connectionBandwidthReceived: number;
  connectionBandwidthSent: number;
  connectionClientIp: string;
  connectionConnectedTime: number;
  connectionFiletransferBandwidthReceived: number;
  connectionFiletransferBandwidthSent: number;
  connectionPacketloss: number;
  connectionPing: number;
  connectionPacketsReceived: number;
  connectionPacketsSent: number;
  connectionPort: number;
  connectionQueryBandwidthReceived: number;
  connectionQueryBandwidthSent: number;
  connectionServerIp: string;
  connectionServerPort: number;
  connectionThrottleBandwidthReceived: number;
  connectionThrottleBandwidthSent: number;
  country: string;
  created: number;
  defaultChannel: string;
  defaultChannelPassword: string;
  defaultServerGroup: string;
  defaultToken: string;
  flagAvatar: string;
  iconId: number;
  inputHardware: boolean;
  inputMuted: boolean;
  isChannelCommander: boolean;
  isMuted: boolean;
  isPrioritySpeaker: boolean;
  isRecording: boolean;
  isTalker: boolean;
  isTts: boolean;
  metaData: string;
  monthBytesDownloaded: number;
  monthBytesUploaded: number;
  myteamspeakAvatar: string;
  myteamspeakId: string;
  neededServerQueryViewPower: number;
  nickname: string;
  nicknamePhonetic: string;
  outputHardware: boolean;
  outputMuted: boolean;
  outputOnlyMuted: boolean;
  permissionHints: number;
  platform: string;
  serverPassword: string;
  signedBadges: string;
  talkPower: number;
  talkRequest: number;
  talkRequestMsg: string;
  totalBytesDownloaded: number;
  totalBytesUploaded: number;
  totalConnections: number;
  type: number;
  uniqueIdentifier: string;
  unreadMessages: number;
  userTag: string;
  version: string;
  volumeModificator: number;
}

export interface IAuthIncoming {
  status: {
    code: number;
    message: string;
  };
  type: string;
  payload: {
    apiKey: string;
    connections: IConnection[];
  };
}

export interface IInvoker {
  id: number;
  name: string;
  uniqueIdentifier: string;
}

export interface IGroup {
  iconId: number;
  id: string;
  name: string;
  nameMode: number;
  neededMemberAddPower: number;
  neededMemberRemovePower: number;
  neededModifyPower: number;
  saveDb: boolean;
  sortId: string;
  type: number;
}

export interface IConnectStatus {
  connectionId: number;
  error: string;
  hotReload: boolean;
  info?: IConnectStatusInfo;
  status: number;
}

export interface IConnectStatusInfo {
  clientId: number;
  serverName: string;
  serverUid: string;
}