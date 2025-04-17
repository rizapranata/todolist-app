// app/types/navigation.ts
export type HomeStackParamList = {
  HomeScreen: undefined | {screen: 'HomeScreen'; id: string};
  DetailTodo: {id?: string};
};

export type SearchStackParamList = {
  SearchScreen: undefined;
  SearchDetail: undefined;
};

export type AddToDoStackParamList = {
  AddToDoScreen: undefined | {screen: 'AddToDoScreen'; id: string};
  PostDetail: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ProfileDetail: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Todo: {
    screen: keyof AddToDoStackParamList;
    params?: AddToDoStackParamList[keyof AddToDoStackParamList];
  };
};
