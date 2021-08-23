import { PluginOptions } from './plugin';
import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-plugin-proxy',
  template: `
    <ng-container #placeHolder></ng-container>
  `
})
export class PluginProxyComponent implements OnInit, OnChanges {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  @Input() options: PluginOptions;


  constructor(private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  async ngOnChanges() {
    this.viewContainer.clear();
    const component = await loadRemoteModule(this.options)
      .then(m => m[this.options.componentName]);

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);

    const compRef = this.viewContainer.createComponent(factory, undefined, this.injector);

    // const compInstance = compRef.instance;
    // compInstance.a = 'xx'
    // compInstance.onChange.subscribe(...)
    // compInstance.m();

  }


}
