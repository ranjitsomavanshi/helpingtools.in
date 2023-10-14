import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-json-tools',
  templateUrl: './json-tools.component.html',
  styleUrls: ['./json-tools.component.css']
})
export class JsonToolsComponent {
  editorForm = new FormControl();
  editorContent: string = JSON.stringify({}, null, 2);

  jsonToDisplay: any = JSON.parse(this.editorContent);

  onEditorContentChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.editorContent = target.value;

    try {
      this.jsonToDisplay = JSON.parse(this.editorContent);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  }
}
