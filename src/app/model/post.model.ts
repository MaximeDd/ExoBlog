export class PostModel {
  title: string;
  content: string;
  loveIts: number;
  creationDate: string;

  constructor(pTitle: string, pContent: string) {
    this.title = pTitle;
    this.content = pContent;
    this.loveIts = 0;
    this.creationDate = this.dateNow();
  }

  dateNow() {
    const dateNow = new Date();
    return this.addZero(dateNow.getDay().toString()) + '/'
      + this.addZero(dateNow.getMonth().toString()) + '/'
      + this.addZero(dateNow.getFullYear().toString()) + ' : '
      + this.addZero(dateNow.getHours().toString()) + 'h '
      + this.addZero(dateNow.getMinutes().toString());
  }

  addZero(numString: string) {
    return numString.length === 1 ? '0' + numString : numString;
  }
}
