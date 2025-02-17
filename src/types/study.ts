import { Study, User } from '@prisma/client';

export interface IStudyResponse {
  ok: boolean;
  study: IStudyWithUser;
}
export interface IStudyWithUser extends Study {
  user: User;
}

export interface StudyModal {
  modal: boolean;
  setModal: Function;
}
export interface studyForm {
  studyName?: string;
  leader?: number;
  introduce?: string;
  category?: string;
  tag?: string;
  membersLimit?: number;
  chatLink: string;
  joinMsg?: string;
  image?: FileList;
  studyImage?: FileList;
  avatar?: FileList;
}
export interface IStudyResponse {
  ok: boolean;
  myStudy: Study[];
  totalStudies: Study[];
}
