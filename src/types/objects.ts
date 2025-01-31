export interface AuthOutgoing {
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

export interface Channel {
  id: string;
  order: string;
  parentId: string;
  properties: ChannelProperties;
}

export interface Connection {
  channelInfos: ChannelInfos;
  clientId: number;
  clientInfos: Client[];
  id: number;
  status: number;
  properties: ServerProperties;
}

export interface ChannelProperties {
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

export interface ChannelInfos {
  rootChannels: Channel[];
  subChannels: {
    [key: string]: Channel[];
  };
}

export interface Client {
  channelId: string;
  id: number;
  properties: ClientProperties;
}

export interface ClientProperties {
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

export interface ServerProperties {
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

export interface AuthIncoming {
  status: {
    code: number;
    message: string;
  };
  type: string;
  payload: {
    apiKey: string;
    connections: Connection[];
  };
}

export interface Invoker {
  id: number;
  name: string;
  uniqueIdentifier: string;
}