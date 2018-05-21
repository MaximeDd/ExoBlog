export class Post {
  title: string;
  content: string;
  loveIts: number;
  creationDate: Date;

  constructor(pTitle: string, pContent: string) {
    this.title = pTitle;
    this.content = pContent;
    this.loveIts = 0;
    this.creationDate = new Date();
  }
}
