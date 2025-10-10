import { isPlatformServer } from "@angular/common";
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainerRef.clear();
  }
}
