import { PluginOptions } from './plugins/plugin';
import { LookupService } from './plugins/lookup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;


  constructor(private lookupService: LookupService) { }
  title = 'shell';

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}
