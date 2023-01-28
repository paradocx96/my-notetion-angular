export interface Note {
  _id: string,
  title: string,
  description: string,
  favorite: boolean,
  author: string,
  created: string
}

export interface NoteCreateUpdate {
  title: string,
  description: string,
  favorite: boolean,
}

export interface NoteSingle {
  _id: string,
  title: string,
  description: string,
  favorite: boolean,
  author: string,
  created: string,
  createdAt: string,
  updatedAt: string
}
