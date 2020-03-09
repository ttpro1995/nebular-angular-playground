import { Component, OnInit } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
  id?: string;
}

@Component({
  selector: 'app-treegrid',
  templateUrl: './treegrid.component.html',
  styleUrls: ['./treegrid.component.scss']
})
export class TreegridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customColumn = 'name';
  idColumn = 'id';
  defaultColumns = [ 'size', 'button', 'items' ];
  // defaultColumns = [];
  // allColumns = [ this.customColumn, ...this.defaultColumns ];
  allColumns = ['name', 'id']

  data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
      children: [
        { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' , id: 'a' } },
        { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' , id: 'b' } },
        { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' , id: 'c' } },
      ],
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
      children: [
        { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' , id: 'd' } },
        { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' ,id: 'e'  } },
      ],
    },
  ];

}
