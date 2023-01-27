export interface Note {
  _id: string,
  title: string,
  description: string,
  favorite: boolean,
  author: string,
  created: string
}

export interface NoteCreate {
  title: string,
  description: string,
  favorite: boolean,
}