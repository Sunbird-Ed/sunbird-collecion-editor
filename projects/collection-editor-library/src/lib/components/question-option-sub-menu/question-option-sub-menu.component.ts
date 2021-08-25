import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export class SubMenuEvent {
  index: number;
  value: any;
}
export class SubMenu {
  id: string;
  name: string;
  value: string;
  enabled: boolean;
  type: string;
}
@Component({
  selector: 'lib-question-option-sub-menu',
  templateUrl: './question-option-sub-menu.component.html',
  styleUrls: ['./question-option-sub-menu.component.css'],
})
export class QuestionOptionSubMenuComponent implements OnInit {
  constructor() {}
  @Input() subMenus: SubMenu;
  @Output() public onChange: EventEmitter<SubMenuEvent> = new EventEmitter<SubMenuEvent>();

  ngOnInit() {}

  onMenuClick(index) {
    const selectedMenu = this.subMenus[index];
    selectedMenu.enabled = !selectedMenu.enabled;
    if (selectedMenu.enabled && selectedMenu.type != 'input' && Array.isArray(selectedMenu.value)) {
      selectedMenu.value.push({ index: selectedMenu.value.length });
    }
  }

  onValueChange(event, index) {
    if (this.subMenus[index].type === 'input') this.subMenus[index].value = event.target.value;
    this.onChange.emit({ index: index, value: this.subMenus[index].value });
  }
}
