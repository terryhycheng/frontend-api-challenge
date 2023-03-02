export type userType = {
  id: number;
  handle: string;
};

export type peepType = {
  id: number;
  body: string;
  created_at: string;
  updated_at: string;
  user: userType;
  likes: {
    user: userType;
  }[];
};

export type sessionType = {
  user_id?: number;
  session_key?: string;
  errors?: {
    password: string;
  };
};
