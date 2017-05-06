import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  READON = 1;
  RETURN = 2;
  pageIndex = 0;

  pages:Array<Object> = [
    {
      title: 'Introduction',
      description: "Page 1 description",
      actions: [
        {
          title: 'Read On',
          effect: this.READON
        }
      ]
    },
    {
      title: 'Page 2 ...',
      description: "Page 2 description",
      actions: [
        {
          title: 'Return',
          effect: this.RETURN
        }
      ]
    }
  ];

  currentPage() {
    console.log('calling current page');
    console.log(this.pageIndex);
    return this.pages[this.pageIndex];
  }

  selectAction(action){
    console.log(action);
    switch(action.effect){
      case 1:
        this.pageIndex++;
        break;
      case 2:
        this.pageIndex--;
        break;
    }
  }
}
