// app/types/navigation.ts
export type HomeStackParamList = {
  HomeScreen: undefined | { screen: 'HomeScreen' };
  HomeDetail: undefined;
};

export type SearchStackParamList = {
  SearchScreen: undefined;
  SearchDetail: undefined;
};

export type PostStackParamList = {
  PostScreen: undefined;
  PostDetail: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ProfileDetail: undefined;
};
